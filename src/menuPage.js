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
    menuTitleH3.textContent = "Kainan ni Shalom";

    // foods
    const divFoods = document.createElement('div');
    divFoods.id = "divFoods";   

    //Breakfast Menu
    const MenuTemplate1 = new MenuTemplate("BREAKFAST");
    const menuBlock1 = MenuTemplate1.createTemplate();
    const bfMeal1 = new Meal("Tapsilog", "Php 130");
    const bfMeal2 = new Meal("Tocilog", "Php 125");
    const bfMeal3 = new Meal("Longsilog", "Php 125");
    const bfMeal4 = new Meal("Hotsilog", "Php 120");
    divFoods.appendChild(menuBlock1);
    menuBlock1.appendChild(bfMeal1.createP());
    menuBlock1.appendChild(bfMeal2.createP());
    menuBlock1.appendChild(bfMeal3.createP());
    menuBlock1.appendChild(bfMeal4.createP());
    
    //Snacks
    const MenuTemplate2 = new MenuTemplate("SNACKS (Good For 2)");
    const menuBlock2 = MenuTemplate2.createTemplate();
    const snacks1 = new Meal("Pancit Palabok", "Php 129");
    const snacks2 = new Meal("Spaghetti Platter", "Php 119");
    const snacks3 = new Meal("Cheesy Macaroni", "Php 129");
    const snacks4 = new Meal("Pancit Lomi", "Php 109");
    divFoods.appendChild(menuBlock2);
    menuBlock2.appendChild(snacks1.createP());
    menuBlock2.appendChild(snacks2.createP());
    menuBlock2.appendChild(snacks3.createP());
    menuBlock2.appendChild(snacks4.createP());

    //Meat Dishes
    const MenuTemplate3 = new MenuTemplate("MEAT DISHES");
    const menuBlock3 = MenuTemplate3.createTemplate();
    const meat1 = new Meal("Beef kare-kare", "Php 259");
    const meat2 = new Meal("Chicken Spicy Inasal", "Php 149");
    const meat3 = new Meal("Pork Crispy Lumpia", "Php 119");
    const meat4 = new Meal("Pork Liempo", "Php 189");
    divFoods.appendChild(menuBlock3);
    menuBlock3.appendChild(meat1.createP());
    menuBlock3.appendChild(meat2.createP());  
    menuBlock3.appendChild(meat3.createP());
    menuBlock3.appendChild(meat4.createP());

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