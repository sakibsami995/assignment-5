// Color change
const toggle = document.getElementById('toggle-color');
const body = document.querySelector('body');

toggle.addEventListener('click', function(event){
    event.preventDefault();
    const randomLightColor = '#' + Math.floor(Math.random() * 0xFFFF).toString(16).padStart(4, '0');
    body.style.background = randomLightColor;  
})





