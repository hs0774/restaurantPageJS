export function menu(){
    document.body.style.backgroundImage = "url('../dist/images/menu.jpg')";
    const mainDiv = document.getElementById('content');   
    mainDiv.replaceChildren();
  
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    mainDiv.append(menuItems);


    const left = document.createElement('div');
    left.classList.add('left');
    menuItems.append(left);
    
    const heading = document.createElement('div');
    heading.classList.add('heading');
    left.append(heading);
    const pizza = document.createElement('h2');
    pizza.textContent='Pizza';
    heading.append(pizza);

    const items = document.createElement('div');
    items.classList.add('items');
    left.append(items);

    const pizzaitems = document.createElement('div');
    items.append(pizzaitems);

    const pizza1=document.createElement('h3');
    pizza1.textContent='Neopolitan';
    pizzaitems.append(pizza1);
    const pizza2=document.createElement('h3');
    pizza2.textContent='Margherita';
    pizzaitems.append(pizza2);
    const pizza3=document.createElement('h3');
    pizza3.textContent='Pepperoni';
    pizzaitems.append(pizza3);
    const pizza4=document.createElement('h3');
    pizza4.textContent='Veggie';
    pizzaitems.append(pizza4);
    const pizza5=document.createElement('h3');
    pizza5.textContent='Combo';
    pizzaitems.append(pizza5);

    const cost = document.createElement('div');
    items.append(cost);

    const pizza1Cost = document.createElement('h3');
    pizza1Cost.textContent = '15';
    cost.append(pizza1Cost);
    const pizza2Cost = document.createElement('h3');
    pizza2Cost.textContent = '16';
    cost.append(pizza2Cost);
    const pizza3Cost = document.createElement('h3');
    pizza3Cost.textContent = '18';
    cost.append(pizza3Cost);
    const pizza4Cost = document.createElement('h3');
    pizza4Cost.textContent = '17';
    cost.append(pizza4Cost);
    const pizza5Cost = document.createElement('h3');
    pizza5Cost.textContent = '19';
    cost.append(pizza5Cost);


    const right = document.createElement('div');
    right.classList.add('right');
    menuItems.append(right);

    const heading2 = document.createElement('div');
    heading2.classList.add('heading');
    right.append(heading2);
    const fingerFood = document.createElement('h2');
    fingerFood.textContent='Finger Food';
    heading2.append(fingerFood);

    const items2 = document.createElement('div');
    items2.classList.add('items');
    right.append(items2);

    const fooditems = document.createElement('div');
    items2.append(fooditems);

    const food1=document.createElement('h3');
    food1.textContent='Mozzarella Sticks';
    fooditems.append(food1);
    const food2=document.createElement('h3');
    food2.textContent='Wings';
    fooditems.append(food2);
    const food3=document.createElement('h3');
    food3.textContent='Fries';
    fooditems.append(food3);
    const food4=document.createElement('h3');
    food4.textContent='Nuggets';
    fooditems.append(food4);
    const food5=document.createElement('h3');
    food5.textContent='App Combo';
    fooditems.append(food5);

    const cost2 = document.createElement('div');
    items2.append(cost2);

    const food1Cost = document.createElement('h3');
    food1Cost.textContent = '7';
    cost2.append(food1Cost);
    const food2Cost = document.createElement('h3');
    food2Cost.textContent = '8';
    cost2.append(food2Cost);
    const food3Cost = document.createElement('h3');
    food3Cost.textContent = '6';
    cost2.append(food3Cost);
    const food4Cost = document.createElement('h3');
    food4Cost.textContent = '7';
    cost2.append(food4Cost);
    const food5Cost = document.createElement('h3');
    food5Cost.textContent = '10';
    cost2.append(food5Cost);
    

    const bottom = document.createElement('div');
    bottom.classList.add('bottom');
    menuItems.append(bottom);

    const heading3 = document.createElement('div');
    heading3.classList.add('heading');
    bottom.append(heading3);
    const bar = document.createElement('h2');
    bar.textContent='Bar';
    heading3.append(bar);

    const bottomContainer = document.createElement('div');
    bottomContainer.classList.add('bottom-container');
    bottom.append(bottomContainer);

    //bottom container has 2 divs each with 2 divs 

    const bottomleft= document.createElement('div');
    bottomleft.classList.add('items1');
    bottomContainer.append(bottomleft);

    //first div created and appended now its two divs are to be created 

    const leftdrink = document.createElement('div');
    leftdrink.classList.add('drink-items1');
    bottomleft.append(leftdrink);

    // now to fill this div

    const drink1 = document.createElement('h3');
    drink1.textContent='Mimosa';
    leftdrink.append(drink1);
    const drink2 = document.createElement('h3');
    drink2.textContent='Gin & Tonic';
    leftdrink.append(drink2);
    const drink3 = document.createElement('h3');
    drink3.textContent='Frozen Margarita';
    leftdrink.append(drink3);
    const drink4 = document.createElement('h3');
    drink4.textContent='Mojito';
    leftdrink.append(drink4);
    const drink5 = document.createElement('h3');
    drink5.textContent='Long Island Iced Tea';
    leftdrink.append(drink5);

    //creating cost div to match costs and finishing out first divs child divs

    const leftCost = document.createElement('div');
    leftCost.classList.add('cost1');
    bottomleft.append(leftCost);

    // now to fill the cost div 
    const drink1Cost = document.createElement('h3');
    drink1Cost.textContent='7';
    leftCost.append(drink1Cost);
    const drink2Cost = document.createElement('h3');
    drink2Cost.textContent='8';
    leftCost.append(drink2Cost);
    const drink3Cost = document.createElement('h3');
    drink3Cost.textContent='9';
    leftCost.append(drink3Cost);
    const drink4Cost = document.createElement('h3');
    drink4Cost.textContent='9';
    leftCost.append(drink4Cost);
    const drink5Cost = document.createElement('h3');
    drink5Cost.textContent='11';
    leftCost.append(drink5Cost);

    /////////////////////

    const bottomright= document.createElement('div');
    bottomright.classList.add('items1');
    bottomContainer.append(bottomright);

    //second div created and appended now its two divs are to be created 

    const rightdrink = document.createElement('div');
    rightdrink.classList.add('drink-items1');
    bottomright.append(rightdrink);

    // now to fill this div

    const rightDrink1 = document.createElement('h3');
    rightDrink1.textContent='Mimosa';
    rightdrink.append(rightDrink1);
    const rightDrink2 = document.createElement('h3');
    rightDrink2.textContent='Gin & Tonic';
    rightdrink.append(rightDrink2);
    const rightDrink3 = document.createElement('h3');
    rightDrink3.textContent='Frozen Margarita';
    rightdrink.append(rightDrink3);
    const rightDrink4 = document.createElement('h3');
    rightDrink4.textContent='Mojito';
    rightdrink.append(rightDrink4);
    const rightDrink5 = document.createElement('h3');
    rightDrink5.textContent='Long Island Iced Tea';
    rightdrink.append(rightDrink5);

    //creating cost div to match costs and finishing out second divs child divs

    const rightCost = document.createElement('div');
    rightCost.classList.add('cost1');
    bottomright.append(rightCost);

    // now to fill the cost div 
    const rightdrink1Cost = document.createElement('h3');
    rightdrink1Cost.textContent='8';
    rightCost.append(rightdrink1Cost);
    const rightdrink2Cost = document.createElement('h3');
    rightdrink2Cost.textContent='10';
    rightCost.append(rightdrink2Cost);
    const rightdrink3Cost = document.createElement('h3');
    rightdrink3Cost.textContent='4';
    rightCost.append(rightdrink3Cost);
    const rightdrink4Cost = document.createElement('h3');
    rightdrink4Cost.textContent='4';
    rightCost.append(rightdrink4Cost);
    const rightdrink5Cost = document.createElement('h3');
    rightdrink5Cost.textContent='5';
    rightCost.append(rightdrink5Cost);

}