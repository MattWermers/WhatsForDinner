I propose splitting development into four domains. Web, Database, Infastructure, and functions. Each of these domains will be implemented partially when we complete the devleopment steps within the proposal. We can work on them together or divide the domains between ourselves.

# Web
Web focuses on webpage tools and appearance. This domain includes HTML and CSS for the webpage, design descisions like color pallete and layout, creating the interactables with JavaScript, and sending a properly constructed web request to the backend also via JavaScript.
- Associated task examples
    - Create header for the webpage as a style sheet that can be reused on each sub-page
    - Implement functionality to receive user input, send HTTP request (or something else @SQLite), and update the page upon retreival of the POST.
    - Create error handling for web errors, and bad request/response data.
    - Define how data returned from backend should be structured.
    - Ensure you meet the data contract by the functions layer
- Required knowledge/learning
    - HTML and CSS
        - Both stucturally and functionally.
        - How is a webpage structured in code? What is a stylesheet, can I use many? How to make an interactable element? What are the different measurement REM, px, etc...
    - JavaScript
        - How do I send a web request? How is a variable handled by imbedded JavaScript? How do I handle the response data?

# Database
This domain focuses on the hard infastructure of the database (which we will implement as via SQLite). This domain focuses on defining the database schema, rules, and functions as well as in populating the database.
- Associated task examples
    - Define and create the database scheme
        - Decide on a database layout. ie. Relational, data warehouse (sub-layout? ie. star, etc...)
        - Define and create tables, columns, rules, triggers...
    - Build database 
        - Since we are using SQLite this will be deployed with our program.
    - Populate the database
    - Define data contract for web scraper
- Required knowledge/learning
    - SQL
        - The language and how relational databases work on a basic level
        - SELECT, FROM, WHERE, GROUP BY, the available functions etc...
        - How do I find a spefiic value in a specific column of a table in SQL? How do I create a table in SQL? What rules and triggers are available on SQLite?
    - Schema
        - How do we make a database like this fast? What is a primary key? What is a foreign key? What is a concat key? What is a parameter?


# Functions
This domain focuses on writing the Python functions to bridge the gap between front end and back end.
- Associated task examples
    - Implement the Flask to handle POST requests
    - Implement the python functions to handle SQL transactions
    - Define data contract for received POST requests
    - Ensure you meet data contract by the web layer.
- Required knowledge/learning
    - Python and Flask
        - I assume we have all coded in python
        - Learn the terminology of the Flask API
    - Web data
        - How does an HTML request work? What are the types of HTML requests? What are the error and success codes in an HTML response. What is an ansnychronous response and when to use it? (these also apply to web)
    - ETL
        - This one is a bit harder to define and learning will happen as we go.

# Infastructure
This domain is a mix between them all. This domain should likely be covered by one person, someone who is interested in learning how to make software work, rather than on building hard implementations. This domain focuses on data contracts, defining sucess/error states, and building unit tests.
- Associated task examples
    - Read and understand the functionality (end-end) of each other process
        - Final say on data contracts between layers, to handle issues
        - Write general documentation
    - Define and create unit tests
        - Determine error and sucess states and develop the tests to check them.
        - Report with documentation when tests fail
    - Focus on cooridination. If there is a knowledge gap about how to handle a specific issues with SQLite but the other team members are working on implementations you should research the issue.
    - Find data to use on the web, scrape the data.
- Required knowledge/learning
    - A little bit of everything listed above
    - Python and/or bash
        - For web scraping and testing
