import './aboutStyle.css'


function loadPage(){
    const mainPage = document.querySelector('#content');
    const aboutPage = document.createElement('div');
    aboutPage.id = 'aboutPage';
    mainPage.appendChild(aboutPage);
    //Create upper section div
    const upperDiv = document.createElement('div');
    upperDiv.id = "upperDiv";
    const upperH1 = document.createElement('h1');
    upperH1.textContent = "Where Tradition Meets Taste";
    const upperP = document.createElement('p');
    upperP.textContent = "Whichever dining option you choose, Rimberio promises an exceptional culinary adventure."
    const reserveBtn = document.createElement('button');
    reserveBtn.textContent = "Book your reservation";
    upperDiv.appendChild(upperH1);
    upperDiv.appendChild(upperP);
    upperDiv.appendChild(reserveBtn);
    aboutPage.appendChild(upperDiv);

    //Create Center Div
    const lowerDiv = document.createElement('div');
    lowerDiv.textContent = "Welcome to Shamae, your go-to spot for authentic Filipino comfort food! Start your day with classic silog favorites like Tapsilog, Longsilog, and Tocilog—hearty, satisfying, and always made fresh. For afternoon cravings or light bites with a friend, enjoy our flavorful Pancit Palabok, creamy Cheesy Macaroni, or a warm bowl of Pancit Lomi. Craving something savory? Our Beef Kare-Kare, Chicken Spicy Inasal, and Pork Crispy Lumpia are bursting with home-style flavors. Whether it's breakfast, a snack, or a full meal, every dish brings the taste of the Philippines straight to your table.";
    lowerDiv.id ='lowerDiv';
    aboutPage.appendChild(lowerDiv);

}

export default loadPage;