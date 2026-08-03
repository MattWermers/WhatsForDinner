const ingredients = [
    "Salt",
    "Black pepper",
    "Olive oil",
    "Vegetable oil",
    "Garlic",
    "Onion",
    "Butter",
    "Milk",
    "Eggs",
    "All-purpose flour",
    "White sugar",
    "Brown sugar",
    "White rice",
    "Dried pasta",
    "Chicken breast",
    "Ground beef",
    "Potatoes",
    "Carrots",
    "Tomatoes",
    "Lemons",
    "Soy sauce",
    "White vinegar",
    "Baking powder",
    "Baking soda",
    "Cinnamon",
    "Rolled oats",
    "Cheddar cheese",
    "Black beans",
    "Lentils",
    "Chicken broth"
];

/* These get used a frequently(called a lot) so make them global instead of generate them when the function is invoked */
const landing_box = document.getElementById("landing-box");
const running_box = document.getElementById("running-box");

const picked_items = new Set();
const button_items = [];

const landing_picklist = document.getElementById('landing-picklist')
window.addEventListener("load", () => {
    console.log("Debug: Generating button items from ingredient list");
    ingredients.forEach(ingredient => {
        const newButton = document.createElement('button');
        newButton.textContent = ingredient;
        newButton.dataset.item = ingredient;
        newButton.classList.add('p_button')

        /* state is targeted first. First click makes it active THEN ads to list. Next click makes it unactive THEN removes. repeats*/
        newButton.addEventListener('click', () => {
            newButton.classList.toggle('active');
            if (newButton.classList.contains('active')) {
                picked_items.add(newButton.dataset.item);
            }
            else {
                picked_items.delete(newButton.dataset.item);
            }
        });
        button_items.push(newButton);
    });
    console.log("Debug: Ingredient buttons created");
    console.log("Debug: Adding first 5 elements to landing picklist");
    for (let i=0; i < 5; i++) {
        landing_picklist.appendChild(button_items[i]);
    }
    console.log("Debug: Buttons added to landing picklist");
})

/* find the search buttons and make it so they call the search function */
const search_buttons = document.querySelectorAll('.search');
search_buttons.forEach(button => {
    button.addEventListener('click', search)
})

/* keydown events separate for when the cursor is in a searchbar vs when the cursor is somewher else */
const search_bars = document.querySelectorAll('.searchbar');
search_bars.forEach(bar => {
    bar.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log("\tDebug: Enter pressed while cursor inside searchbar");
            /* this function makes it so that if the user is in the searchbar they search ingredients and dont intitiate a new search */
                    /* it does so with the folliwng stopPropogation */
            /* this makes it so that when that user is in the searchbar it does not trigger the even below */
            event.stopPropagation();
        }
    });
})
/* this is for when the curor is not in a searchbar */
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log("Debug: Enter pressed while outside of searchbar")
    }
})


function search(event) {
    event.preventDefault();
    console.log('Debug: Search triggered by ${event.type}');

    if (landing_box.style.display === 'none') {
        /* Not the intitial query, cause update */
        const i = 0;
        
    }
    else {
        /* Init query */
        console.log("Debug: Init first query");
        const text = Array.from(picked_items);
        console.log("Debug: Submitting items", text);
        console.log('\tDebug: Changing display type of objects')
        landing_box.style.display = "none";
        running_box.style.display = "flex";
        console.log('\tDebug: Changing display type of objects - success')
    }
}

document.querySelector(".init-search", search);

/* DONT FORGET TO ADD textbox selected vs unselected enter button behavior */