// movement animation 

const card = document.querySelector('.card');
const container = document.querySelector('.container');
// items
const title = document.querySelector('.title');



// moving animation event

container.addEventListener('mousemove', (e) => {
     let xAxis = ((window.innerWidth / 2 - e.pageX) / 10);
     let yAxis = ((window.innerHeight / 2 - e.pageY) / 10);
     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// animate card in

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
})

// animate card out

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateY(0deg)`;
})