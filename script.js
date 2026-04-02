// SHIMMER LOOP
const shine = document.querySelector('.shine');

function loopShine(){
    shine.style.transition = 'none';
    shine.style.left = '-100%';

    setTimeout(()=>{
        shine.style.transition = '1.8s linear';
        shine.style.left = '150%';
    },50);
}

setInterval(loopShine, 2200);


// BUTTON EFFECT
const btn = document.getElementById('loginBtn');

btn.addEventListener('mousedown', ()=>{
    btn.style.filter = 'brightness(70%)';
    btn.style.transform = 'scale(0.96)';
});

btn.addEventListener('mouseup', ()=>{
    btn.style.filter = 'brightness(100%)';
    btn.style.transform = 'scale(1)';
});

btn.addEventListener('mouseleave', ()=>{
    btn.style.filter = 'brightness(100%)';
    btn.style.transform = 'scale(1)';
});
