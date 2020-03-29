console.log('Client side javascript file is loaded!');



const weatherForm = document.querySelector('form');

const locationtext = document.querySelector('#location');

const forecasttext = document.querySelector('#forecast');

const input = document.querySelector('input');

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const address = input.value;
    const url = '/weather?address=' + address;
    fetch(url).then(response =>{
        response.json().then(data=>{
            if(data.error){
                console.log('Error is ' + error);
            }
            else {
            locationtext.innerHTML = data.location;
            forecasttext.innerHTML = data.forecast;

            }
        })
    })

})


























