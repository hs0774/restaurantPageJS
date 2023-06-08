export function initialPageLoad(){

    // const mainDiv = document.getElementById('content');
    // const header=document.createElement('div');
    // header.classList.add('header');
    // mainDiv.appendChild(header);

    // const restuarantname=document.createElement('div');
    // restuarantname.classList.add('restuarantname');
    // header.appendChild(restuarantname);
    // const h1pza= document.createElement('h1');
    // h1pza.textContent="PZA: Casual Restaurant and Lounge";
    // restuarantname.appendChild(h1pza);

    // const title = document.createElement('div');
    // title.classList.add('title');
    // header.appendChild(title);
    // const mainh1 = document.createElement('h1');
    // mainh1.textContent='Menu';
    // const mainh2 = document.createElement('h1');
    // mainh2.textContent='Home';
    // const mainh3 = document.createElement('h1');
    // mainh3.textContent='Contact';
    // title.appendChild(mainh1);
    // title.appendChild(mainh2);
    // title.appendChild(mainh3);

    // const p = document.createElement('div');
    // p.classList.add('p');
    // const pContent = document.createElement('p');
    // p.textContent="Casual dining experience with bar and sports!";
    // p.append(pContent);
    // header.appendChild(p); 

    // document.body.appendChild(mainDiv);

/////////////////////////////////////////////////////////////////////////////

    // const mainDiv = document.getElementById('content');   
    // const title2 = document.createElement('div');
    // title2.classList.add('title');
    // mainDiv.append(title2);
    
    // const home = document.createElement('h1');
    // home.textContent='Home'
    // const menu = document.createElement('h1');
    // menu.textContent='Menu';
    // const contact = document.createElement('h1');
    // contact.textContent='Contact';
    // title2.append(home);
    // title2.append(menu);
    // title2.append(contact);


    // const contactItems = document.createElement('div');
    // contactItems.classList.add('contact-items');
    // mainDiv.append(contactItems);
    // const location = document.createElement('h2');
    // location.textContent='Location: 21 Prince St, NY 11101';
    // const phoneNumber = document.createElement('h3');
    // phoneNumber.textContent='Phone number: 212-453-2359';
    // const phoneNumber2 = document.createElement('h3');
    // phoneNumber2.textContent='Phone number: 212-453-2260';
    // const email = document.createElement('h3');
    // email.textContent='Email address: pza@pza.com';
    // contactItems.append(location);
    // contactItems.append(phoneNumber);
    // contactItems.append(phoneNumber2);
    // contactItems.append(email);

////////////////////////////////////////////////////////////////////////////

    const mainDiv = document.getElementById('content');
    
    // Title section
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    mainDiv.appendChild(titleDiv);
    
    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Home';
    const menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Menu';
    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact';
    titleDiv.appendChild(homeTitle);
    titleDiv.appendChild(menuTitle);
    titleDiv.appendChild(contactTitle);
    
}

