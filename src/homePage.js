import profileImage from './images/profile.png';


function loadPage(){

    console.log("HOME PAGE CHECK!");

    const headline = document.createElement('h1');
    headline.textContent = "HOME!";
    
    const profile = document.createElement('img');
    profile.src = profileImage;

    const pContent = document.createElement('p');
    pContent.textContent = 'Home Description';

    const divContent = document.querySelector('#content');

    divContent.appendChild(headline);
    divContent.appendChild(profile);
    divContent.appendChild(pContent);
}

export default loadPage;