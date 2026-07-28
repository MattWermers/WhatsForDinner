# Recipe database
## Problem
Everyone cooks, and everyone has had a fridge full of randomness they dont know what to do with. Or sometimes they are missing a key ingredient for whatever they want to make. If we want to get non-cs people involved as testers/customers this casts a wide net.
---
### Implmentations
Obviously this is kind of like a whole app, I honestly think we could get this done, but limitng the scope a lot would be a good idea. We could build a simple framework, write a bash script to extract just a few recipes from one domain with a standard format, and populate a test database with a few recipes to show functionality.
- **Web Scraper**
    - Find websites that host recipes, analyze their HTML format, extract ingredients and measurements
    - clean the values. make 'Flour' and 'flour' both 'flour'. 'Vidalia Sweet Onions' > 'onion'
        * Leave the more specific stuff to the linked page
    - Tech stack could be python + python script/bash
- **SQL Server**
    - Insert recipes into a SQL database
        - Schema
            | Table Name | Column 1 | Column 2 | Column 3 | Column 4 | Column 5 |
            | --- | --- | --- | --- | --- | --- |
            | `table_recipe` | `recipe_name` | `recipe_id` | `servings` | `recipe_link` |  |
            | `table_ingredients` | `ingredient_id` | `ingredient_name` | `volume_flag` | `weight_flag` |  |
            | `table_measurements` | `measurement_id` | `unit_name` | `type` |  |  |
            | `im_ingredient_measurement` | `im_id` | `ingredient_id` | `measurement_id` | `quantity` |  |
            | `recipe_im` | `auto_gen_key` | `recipe_id` | `im_id` |  |  |
        - Queries
                1. Find forbidden ingredients
                2. Find the forbidden recipes
                3. Show non-forbidden recipes

```SQL
        -- Fully offhand but maybe
        SET @f_ingredients = given_list -- list
        SET @q_tooHigh -- Generated from the input, it is im_ids of given ingredients for quantities higher than the given amount. pyton script
        WITH forbidden_im AS (
            SELECT DISTINCT im_id
            FROM im_ingredients_measurement AS iim
            WHERE (
                (iim.ingredient_id IN (@f_ingredients))
                AND
                (iim.im_id IN (@q_tooHigh))
            )
        ),
        forbidden_recipes AS (
            SELECT DISTINCT recipe_id
            FROM recipe_im
            WHERE
                im_id IN ( SELECT im_id FROM forbidden_im )
        )
        SELECT *
        FROM table_recipe
        WHERE recipe_id NOT IN ( SELECT recipe_id FROM forbidden_recipes );
```
- **Front End**
    - Front where the user builds a list of given ingredients and their amounts (amount can be N/A)
    - Redirects to a results page listing the names and links to the recipes
                        
