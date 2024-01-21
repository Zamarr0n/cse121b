/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jose Emilio Zamarron Sanchez";
let food = ['Pizza',' Boneless',' Hamburger',' Enchiladas',' Tacos',' Chilaquiles']
let favorite_food = ['Pasta'];
let currentYear = 2024;
let image = "images/IMG_4912.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
nameElement.innerHTML =  `<strong>${fullName}</strong>`;
const foodElement = document.getElementById("food");
foodElement.innerHTML = `<strong>${food}</strong> <br>`;    
var new_food = food.push(favorite_food);
const imageElement = document.getElementById("index-img")
imageElement.setAttribute('src', image)
imageElement.setAttribute('alt', `Profile image of image`)
const yearElement = document.querySelector("#year")
yearElement.innerHTML = `<strong>${currentYear}</strong>`;
// nameElement.setAttribute(currentYear) 
foodElement.innerHTML += `<strong>${food}</strong><br>`; 
var new_food = food.shift();
foodElement.innerHTML += `<strong>${food}</strong><br>`; 
var new_food = food.pop();
foodElement.innerHTML += `<strong>${food}</strong><br>`; 
/* Step 4 - Adding Content */






/* Step 5 - Array */






