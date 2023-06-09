export function initialPageLoad(){
    document.body.style.backgroundImage = "url('../dist/images/restaurant.jpg')";
    const mainDiv = document.getElementById('content');
    mainDiv.replaceChildren();
    const header=document.createElement('div');
    header.classList.add('header');
    mainDiv.appendChild(header);

    const restuarantname=document.createElement('div');
    restuarantname.classList.add('restuarantname');
    header.appendChild(restuarantname);
    const h1pza= document.createElement('h1');
    h1pza.textContent="PZA: Casual Restaurant and Lounge";
    restuarantname.appendChild(h1pza);


    const p = document.createElement('div');
    p.classList.add('p');
    const pContent = document.createElement('p');
    p.textContent="Casual dining experience with bar and sports!";
    p.append(pContent);
    header.appendChild(p); 

    document.body.appendChild(mainDiv);

}

