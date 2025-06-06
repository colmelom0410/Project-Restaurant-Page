import food1 from './images/food1.png';
import food2 from './images/food2.png';
import food3 from './images/food3.png';
import './menuStyle.css';


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
    const divBreakfast = document.createElement('div');
    divBreakfast.id = "divBreakfast";
    const breakfastH2 = document.createElement('h2');
    breakfastH2.textContent = "BREAKFAST";
    const breakFastFoods = document.createElement('div');
    const bf1 = document.createElement('p');
    const bf2 = document.createElement('p');
    const bf3 = document.createElement('p');
    const bf4 = document.createElement('p');
    bf1.textContent = "Tapsilog";
    bf2.textContent = "Tocilog";
    bf3.textContent = "Longsilog";
    bf4.textContent = "Hotsilog";
    breakFastFoods.appendChild(bf1);
    breakFastFoods.appendChild(bf2);
    breakFastFoods.appendChild(bf3);
    breakFastFoods.appendChild(bf4);
    const breakFastPrice = document.createElement('div');
    const bf1Price = document.createElement('p');
    const bf2Price = document.createElement('p');
    const bf3Price = document.createElement('p');
    const bf4Price = document.createElement('p');
    bf1Price.textContent = "Php 123";
    bf2Price.textContent = "Php 123";
    bf3Price.textContent = "Php 123";
    bf4Price.textContent = "Php 123";
    breakFastPrice.appendChild(bf1Price);
    breakFastPrice.appendChild(bf2Price);
    breakFastPrice.appendChild(bf3Price);
    breakFastPrice.appendChild(bf4Price);

    
    divBreakfast.appendChild(breakFastFoods);
    divBreakfast.appendChild(breakFastPrice);
    divFoods.appendChild(breakfastH2);
    divFoods.appendChild(divBreakfast);

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

    const divContent = document.querySelector('#content');
    menu.appendChild(header);
    menu.appendChild(desc);
    menu.appendChild(menuCard);
    divContent.appendChild(menu);

}

export default loadPage;