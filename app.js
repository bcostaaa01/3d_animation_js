// movement animation 

const card = document.querySelector('.card');
const container = document.querySelector('.container');
// items
const title = document.querySelector('.title');
const phone = document.querySelector('.phone img');
const purchase = document.querySelector('.purchase');
const description = document.querySelector('.info h3');
const storages = document.querySelector('.storages');


// moving animation event

container.addEventListener('mousemove', (e) => {
     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// animate card in

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    // popout effect
    title.style.transform = 'translateZ(150px)';
})

// animate card out

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // popback effect
    title.style.transform = 'translateZ(0px)';
})