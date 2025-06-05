import profileImage from './images/profile.png';


function loadPage(){

    console.log("MENU PAGE CHECK!");

    const headline = document.createElement('h1');
    headline.textContent = "MENU!";

    const profile = document.createElement('img');
    profile.src = profileImage;
    
    const pContent = document.createElement('p');
    pContent.textContent = 'Menu Description';

    const divContent = document.querySelector('#content');

    divContent.appendChild(headline);
    divContent.appendChild(profile);
    divContent.appendChild(pContent);
}

export default loadPage;