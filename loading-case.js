const dots = document.querySelectorAll('.dot');

let index = 0;
console.log(dots);
dots.forEach((item)=>{
    item.style.opacity=0;
    // loop on array
    setInterval(()=>{
    if(index<=dots.length){
        item.style.opacity=1;
        item.style.transform="translateY(100%)";
        index++;
    }
    else{
        item.style.transform="translateY(0%)";
        item.style.opacity=0;
        index =0;
    }
        },1100)
})


