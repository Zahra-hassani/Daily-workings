const body = document.body;
const h1 = document.getElementById("h1");
const colors =[
"purple",
"pink",
"deepskyblue",
"darkblue"
];
let index =0;
setInterval(()=>{
    body.style.backgroundColor = colors[index];
    index = (index+1)% colors.length;
},400);

