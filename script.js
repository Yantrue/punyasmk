// SHIMMER LOOP HALUS
const shine = document.querySelector('.shine');

function loopShine(){
    shine.style.transition = 'none';
    shine.style.left = '-100%';

    setTimeout(()=>{
        shine.style.transition = '2s linear';
        shine.style.left = '150%';
    },50);
}

setInterval(loopShine, 2500);


// BUTTON PRESS EFFECT
const btn = document.getElementById('loginBtn');

btn.addEventListener('mousedown', ()=>{
    btn.style.filter = 'brightness(75%)';
    btn.style.transform = 'scale(0.97)';
});

btn.addEventListener('mouseup', ()=>{
    btn.style.filter = 'brightness(100%)';
    btn.style.transform = 'scale(1)';
});

btn.addEventListener('mouseleave', ()=>{
    btn.style.filter = 'brightness(100%)';
    btn.style.transform = 'scale(1)';
});
