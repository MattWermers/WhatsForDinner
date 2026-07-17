# SQL_TESTING.md

## Project Milestone 5: SQL Design

Project: What’s For Dinner
Team: Team 6
Purpose: Database design and testing document for developers

Overview

What’s For Dinner is a web application that allows users to enter ingredients they already have and receive recipe suggestions.

The application will use:

  * React for the frontend
  * Flask for the backend
  * SQLite for the database

The database will contain three tables:

  * recipes
  * ingredients
  * recipe_ingredients

These tables are enough to store recipes, store ingredients, and connect ingredients to recipes.

# Database Tables

## 1. Table: recipes

### Table Description

Stores the main information for each recipe.

### Fields

| Field Name | Description | Constraints |
| :-: | :-: | :-: |
| recipe_id | Unique ID for each recipe | Primary key, autoincrement |
| name | Name of the recipe | NOT NULL |
| description | Short description of the recipe | Optional |
| instructions | Steps needed to prepare the recipe | NOT NULL |
| prep_time | Preparation time in minutes | Must be 0 or greater |
| cook_time | Cooking time in minutes | Must be 0 or greater |
| servings | Number of servings | Must be greater than 0 |
| image_url | Optional image for the recipe | Optional |

### Relationships

  * One recipe can have many ingredients.
  * Recipes are connected to ingredients through the recipe_ingredients table.

### Table Tests

Use Case Name: Create a valid recipe

Description: Verify that a valid recipe can be added to the database.

Pre-conditions: The recipes table exists.

Test Steps:

1. Insert a recipe with a name, instructions, times, and servings.
2. Query the recipe by its ID.

Expected Result: The recipe is stored and returned correctly.

Actual Result: Not Run

Status: Not Run

Post-conditions: The recipe remains in the database.

Use Case Name: Reject recipe without a name

Description: Verify that a recipe must have a name.

Pre-conditions: The recipes table exists.

Test Steps:

1. Attempt to insert a recipe without a name.

Expected Result: The database rejects the insert.

Actual Result: Not Run

Status: Not Run

Post-conditions: No invalid recipe is created.

## 2. Table: ingredients

### Table Description

Stores each ingredient used by the application.

### Fields

| Field Name | Description | Constraints |
| :-: | :-: | :-: |
| ingredient_id | Unique ID for each ingredient | Primary key, autoincrement |
| name | Ingredient name | NOT NULL, UNIQUE |
| category | Ingredient category such as meat, produce, or spice | Optional |
| is_staple | Shows whether the ingredient is a common kitchen staple | Default 0, must be 0 or 1 |

### Relationships

  * One ingredient can be used in many recipes.
  * Ingredients are connected to recipes through the recipe_ingredients table.

### Table Tests

Use Case Name: Create a valid ingredient

Description: Verify that a new ingredient can be added.

Pre-conditions: The ingredients table exists.

Test Steps:

1. Insert a new ingredient.
2. Query the ingredient by name.

Expected Result: The ingredient is stored and returned correctly.

Actual Result: Not Run

Status: Not Run

Post-conditions: The ingredient remains in the database.

Use Case Name: Prevent duplicate ingredients

Description: Verify that the same ingredient is not added more than once.

Pre-conditions: An ingredient named garlic already exists.

Test Steps:

1. Attempt to insert another ingredient named garlic.

Expected Result: The duplicate insert is rejected.

Actual Result: Not Run

Status: Not Run

Post-conditions: Only one garlic record exists.

## 3. Table: recipe_ingredients

### Table Description

Connects recipes to their ingredients.

This table also stores the quantity and unit needed for each ingredient.

### Fields

| Field Name | Description | Constraints |
| :-: | :-: | :-: |
| recipe_id | ID of the recipe | Foreign key to recipes.recipe_id, NOT NULL |
| ingredient_id | ID of the ingredient | Foreign key to ingredients.ingredient_id, NOT NULL |
| quantity | Amount of the ingredient needed | Must be 0 or greater |
| unit | Measurement unit such as cup, tablespoon, or gram | Optional |
| is_optional | Shows whether the ingredient is optional | Default 0, must be 0 or 1 |

### Relationships

  * Many rows can belong to one recipe.
  * Many rows can reference one ingredient.
  * The combination of recipe_id and ingredient_id is the primary key.

### Table Tests

Use Case Name: Add an ingredient to a recipe

Description: Verify that an ingredient can be connected to a recipe.

Pre-conditions: The recipe and ingredient already exist.

Test Steps:

1. Insert a row using a valid recipe ID and ingredient ID.
2. Query the relationship.

Expected Result: The ingredient is correctly connected to the recipe.

Actual Result: Not Run

Status: Not Run

Post-conditions: The recipe now includes the ingredient.

Use Case Name: Reject invalid recipe or ingredient IDs

Description: Verify that a relationship cannot use IDs that do not exist.

Pre-conditions: Foreign-key checking is enabled.

Test Steps:

1. Attempt to insert a nonexistent recipe ID.
2. Attempt to insert a nonexistent ingredient ID.

Expected Result: Both inserts are rejected.

Actual Result: Not Run

Status: Not Run

Post-conditions: No invalid relationship is created.

# Data Access Methods

## Access Method: get_all_recipes

### Description

Returns all recipes stored in the database.

### Parameters

  * None

### Return Values

  * List of recipe records
  * Empty list if there are no recipes

### Tests

Use Case Name: Retrieve all recipes

Description: Verify that all recipe records are returned.

Pre-conditions: The database contains recipes.

Test Steps:

1. Call get_all_recipes.
2. Compare the results with the records in the database.

Expected Result: All recipes are returned.

Actual Result: Not Run

Status: Not Run

Post-conditions: No database data is changed.

## Access Method: get_all_ingredients

### Description

Returns all ingredients stored in the database.

### Parameters

  * None

### Return Values

  * List of ingredient records
  * Empty list if there are no ingredients

### Tests

Use Case Name: Retrieve all ingredients

Description: Verify that all ingredient records are returned.

Pre-conditions: The database contains ingredients.

Test Steps:

1. Call get_all_ingredients.
2. Compare the results with the records in the database.

Expected Result: All ingredients are returned.

Actual Result: Not Run

Status: Not Run

Post-conditions: No database data is changed.

## Access Method: get_ingredients_for_recipe

### Description

Returns all ingredients connected to one recipe.

### Parameters

  * recipe_id — ID of the recipe

### Return Values

  * List of ingredient records
  * Empty list if the recipe has no ingredients

### Tests

Use Case Name: Retrieve ingredients for a recipe

Description: Verify that the correct ingredients are returned for a recipe.

Pre-conditions: The recipe exists and has ingredients.

Test Steps:

1. Call get_ingredients_for_recipe with a valid recipe ID.
2. Compare the returned ingredients with the database.

Expected Result: The correct ingredients, quantities, and units are returned.

Actual Result: Not Run

Status: Not Run

Post-conditions: No database data is changed.

## Access Method: find_recipes_by_ingredients

### Description

Returns recipes that match the ingredients entered by the user.

The method also includes ingredients marked as kitchen staples.

### Parameters

  * user_ingredients — list of ingredient names entered by the user

### Return Values

  * List of matching recipes
  * Empty list if no recipes match

### Tests

Use Case Name: Find a recipe using available ingredients

Description: Verify that a recipe is returned when the user has the required ingredients.

Pre-conditions: Recipes, ingredients, and relationships exist.

Test Steps:

1. Submit a list of ingredients.
2. Call find_recipes_by_ingredients.
3. Review the returned recipes.

Expected Result: Recipes using the submitted ingredients are returned.

Actual Result: Not Run

Status: Not Run

Post-conditions: No database data is changed.

Use Case Name: Return no recipes when nothing matches

Description: Verify that the method handles a search with no matches.

Pre-conditions: The submitted ingredients do not match any recipe.

Test Steps:

1. Submit the ingredient list.
2. Call find_recipes_by_ingredients.

Expected Result: An empty list is returned.

Actual Result: Not Run

Status: Not Run

Post-conditions: No database data is changed.

# Page-to-Database Mapping

| Page or Route | Database Information Needed | Access Method |
| :-: | :-: | :-: |
| Ingredient Search Page | List of available ingredients | get_all_ingredients |
| Recipe Results Page | Recipes matching user ingredients | find_recipes_by_ingredients |
| Recipe Detail Page | Recipe information and ingredient list | get_ingredients_for_recipe |
| Recipe Import Script | Adds recipes and ingredient relationships | Direct insert methods |

# Page Data Access Tests

## Results Page Update (to replace Search Page Test)

Use Case Name: Results page updates when new ingredients selected

Description: Verify recipe list updates when the user selects a new ingredient.

Pre-conditions: The frontend, backend, and database are running.

Test Steps:

1. Make an initial query by selecting a few ingredients and hitting submit.
2. Select or deselect a new ingredient.
3. Verify the recipes loaded contain new ingredient/s.

Expected Result: Results held at api layer after ingredient list update reflect the list of selected ingredients.

Actual Result: Not Run

Status: Not Run

Post-conditions: No database data is changed.

## Results Page Test

Use Case Name: Results page displays matching recipes

Description: Verify that recipe results come from the database.

Pre-conditions: Matching recipes exist.

Test Steps:

1. Enter ingredients on the search page.
2. Submit the search.
3. Load the results page.

Expected Result: The correct matching recipes are displayed.

Actual Result: Not Run

Status: Not Run