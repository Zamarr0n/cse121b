const array =[[
    {
    "templeName": "Aba Nigeria",
    "location": "Aba, Nigeria",
    "dedicated": "2005, August, 7",
    "area": 11500,
    "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
    "templeName": "Cedar City Utah",
    "location": "Cedar City, Utah, United States",
    "dedicated": "2017, December, 10",
    "area": 42657,
    "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
    },
    {
    "templeName": "Manti Utah",
    "location": "Utah",
    "dedicated": "1888, May, 21",
    "area": 74792,
    "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },]]

    const innerArray = array[0];
    innerArray.forEach((temple) => {
        const filtrado = innerArray.filter( x => x['location'] !== "Utah")
        console.log(filtrado)
    });
    // for (let index = 0; index < array.length; index++) {
    //     const filtrado = array.filter( x => x[index]['location'] == "Utah")
    //     console.log(filtrado)
    // }

    // console.log(array.filter(temp => temp.location == "utah"));
    // array.forEach(element => {
    //     if(array.filter(x => x.location !== 'Utah')){
    //         console.log(element);
    //     }
        
    // });



