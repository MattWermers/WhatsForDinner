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
        button_tiems.push(newButton);
    });
    console.log("Debug: Ingredient buttons created");
    console.log("Debug: Adding first 5 elements to landing picklist");
    for (let i=0; i < 5; i++) {
        landing_picklist.appendChild(button_tiems[i]);
    }
    console.log("Debug: Buttons added to landing picklist");
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