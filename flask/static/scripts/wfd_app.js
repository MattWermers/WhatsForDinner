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
    "Chicken broth",
    "Tomato paste",
    "San Marzano tomatoes",
    "Red pepper flakes",
    "Anchovies",
    "Capers",
    "Kalamata olives",
    "Pancetta",
    "Andouille sausage",
    "Celery",
    "Green bell pepper",
    "Thyme",
    "Bay leaves",
    "Red wine",
    "White wine",
    "Heavy cream",
    "Parmesan cheese",
    "Pecorino Romano",
    "Garlic powder",
    "Onion powder",
    "Oregano",
    "Basil",
    "Parsley",
    "Beef broth",
    "Pearl onions",
    "Mushrooms",
    "Bacon",
    "Honey",
    "Dijon mustard",
    "Breadcrumbs",
    "Tofu"
];

/* These get used a frequently(called a lot) so make them global instead of generate them when the function is invoked */
const landing_box = document.getElementById("landing-box");
const running_box = document.getElementById("running-box");

const picked_items = new Set();
const banned_items = new Set();
const button_items = new Map();

function create_button(ingredient) {
    const newButton = document.createElement('button');
    newButton.textContent = ingredient;
    newButton.dataset.item = ingredient;
    newButton.classList.add('p_button')

    /* state is targeted first. First click makes it active THEN ads to list. Next click makes it unactive THEN removes. repeats*/
    newButton.addEventListener('click', () => {
        if (newButton.closest('#add-queryBuilder')) {
            if (newButton.classList.contains('active')) {
                if (banned_items.has(newButton.dataset.item)) {
                    banned_items.delete(newButton.dataset.item);
                    picked_items.add(newButton.dataset.item);
                } else {
                    picked_items.delete(newButton.dataset.item);
                    newButton.classList.remove('active');
                }  
            } else {
                picked_items.add(newButton.dataset.item);
                newButton.classList.add('active');
            }
        } else if (newButton.closest('#remove-queryBuilder')) {
            if (newButton.classList.contains('active')) {
                if (picked_items.has(newButton.dataset.item)) {
                    picked_items.delete(newButton.dataset.item);
                    banned_items.add(newButton.dataset.item);
                } else {
                    banned_items.delete(newButton.dataset.item);
                    newButton.classList.remove('active');
                }
            } else {
                banned_items.add(newButton.dataset.item);
                newButton.classList.add('active');
            }
        } else if (newButton.closest('#landing-picklist')) {
            if (newButton.classList.contains('active')) {
                picked_items.delete(newButton.dataset.item);
                newButton.classList.remove('active');
            } else {
                picked_items.add(newButton.dataset.item);
                newButton.classList.add('active');
            }
        } else {
            console.log('Debug: Anamalous button click detected.', newButton.textContent);
        };
    })
    return newButton;
}

const landing_picklist = document.getElementById('landing-picklist')
window.addEventListener("load", () => {
    console.log("Debug: Generating button items from ingredient list");
    ingredients.forEach(ingredient => {
        button_items.set(ingredient, create_button(ingredient));
    });
    console.log("Debug: Ingredient buttons created", button_items);
    console.log("Debug: Adding first 5 elements to landing picklist");
    for (const [ingredient, button] of button_items.entries()) {
        if (landing_picklist.children.length < 5) {
            landing_picklist.appendChild(button);
        } else {
            break;
        }
    }
    console.log("Debug: Buttons added to landing picklist");
})

/* find the search buttons and make it so they call the search function */
const search_buttons = document.querySelectorAll('.query');
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
        event.preventDefault();
        console.log("\tDebug: Enter pressed while outside of searchbar")
        search(event);
    }
})

function update_addpicklists() {
    console.log('\tDebug: Updating addpicklist');
    let i = 0; /* interesting way we have to declare here, still figuring out types i guess */
    const add_picklist = document.getElementById('add-picklist');
    const remove_picklist = document.getElementById('remove-picklist');
    /* iterate directly through the items and update i */
    for (const item of picked_items) {
        if (i >= 30) {
            break;
        }
        const new_button = button_items.get(item);
        add_picklist.appendChild(new_button);
        i++;
    }
    for (const [ingredient, button] of button_items.entries()) {
        if (i >= 30) {
            break;
        }
        if (!picked_items.has(ingredient) && !banned_items.has(ingredient) && !remove_picklist.contains(button)) {
            add_picklist.appendChild(button);
            i++;
        }
    }

}

function update_removepicklists() {
    console.log('\tDebug: Updating removepicklist');
    let i = 0;
    const remove_picklist = document.getElementById('remove-picklist');
    const add_picklist = document.getElementById('add-picklist');
    for (const item of banned_items) {
        if (i >= 30) {
            break;
        }
        const new_button = button_items.get(item);
        remove_picklist.appendChild(new_button);
        i++;
    }
    for (const [ingredient, button] of button_items.entries()) {
        if (i >= 30) {
            break;
        }
        if (!picked_items.has(ingredient) && !banned_items.has(ingredient) && !add_picklist.contains(button)) {
            remove_picklist.appendChild(button);
            i++;
        }
    }
}

function search(event) {
    console.log('Debug: Search triggered by ${event.type}');

    if (landing_box.style.display === 'none') {
        /* Not the intitial query, cause update */
        const i = 0;
        
    } else {
        /* Init query */
        console.log("Debug: Init first query");
        console.log("Debug: Submitting items", JSON.stringify(Array.from(picked_items)));
        console.log("\tDebug: Length of picked items", picked_items.size);
        console.log('\tDebug: Changing display type of objects')
        landing_box.style.display = "none";
        running_box.style.display = "flex";
        console.log('\tDebug: Changing display type of objects - success');
        console.log('Debug: Attempting to populate picklists with buttons');
        update_addpicklists();
        update_removepicklists();
    }
}

document.querySelector(".init-search", search);

/* Predictive text search */
document.querySelectorAll(".input-textbox").forEach(textbox =>
    textbox.addEventListener("input", () => {
        const query = textbox.value.toLowerCase();
        const suggestions = textbox.closest('.searchbar').querySelector('.suggestion-list');
        suggestions.innerHTML = "";

        if (!query) {
            suggestions.style.display = "none";
        }

        const matches = ingredients.filter(ingredient => ingredient.toLowerCase().includes(query));
        if (matches.length === 0) {
            suggestions.style.display = "none";
            return;
        }
        else {
            let tabIndexCounter = 0;
            if (textbox.closest("init-searchbar") || textbox.closest("add-searchbar")) {
                /* if the textbox is in the add-queryBuilder, we want to exclude items that are already picked */
                for (const item of picked_items) {
                    exclude.push(item);
                }
            } else {
                /* if the textbox is in the remove-queryBuilder, we want to exclude items that are already banned */
                for (const item of banned_items) {
                    exclude.push(item);
                }
            }
            const exclude = [];
            for (const match of matches) {
                if (exclude.includes(match)) {
                    continue;
                }
                const suggestion = document.createElement("div");
                suggestion.className = 'suggestion-item';
                suggestion.textContent = match;
                suggestion.tabIndex = tabIndexCounter;
                suggestions.appendChild(suggestion);
                tabIndexCounter++;
                
                /* this defines a function we attach to each suggestion item allowing it to be tabbed to and selected */
                const suggestion_item_action = () => {
                    textbox.value = match;
                    suggestions.style.display = "none";
                    if (event.target.closest("init-searchbar") || event.target.closest("add-searchbar")) {
                        add_searcheditem(match) /* will trigger updates of picklists and new query */
                    } else {
                        remove_searcheditem(match) /* will trigger updates of picklists and new query */
                    }
                }
            }
            suggestions.style.display = "block";
        }
    }
));

document.addEventListener("click", (event) => {
    if (!event.target.closest(".searchbar")) {
        document.querySelectorAll(".suggestion-list").forEach(suggestions => {
            suggestions.style.display = "none";
        });
    }
});