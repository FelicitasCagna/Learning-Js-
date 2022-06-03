//!Capturing vs Bubbling
let padre = document.querySelector('.padre');
let hijo = document.querySelector('.hijo');

//ahora agrego un escuchador de eventos

padre.addEventListener('click', ()=>console.log('Hola, soy el padre'));
hijo.addEventListener('click', ()=>console.log('Holi, soy el hijo'), true);

//? Robots peligrosos

let x=0;
let y=0;
let robot = document.querySelector('.robot');
let corral = document.querySelector('.corral');
window.addEventListener('keydown',(event)=>{
    event.preventDefault();
    console.log(event.key);
    let robotCoor = (robot.getBoundingClientRect());
    let corralCoor = (corral.getBoundingClientRect());
    switch (event.key) {
        case 'ArrowUp':
            if (robotCoor.top>corralCoor.top) {
                y--;
            }
        break;
        case 'ArrowDown':
            if (robotCoor.buttom<corralCoor.bottom) {
                y++;
            }
        break;
        case 'ArrowLeft':
            if (robotCoor.left>corralCoor.left) {
                x--;
            }
        break;
        case 'ArrowRight':
            if (robotCoor.right<corralCoor.right) {
                x++;
            }
            break;
    }
    robot.style.transform = `translate (${x*10}px,${y*10}px)`;

})