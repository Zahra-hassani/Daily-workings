const progress = document.getElementById("progress");
const b = document.body;
const img = [
"url('./Manto1.jpg')",
"url('./Manto2.jpg')",
"url('./Manto3.jpg')",
"url('./Manto4.jpg')",
"url('./Manto5.jpg')",
];
let index = 0;
let width = 0;
progress.style.width = width+"%";
setInterval(()=>{
    if(width<100){
        width+=10;
        progress.style.width =width+"%";
    }
    if(width == 100){
    b.style.backgroundImage = img[index];
    index = (index+1)%img.length;
    width = 0;
    }
    
},850);


