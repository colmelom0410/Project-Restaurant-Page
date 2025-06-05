import profileImage from './images/profile.png';


function loadPage(){

    console.log("ABOUT PAGE CHECK!");

    const headline = document.createElement('h1');
    headline.textContent = "ABOUT";

    const profile = document.createElement('img');
    profile.src = profileImage;
    
    const pContent = document.createElement('p');
    pContent.textContent = "About Description";

    const divContent = document.querySelector('#content');

    divContent.appendChild(headline);
    divContent.appendChild(profile);
    divContent.appendChild(pContent);
}

export default loadPage;