/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jose Emilio Zamarron Sanchez",
    photo:  "images/IMG_4912.jpeg",
    favoriteFoods:[
        "Pizza",
        "Sushi",
        "Tacos",
        "Strawberry Shake"
    ],
    hobbies:[
        "Coding",
        "Working out",
        "Learn new languages",
        "Sleep"
    ],
    placesLived :[],
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place:"Mexico, Coahuila, Torreon",
    length:"20 years",
    

})

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent =  myProfile.name;
/* Photo with attributes */
let img = document.querySelector("#photo");
img.setAttribute('src', myProfile.photo);
img.setAttribute("alt", myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let new_element = document.createElement("li")
    new_element.textContent = element
    document.querySelector("#favorite-foods").appendChild(new_element)
    
});
/* Hobbies List */
myProfile.hobbies.forEach(element => {
    let new_element = document.createElement('li')
    new_element.textContent = element
    document.querySelector("#hobbies").appendChild(new_element);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(element => {
    let new_element = document.createElement("dt");
    let second_new_element = document.createElement("dd");
    new_element.textContent = element.place;
    second_new_element.textContent = element.length;
    let add = document.querySelector("#places-lived");
    add.appendChild(new_element);
    add.appendChild(second_new_element);
});

