/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
 
function create_menu(array){

//---create elements---div/ul/lis
const menu = document.createElement("div");
const un_list = document.createElement("ul");

//---add classnames-----
menu.classList.add("menu")

//---appendchild------

menu.append(un_list)

//----create/append/add textContent to lis---

array.forEach(item=>{
const lis = document.createElement("li")
un_list.append(lis);
lis.textContent = item
})



//----add eventListener to the menu_button---

const menu_button = document.querySelector(".menu-button")

menu_button.addEventListener("click", e =>{
menu.classList.toggle("menu--open")

})

//stretch-----

un_list.addEventListener("mouseover" ,e=>{
un_list.style.color = "yellow";
un_list.style.backgroundColor ="black"

})
un_list.addEventListener("mouseover" ,e=>{
un_list.style.color = "pink";
un_list.style.backgroundColor ="black"

})

un_list.addEventListener("mouseleave" ,e=>{
un_list.style.color = "black";
un_list.style.backgroundColor ="pink"

})

// ---------stretch task------
return menu

}

const header = document.querySelector(".header");
 header.append(create_menu(menuItems));












