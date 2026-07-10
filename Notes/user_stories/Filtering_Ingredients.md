# Recipe Searching
When selecting approved and rejected (ingredients the user has and doesnt have) I want the recipe list ui to update automatically, without clicking update. If I click many ingredients quickly (faster than datbase) I only want the ui to update once.

### Given
I click on an item in the approved or rejected list
### When
Filtering recipes on approved or rejected items/amounts
### Then
The recipe list ui waits a moment, starts updating, accepts new igredients from the list, and if ingredients are selected quickly only updates once.