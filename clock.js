const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(()=>{
    let date = new Date();
    hr.textContent = date.getHours();
    min.textContent = date.getMinutes();
    sec.textContent = date.getSeconds();
},1000);


