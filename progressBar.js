const btn = document.getElementById("btn");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

let percentage = 0;

btn.addEventListener("click",()=>{
    if(percentage<100){
    percentage += 10;
    child.style.width = percentage+"%";
    }
    else{
        alert("completed successfully");
    }
})

