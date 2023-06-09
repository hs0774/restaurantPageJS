export function contact(){
    document.body.style.backgroundImage = "url('../dist/images/contact.jpg')";
    const mainDiv = document.getElementById('content');   
    mainDiv.replaceChildren();
  
    const contactItems = document.createElement('div');
    contactItems.classList.add('contact-items');
    mainDiv.append(contactItems);
    const location = document.createElement('h2');
    location.textContent='Location: 21 Prince St, NY 11101';
    const phoneNumber = document.createElement('h3');
    phoneNumber.textContent='Phone number: 212-453-2359';
    const phoneNumber2 = document.createElement('h3');
    phoneNumber2.textContent='Phone number: 212-453-2260';
    const email = document.createElement('h3');
    email.textContent='Email address: pza@pza.com';
    contactItems.append(location);
    contactItems.append(phoneNumber);
    contactItems.append(phoneNumber2);
    contactItems.append(email);
}