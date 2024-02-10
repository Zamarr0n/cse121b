/* W05: Programming Tasks */
/* Declare and initialize global variables */
let templesList;
//  async displayTemples Function 
const displayTemples = (temples) =>{
    const templesElement = document.getElementById("temples");
    temples.forEach((element) => {
        let box = document.createElement("article");
        let title = document.createElement("h3");
        let photo = document.createElement("img");
        title.textContent = element.templeName;
        photo.setAttribute("src",element.imageUrl);
        photo.setAttribute("alt",element.location);
        box.appendChild(title);
        box.appendChild(photo);
        templesElement.appendChild(box);
    });
}

/* async getTemples Function using fetch()*/
async function getTemples(){
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
    const response = await fetch(url);
    templesList = await response.json();
    console.log(templesList)            
    displayTemples(templesList);
}
/* reset Function */
const reset = () => {
    const templesElement = document.getElementById("temples");
    if(templesElement){
        templesElement.innerHTML = '';
    }else{
        console.log("temples element not found");
    }

}
/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filtro = document.getElementById("filtered").value; 
    switch (filtro) {
        case 'utah':
            const ubicacion_utah = templesList.filter((ubicacion) => ubicacion.location.includes('Utah'));
            displayTemples(ubicacion_utah)
            console.log(ubicacion_utah);
            break;
        case 'not-utah':            
            const not_utah = templesList.filter((ubicacion) => !ubicacion.location.includes('Utah'));
            displayTemples(not_utah)
            console.log(not_utah)
            break;
        case 'older':
            const oldest = temples.filter(year => new Date(year.dedicated) < new Date(1950, 0, 1));
            displayTemples(oldest)
            console.log(oldest)
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
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templesList) });