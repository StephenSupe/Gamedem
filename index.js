console.log('index.js loaded')
let boxElement = document.getElementById('box')
let dvdElement = document.getElementById('dvd')
let totalCount = document.getElementById('count')
let lifeCount = document.getElementById('lives')
let boxPosition = { x: 0, y: 0 }
let dvdPosition = { x: 100, y: 100, dx: 3, dy: 5 }
let count = 0;
totalCount.innerHTML = `Total Count: ${count}`
let lives = 3;
lifeCount.innerHTML = `Lives Remaining: ${lives}`

document.addEventListener('keydown', (e) => {
    console.log('keyPressed', e.key)
    // if(e.key == 'ArrowLeft'){
    //     boxPosition.x-=10
    // }
    if (e.key == 'ArrowUp') {
        boxPosition.y -= 10
    }
    if (e.key == 'ArrowDown') {
        boxPosition.y += 10
    }
    // if(e.key == 'ArrowRight'){
    //     boxPosition.x+=10
    // }
    boxElement.style.top = boxPosition.y + 'px'
    boxElement.style.left = boxPosition.x + 'px'
})
const hit = () => {
    console.log("Boom!")
    // Invert position upon "hit"
    dvdPosition.dx = dvdPosition.dx * -1;
    dvdPosition.dy = dvdPosition.dy * -1;
    // Update dvd movement
    dvdElement.style.top = dvdPosition.y + 'px'
    dvdElement.style.left = dvdPosition.x + 'px'
    count++
    totalCount.innerHTML = `Total Count: ${count}`
    console.log(count)
}
const frame = () => {
    // count++
    // how to stop setInterval
    // do a check is the dvd hitting the box
    // if(count === 100){
    //     clearInterval(intervalID)
    // }
    // console.log(count)
    dvdPosition.x += dvdPosition.dx
    dvdPosition.y += dvdPosition.dy
    // console.log('dvdPosition',dvdPosition)
    if (dvdPosition.x > 370 || dvdPosition.x <= 0) {
        // revert the sign
        dvdPosition.dx = dvdPosition.dx * -1
    }
    if (dvdPosition.y > 377 || dvdPosition.y <= 0) {
        // revert the sign
        dvdPosition.dy = dvdPosition.dy * -1
    }
    dvdElement.style.top = dvdPosition.y + 'px'
    dvdElement.style.left = dvdPosition.x + 'px'
    // once it hits a certian cordinate we want minus
    if (dvdPosition.x <= boxPosition.x + 50 && dvdPosition.y >= boxPosition.y && dvdPosition.y <= boxPosition.y + 50) {
        hit()
    }

    if(dvdPosition.x <= 0) {
        lives--;
        lifeCount.innerHTML = `Lives Remaining: ${lives}`;
    }
    if (count === 3 || lives === 0) {
        endGame();
    
    }
}
    const endGame = () => {
        if (count === 3) {
            console.log('you win!');
        }  
        if (lives === 0) {
            console.log('you lose!');
           }
        }

//     // if count = 3, console.log "You win!"; stop the movement
//     // if lives = 0, console.log "You lose!"; stop the movement
// }
// let boxX =  boxPosition.x+50;
//Make condition for when dvd coordinates equal box coordinates
// animation
setInterval(frame, 60)
// setInterval(hit, 60)