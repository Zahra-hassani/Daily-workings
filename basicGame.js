const btn = document.getElementById("btn");
const progressBar = document.getElementById("progress");
let width = 0;
const star = document.getElementsByClassName("star");

btn.addEventListener("click",()=>{
    if(width<100){
        width += 10;
        progressBar.style.width = width+"%";
        star.style.animationName = "fly";
        star.style.animationDuration = 1.5+"s";
        star.style.animationIterationCount = 1;
        star.style.animationTimingFunction = "ease-out";
    }
    else{
        progressBar.style.width = (100+"%");
    }
})

