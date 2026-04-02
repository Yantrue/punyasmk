// efek kilau berjalan terus
const shine = document.querySelector('.shine');

function animateShine(){
    shine.style.left = '-100%';
    setTimeout(()=>{
        shine.style.transition = '1.5s';
        shine.style.left = '150%';
    },50);

    setTimeout(()=>{
        shine.style.transition = 'none';
    },1600);
}

setInterval(animateShine, 2500);


// tombol login jadi gelap saat ditekan
const btn = document.getElementById('loginBtn');

btn.addEventListener('mousedown', ()=>{
    btn.style.filter = 'brightness(70%)';
});

btn.addEventListener('mouseup', ()=>{
    btn.style.filter = 'brightness(100%)';
});

btn.addEventListener('mouseleave', ()=>{
    btn.style.filter = 'brightness(100%)';
});
