import food1 from './images/food1.png';
import food2 from './images/food2.png';
import food3 from './images/food3.png';
import './menuStyle.css';



class menuTemplate{
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
    constructor(type, food, price){
        this.type = type;
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
    appendFood(){
        const template = this.type;
        const foodBlock = this.createP();
        template.appendChild(foodBlock);
        return template;
        
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
    menuTitleH3.textContent = "Kainan ni Shalom";

    // foods
    const divFoods = document.createElement('div');
    divFoods.id = "divFoods";   

    //Breakfast Menu
    const menuTemplate1 = new menuTemplate("BREAKFAST");
    const menuBlock1 = menuTemplate1.createTemplate();
    const bfMeal1 = new Meal(menuBlock1,"Tapsilog", "Php 130");
    const bfMeal2 = new Meal(menuBlock1,"Tocilog", "Php 125");
    const bfMeal3 = new Meal(menuBlock1,"Longsilog", "Php 125");
    const bfMeal4 = new Meal(menuBlock1,"Hotsilog", "Php 120");
    divFoods.appendChild(menuBlock1);
    divFoods.appendChild(bfMeal1.appendFood());
    divFoods.appendChild(bfMeal2.appendFood());
    divFoods.appendChild(bfMeal3.appendFood());
    divFoods.appendChild(bfMeal4.appendFood());
    
    //Snacks
    const menuTemplate2 = new menuTemplate("SNACKS (Good For 2)");
    const menuBlock2 = menuTemplate2.createTemplate();
    const snacks1 = new Meal(menuBlock2,"Pancit Palabok", "Php 129");
    const snacks2 = new Meal(menuBlock2,"Spaghetti Platter", "Php 119");
    const snacks3 = new Meal(menuBlock2,"Cheesy Macaroni", "Php 129");
    const snacks4 = new Meal(menuBlock2,"Pancit Lomi", "Php 109");
    divFoods.appendChild(menuBlock2);
    divFoods.appendChild(snacks1.appendFood());
    divFoods.appendChild(snacks2.appendFood());
    divFoods.appendChild(snacks3.appendFood());
    divFoods.appendChild(snacks4.appendFood());

    //Meat Dishes
    const menuTemplate3 = new menuTemplate("MEAT DISHES");
    const menuBlock3 = menuTemplate3.createTemplate();
    const meat1 = new Meal(menuBlock3,"Beef kare-kare", "Php 259");
    const meat2 = new Meal(menuBlock3,"Chicken Spicy Inasal", "Php 149");
    const meat3 = new Meal(menuBlock3,"Pork Crispy Lumpia", "Php 119");
    const meat4 = new Meal(menuBlock3,"Pork Liempo", "Php 189");
    divFoods.appendChild(menuBlock3);
    divFoods.appendChild(meat1.appendFood());
    divFoods.appendChild(meat2.appendFood());
    divFoods.appendChild(meat3.appendFood());
    divFoods.appendChild(meat4.appendFood());

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