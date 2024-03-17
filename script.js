let boxes = document.querySelectorAll('.boxes'); // Corrected variable name from 'boxs' to 'boxes'

function randomColor(){
    let val1 = Math.ceil(0 + Math.random()*255); // 'Math' should start with a capital letter, and you need parentheses after 'Math.random'
    let val2 = Math.ceil(0 + Math.random()*255); // Same corrections as above
    let val3 = Math.ceil(0 + Math.random()*255); // Same corrections as above
    return `rgb(${val1},${val2},${val3})`;
}
function randomColorGenerator(){
    boxes.forEach(function(box){
        box.style.backgroundColor = randomColor();
    });
}

setInterval(randomColorGenerator,500)

// boxs.forEach(function(box){
//     box.style.backgroundColor = randomColor()
// })