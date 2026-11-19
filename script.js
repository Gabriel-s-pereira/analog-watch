const digitalwatch = document.getElementsByClassName('digital');
const secondpointer = document.querySelector(".p_s");
const minutepointer = document.querySelector(".p_m");
const hourpointer = document.querySelector(".p_h");


function updatedigital(DOM){
    const date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    DOM.innerText = `${hours}:${minutes}:${seconds}`;
    
    secondpointer.setAttribute("style", `transform: rotate(${(seconds*6)+270}deg)`);
    minutepointer.setAttribute("style", `transform: rotate(${(minutes*6)+270}deg)`);
    hours = hours > 12 ? hours - 12 : hours;
    hourpointer.setAttribute("style", `transform: rotate(${((hours*30)+(minutes*0.5))+270}deg)`);
};

setInterval(() => updatedigital(digitalwatch[0]), 1000);