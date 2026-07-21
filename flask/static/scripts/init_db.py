import sqlite3
import csv
import os #so we can see if the db updated
from pathlib import Path
import importlib.util

class db_connectionHandler:
    # this would appear of you used db_connectionHandler.__doc__
    """
        Usage for this class "db_connectionHandler".
        *** IF CALLED AS SUBSCRIPT PUT IN with()
        It can be initialized as a subscript or ran as main.
            * if running as main or through terminal __repr__ can be used to see loaded modules
        It requires two named parameters for initialization: csv_source, db_file
            - csv_source: a csv formatted file with headers
            - db_file: an existing SQLite db file
                If a db file does not exist at the given location
                a new one is created
        It has one built in script that creates and updates the database based on SQL defined in this file.
            - Updates occur when the source CSV is updated, or imported scripts can handle other inserts. (Update scripts should therefore update the CSV)
        Scripts are pulled from 'db_handler_scripts/'
        If a script file is properly constructed it should populate into the object func_list
            - these will be callable as db_connectionHandler.[filename stem (without the filetype)]
            - a name: what the function is named
            - a short description
    """
    def __init__(self, csv_source, db_file):
        
        self.csv_source = Path(csv_source)
        self.db_file = Path(db_file)
        self.script_folder = Path("db_handler_scripts/")
        self.init_db()
        self.mod_list = {}
        self.modules = {}
        self.conn = None
        self.curr = None
        self.recently_init = 0

    def __enter__(self):
        self.conn = sqlite3.connect(self.db_file)
        self.curr = self.conn.cursor()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.conn.commit()
        self.conn.close()

    def __del__(self):
        if hasattr(self , "conn"):
            self.conn.close()

    def __repr__(self):
        output = ""
        output += f"CSV_source:     {csv_source}\n"
        output += f"db_file:        {db_file}\n"
        output += f"script_folder:  {self.script_folder} Exists{self.script_folder.is_file()}\n"
        output += f"Recently init:  {self.recently_init}\n"
        for key, value in self.mod_list.items():
            output += f"{key}: {value}\n"
        
        for schema in self.curr.fetchall():
            output += schema[0] + "\n"
        return output
    
    def init_db(self):
        if not self.db_file.is_file() or (self.csv_source.stat().st_mtime > self.db_file.stat().st_mtime):
            self.db_file.parent.mkdir(parents=True, exist_ok=True)
            self.db_file.touch()
            self._init_tables()
            self.recently_init = 1

    
    def _load_scripts(self):
         for file_path in self.script_folder.glob("*.py"):
              mod_name = file_path.stem
              spec = importlib.util.spec_from_file_location(mod_name, file_path)
              module = importlib.util.module_from_spec(spec)
              spec.loader.exec_module(module)
              self.modules[mod_name] = [module]
              self.mod_list[mod_name] = getattr(module, 'DESCRIPTION', 'No script description.')

    def run_script(self , mod):
        script_to_run = self.modules.get(mod)
        if script_to_run:
            try:
                script_to_run.run()
                return 1
            except:
                return 0
        return 0
         
    def _init_tables(self):
        self.conn = sqlite3.connect(self.db_file)
        self.curr = self.conn.cursor()
        self.curr.execute(
            '''
            CREATE TABLE table_recipes (
                recipe_id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT,
                instruction TEXT NOT NULL,
                prep_time INTEGER CHECK (prep_time >= 0),
                cook_time INTEGER CHECK (cook_time >= 0),
                servings INTEGER CHECK (servings >= 0),
                image_url TEXT
                ) strict;
            '''
        )
        self.curr.execute(
            '''
            CREATE TABLE table_category (
            category_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
            ) strict;
            '''
        )
        self.curr.execute(
            '''
            CREATE TABLE table_ingredients (
            ingredient_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            category INTEGER,
            is_staple INTEGER DEFAULT 0 CHECK (is_staple IN (0,1)),
            FOREIGN KEY (category) REFERENCES table_category (category_id)
            ) strict;
            '''
        )
        self.curr.execute (
            '''
            CREATE TABLE recipe_ingredients (
            recipe_id INTEGER,
            ingredient_id INTEGER,
            quantity INTEGER CHECK (quantity >= 0),
            unit TEXT,
            is_optional INTEGER DEFAULT 0 CHECK (is_optional IN (0,1)),
            PRIMARY KEY (recipe_id,ingredient_id),
            FOREIGN KEY (recipe_id) REFERENCES table_recipes (recipe_id),
            FOREIGN KEY (ingredient_id) REFERENCES table_ingredients (ingredient_id)
            ) strict;
            '''
        )

        self.conn.commit()
    
    
if __name__=="__main__":
    csv_source = '../db/source.csv'
    db_file = '../db/db_file.db'
    debug = input("would you like to debug? ")
    with db_connectionHandler(csv_source,db_file) as db:
        print(repr(db))