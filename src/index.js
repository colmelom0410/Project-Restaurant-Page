import homePage from './homePage.js';
import menuPage from './menuPage.js';
import aboutPage from './aboutPage.js';


homePage();

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');
const contents = document.querySelector('#content');

function removeContent(){
    while (contents.hasChildNodes()){
        contents.removeChild(contents.firstChild);
    }
}

home.addEventListener('click', ()=>{
    removeContent();
    homePage();
});
menu.addEventListener('click', ()=>{
    removeContent();
    menuPage();
});
about.addEventListener('click', ()=>{
    removeContent();
    aboutPage();
});