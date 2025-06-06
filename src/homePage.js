import plateImg from './images/1.png';
import plateDrawingImg from './images/2.png';


function loadPage(){

    console.log("HOME PAGE CHECK!");
    
    // Create div for left contents
    const leftContent = document.createElement('div');
    leftContent.id = "leftContent";
    const headline = document.createElement('h1');
    headline.textContent = "Sarap na hinahanap-hanap!";

    leftContent.appendChild(headline);

    const pContent = document.createElement('p');
    pContent.textContent = `Classic Filipino flavors that hit the spot—rich, hearty, and unforgettable. This is the sarap you’ll crave again and again!`;

    leftContent.appendChild(pContent);

    // Create div for right contents
    const plate = document.createElement('img');
    plate.src = plateImg;
    const plateDrawing = document.createElement('img');
    plateDrawing.src = plateDrawingImg;

    const rightContent = document.createElement('div');
    rightContent.id = 'rightContent';

    //Create contents for first grid
    const rightFirst = document.createElement('div');
    rightFirst.id = "rightFirst";
    const rightHeader = document.createElement('h2');
    rightHeader.textContent = "you love it, we REINVENTED it" 
    rightFirst.appendChild(rightHeader);
    const rightP = document.createElement('p');
    rightP.textContent = "Play with Tradition";
    rightFirst.appendChild(rightP);
    rightFirst.appendChild(plate);

    //Create contents for 2nd grid
    const rightSecond = document.createElement('div');
    rightSecond.id = "rightSecond";
    const rightSecondP = document.createElement('p');
    rightSecondP.textContent = "Our salads are bursting with vibrant, local ingredients. "
    rightSecond.appendChild(rightSecondP);
    rightSecond.appendChild(plateDrawing);

    //Create contents for 3rd grid
    const rightThird = document.createElement('div');
    rightThird.id = "rightThird";
    rightThird.textContent = "Start Fresh!";


    rightContent.appendChild(rightFirst);
    rightContent.appendChild(rightSecond);
    rightContent.appendChild(rightThird);


    //append left and right content to main content div
    const divContent = document.querySelector('#content');
    divContent.appendChild(leftContent);
    divContent.appendChild(rightContent);
}

export default loadPage;