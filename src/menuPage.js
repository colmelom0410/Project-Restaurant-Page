import food1 from './images/food1.png';
import food2 from './images/food2.png';
import food3 from './images/food3.png';
import './menuStyle.css';



class MenuTemplate{
    constructor(type){
        this.type = type;
    }
    createTemplate(){
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('template');
        const typeH2 = document.createElement('h2');
        typeH2.textContent = this.type;
        mealDiv.appendChild(typeH2);

        return mealDiv;
    }
    
}

class Meal{
    constructor(food, price){
        this.food = food;
        this.price = price;
    }
    createP(){
        const foodPriceDiv = document.createElement('div');
        const foodP = document.createElement('p');
        foodP.textContent = this.food;
        const priceP = document.createElement('p');
        priceP.textContent = this.price;
        foodPriceDiv.appendChild(foodP);
        foodPriceDiv.appendChild(priceP);

        return foodPriceDiv;
    }
}


function loadPage(){

    console.log("MENU PAGE CHECK!");

    const menu= document.createElement('div');
    menu.id = "menuPage";
    const header = document.createElement('h1');
    header.textContent = "Embark on a delectable journey";
    const desc = document.createElement('p');
    desc.textContent = "Celebrate Filipino heritage with a touch of modern finesse.";
    const menuCard = document.createElement('div');
    menuCard.id = "menuCard";
    const menuTitle = document.createElement('div');
    menuTitle.id = "menuTitle";
    const menuTitleH1 = document.createElement('h1');
    menuTitleH1.textContent = "MENU"
    const menuTitleH3 = document.createElement('h3');
    menuTitleH3.textContent = "ShaMae";

    // foods
    const divFoods = document.createElement('div');
    divFoods.id = "divFoods";
    
    const menuSelections = [{
        title:"BREAKFAST",
        meals:[
            ["Tapsilog", "Php 130"],
            ["Tocilog", "Php 125"],
            ["Longsilog", "Php 125"],
            ["Hotsilog", "Php 120"],
        ]
    },
    {
        title:"SNACKS (Good For 2)",
        meals:[
            ["Pancit Palabok", "Php 129"],
            ["Spaghetti Platter", "Php 119"],
            ["Cheesy Macaroni", "Php 129"],
            ["Pancit Lomi", "Php 109"],
        ]

    },{
        title:"MEAT DISHES",
        meals:[
            ["Beef kare-kare", "Php 259"],
            ["Chicken Spicy Inasal", "Php 149"],
            ["Pork Crispy Lumpia", "Php 119"],
            ["Pork Liempo", "Php 189"],
        ]
    }]

    menuSelections.forEach(index => {
        const template = new MenuTemplate(index.title);
        const menuBlock = template.createTemplate();
        index.meals.forEach(([food,price])=>{
            const meal = new Meal(food, price);
            menuBlock.appendChild(meal.createP());
        });
        divFoods.appendChild(menuBlock);
    })


    //text footer
    const menuFooter = document.createElement('h2');
    menuFooter.id = "menuFooter";
    menuFooter.textContent = "Tasty Filipino Food for Everyone!";

    // Images
    const foodItem1 = document.createElement('img');
    foodItem1.src = food1;
    foodItem1.id = "foodItem1";
    const foodItem2 = document.createElement('img');
    foodItem2.src = food2;
    foodItem2.id = "foodItem2";
    const foodItem3 = document.createElement('img');
    foodItem3.src = food3;
    foodItem3.id = "foodItem3";

    menuTitle.appendChild(menuTitleH3);
    menuTitle.appendChild(menuTitleH1);
    menuCard.appendChild(menuTitle);
    menuCard.appendChild(divFoods);
    menuCard.appendChild(foodItem1);
    menuCard.appendChild(foodItem2);
    menuCard.appendChild(foodItem3);
    menuCard.appendChild(menuFooter);

    const divContent = document.querySelector('#content');
    menu.appendChild(header);
    menu.appendChild(desc);
    menu.appendChild(menuCard);
    divContent.appendChild(menu);

}

export default loadPage;