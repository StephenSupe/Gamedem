console.log('index.js loaded')
let boxElement = document.getElementById('box')
let dvdElement = document.getElementById('dvd')


let boxPosition = {x:0, y:0}
let dvdPosition = {x:0, y:0, dx:3, dy:5}

let intervalID;
let count = 0;



// eventListener
// key events
document.addEventListener('keydown',(e)=>{
    console.log('keyPressed', e.key)
    // if(e.key == 'ArrowLeft'){
    //     boxPosition.x-=10
    // }
    if(e.key == 'ArrowUp'){
        boxPosition.y-=10
    }
    if(e.key == 'ArrowDown'){
        boxPosition.y+=10
    }
    // if(e.key == 'ArrowRight'){
    //     boxPosition.x+=10
    // }
    
  boxElement.style.top = boxPosition.y + 'px'
  boxElement.style.left = boxPosition.x + 'px'

})

const frame = ()=>{
    count++
    // how to stop setInterval
    // do a check is the dvd hitting the box
    // if(count === 100){
    //     clearInterval(intervalID)
    // }
    console.log(count)
    dvdPosition.x += dvdPosition.dx
    dvdPosition.y += dvdPosition.dy
    console.log('dvdPosition',dvdPosition)
    if( dvdPosition.x > 370 || dvdPosition.x <= 0 ){
        // revert the sign
        dvdPosition.dx =  dvdPosition.dx * -1
    }
    if( dvdPosition.y > 377 || dvdPosition.y <= 0 ){
        // revert the sign
        dvdPosition.dy =  dvdPosition.dy * -1
    }
    dvdElement.style.top = dvdPosition.y + 'px'
    dvdElement.style.left = dvdPosition.x + 'px'
    // once it hits a certian cordinate we want minus
}

const hit =()=>{
    let boxX =  boxPosition.x+50;
    //if dvd positions = boxposition.y + 50 || boxposition.y then invert the direction
    if (dvdPosition.x === boxX && dvdPosition.y >= boxPosition.y && dvdPosition.y <= boxPosition.y + 50) {
        dvdPosition.dx =  dvdPosition.dx * -1;
         dvdPosition.dy =  dvdPosition.dy * -1
         dvdElement.style.top = dvdPosition.y + 'px'
         dvdElement.style.left = dvdPosition.x + 'px'
    }
}


// animation
intervalID = setInterval(frame,60)
hit()






