// Global variables
let currency_array;

const displayData = (array) => {
    const divElement = document.getElementById('result')
        //creating every element for the result of the API.
        let box = document.createElement('article');
        let city_name = document.createElement("h3");
        let description = document.createElement("p");
        let temperature = document.createElement('p');
        let min_temp = document.createElement('p');
        let max_temp = document.createElement('p');
        let country = document.createElement('p');
        
        city_name.textContent = currency_array.name;
        description.textContent = currency_array.weather[0].main;
        temperature.textContent = currency_array.main.temp;
        min_temp.textContent = currency_array.main.temp_min;
        max_temp.textContent = currency_array.main.temp_max;
        country.textContent = currency_array.sys.country;

        // order
        box.appendChild(country);
        box.appendChild(city_name);
        box.appendChild(temperature);
        box.appendChild(description);
        box.appendChild(min_temp);
        box.appendChild(max_temp);
        //Everything will be appended inside the divElement constant.
        divElement.appendChild(box);
}

async function getWhether(){
    var input_city = document.getElementById("country").value;
    if (input_city !== ''){
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${input_city}&appid=e51f8e7da8cf70a1acb20c450538130b&units=metric`;
        const response = await fetch(url);
        currency_array = await response.json();
        displayData(currency_array);
    }else{
        console.log('no-input');
        displayData(currency_array);
    }
    
    console.log(currency_array);
}

document.querySelector('#getData').addEventListener('click', getWhether)

// getWhether()


