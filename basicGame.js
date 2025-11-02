const btn = document.getElementById("btn");
const progressBar = document.getElementById("progress");
let width = 0;
const star = document.getElementsByClassName("star");

btn.addEventListener("click",()=>{
    if(width<100){
        width += 10;
        progressBar.style.width = width+"%";
       const buttonRect = btn.getBoundingClientRect();
        const progressRect = progressBar.getBoundingClientRect();
        star.style.transition = 'none';
    star.style.opacity = '0';
  star.style.transform = 'none';
  star.style.left = buttonRect.left + buttonRect.width / 2 + 'px';
  star.style.top = buttonRect.top - 10 + 'px';
        void star.offsetWidth;
        
        star.style.transition = 'transform 1s ease-in-out, opacity 0.3s ease-in';
  star.style.opacity = '1';
        
        const xTarget = progressRect.left + progressRect.width / 2 - buttonRect.left;
  const yTarget = progressRect.top - buttonRect.top;
        
        star.style.transform = `translate(${xTarget}px, ${yTarget}px) scale(0.3)`;
        
        setTimeout(() => {
      star.style.opacity = '0';
    }, 1000);
    }
    else{
        progressBar.style.width = (100+"%");
    }
})

