# WhatsForDinner - Final Report

## Milestone 8: Final Report Submission

## Project Title
WhatsForDinner

## Team Members

- Zeke Buckholz
- Matt Wermers
- Jimmy Thomas
- Cameron Westbrook

## Required Links

- Project tracker (instructor can access): [Trello Board](https://trello.com/invite/b/6a30b02f9664f0fdedf05352/ATTIf1f6a87882645f7393bd5a92c95331b6FC048ACE/3308-team-6)
- Version control repository (instructors have access): [GitHub Repo](https://github.com/MattWermers/WhatsForDinner)
- 5-minute customer demo video: [Demo Video](https://drive.google.com/file/d/1cccwvzqSKmooji9MD-ymSw2Oyx-z9Q-e/view?usp=sharing)
- Public deployment site: https://mattwermers.me/

## Repository Readiness

All team members have verified that their latest work is pushed to the remote repository.
The repository contains the following required files and assets:

- [README.md](http://README.md)
- WEEKLY_STATUS.md (docs/weekly-status/)
- PAGE_TESTING.md (docs/testing/)
- SQL_TESTING.md (docs/testing/)
- FINAL_REPORT.md
- Project presentation files from Milestone 7 (WhatsForDinner_demo.pdf, link to video in README)
- Source code
- Test cases
- Source documentation and auto-doc files
- Link to public deployment site

## Final Status Report

### What We Completed

- A working web application that helps users find recipes based on ingredients they already have.
  - Get recipes that include positively selected ingredients
  - Exclude recipes that include negatively selected ingredients
- Flask backend with Jinja templating engine
- SQLite3 database for data persistence with a normalized schema, a join table, and a staging table
- Hosted with a free AWS EC2 instance, structured as a local client-server app

### What We Were in the Middle of Implementing

- Modernization of UI. The site does not look good on a wide screen and has overlapping elements on mobile.

### What We Planned for the Future

- Embedded images for each recipe
- Recipe database expansion
- Specific filtering based on dietary restrictions/food allergies
- Mobile-focused app design
- Generate button ingredients and ingredient list from the database instead of using a static list defined in the javascript.

### Known Problems and Limitations

- Ingredients displayed to the users do not necessarily match those actually contained in the database. The ingredient buttons are still generated from the testing list. This is because the ingredient does not exist or has a slightly different name in the DB.
- SVG on the left button while viewing recipes does not generate correctly.
- UI: Sizing and scaling not appropriate. Only looks correct on an oddly proportioned screen.
- All picklists are limited to max 30 items.
- No images, or links to images, in the database
- Anomalous 'recipes' in the database like 'Happy Healthy Health Department' and 'Recipe for a good marriage'
- For some reason, only on the AWS version, UI elements have their sizes modified while clicking through recipes.
- Recipes are currently presented in alphabetical order. Where they should be random.

## System Overview

- **Frontend:** Vanilla JS
- **Backend:** Flask serves assets and exposes JSON endpoints for querying
- **Database:** SQLite database with custom connection handler.

## Pages That Access Database Information

### WFD page

- Accesses the database when a user clicks the query button or presses enter outside of a text entry bar
- **ingredients**
  - Name
  - Ingredient_id
- **recipe_ingredients**
  - recipe_id
  - Ingredient_id
  - Quantity
  - unit
- **table_recipes**
  - Recipe_id
  - Name
  - Description
  - Instruction
  - Prep_time
  - Cook_time
  - Servings
  - image_url

## Page Data Access Tests (High-Level)

### Includes selected positive ingredients

- Verify recipes include positively selected ingredients

#### Pre-conditions

- On the WFD homepage
- Ingredients selected either via picklist or search

#### Steps

1. Press enter or click init search button
2. Hover over the loaded recipe
3. Verify ingredient list includes selected ingredient

#### Expected Result

Returned recipes always include at least 1 of the selected ingredients

#### Actual Results

Returned recipes always include at least 1 of the selected ingredients

#### Pass

### Excludes selected negative ingredients

- Verify that negatively selecting ingredients excludes recipes that include that ingredient

#### Pre-conditions

- Not an init search (cannot negatively select ingredients before init search)
- Has positively selected ingredients (otherwise null return received)

#### Steps

1. Select an ingredient to negatively select from the picklist or search
2. Hover over the generated recipe and verify that the recipe does not include the barred item (might need to scroll through a few or select a common ingredient to verify)

#### Expected Result

Returned recipes never include any of the barred ingredients

#### Actual Result

Returned recipes never include any of the barred ingredients (provided the naming conventions match)

#### Pass

## Reflection

- Understand your domain and the available tools before you start building.
- Building a plan helps you understand the requirements for the program, not just how to approach its development.
