/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];
const utah_cities = ["Cedar City Utah","Manti, Utah, United States", "Payson, Utah, United States", "Provo, Utah, United States", "Salt Lake City, Utah, United States", "St. George, Utah, United States", "South Jordan, Utah, United States", "Logan, Utah, United States", "Vernal, Utah, United States"];
//  async displayTemples Function 
const displayTemples = (temples) =>{

    for (let i = 0; i < temples.length; i++) {
    const first = temples[i];
    
    first.forEach((element) => {
        let box = document.createElement("article");
        let title = document.createElement("h3");
        let photo = document.createElement("img");
        title.textContent = element['templeName'];
        photo.setAttribute("src",element['imageUrl']);
        photo.setAttribute("alt",element['location']);
        box.appendChild(title);
        box.appendChild(photo);
        templesElement.appendChild(box);
    });

} 

} 

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if(response.ok){
        const data = await response.json();
        templeList.push(data);
        console.log(templeList)            
    }else{
        console.log("Error 404")
    }

    displayTemples(templeList);
}
/* reset Function */
const reset = () => {
    if(templesElement){
        templesElement.innerHTML = '';
    }else{
        console.log("temples element not found");
    }

}
/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered").value; 
    switch (filter) {
        case 'utah':
        // displayTemples(temples.filter(cities => cities.location == "Cedar City Utah","Manti, Utah, United States", "Payson, Utah, United States", "Provo, Utah, United States", "Salt Lake City, Utah, United States", "St. George, Utah, United States", "South Jordan, Utah, United States", "Logan, Utah, United States", "Vernal, Utah, United States"))
        // displayTemples(temples.filter(temp => temp.location.includes =='Utah'));
            console.log('utah')
            break;
        case 'not-utah':
            // displayTemples(temples.filter(temp => temp.location.includes('Utah')));

            console.log('not-utah')
            break;
        case 'older':
            // displayTemples(temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1)));
            
            console.log('older')
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.log('Invalid filter value');
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList) });