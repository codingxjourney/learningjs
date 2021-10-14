console.log('this is js tut 18');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3);  // mouseenter, mouseleave, mouseout, mousemove, mouseup


// function func1(e) { 
//     console.log("Thanks", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Thanks double click", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Thanks mouse down");
//     e.preventDefault();
// }



// document.querySelector('.no').addEventListener(
//     'mouseenter', function() {
//         console.log('You entered');
//     }
// )

// document.querySelector('.no').addEventListener(
//     'mouseleave', function() {
//         console.log('You exited');
//     }
// )



document.querySelector('.container').addEventListener(
    'mousemove', function(e) {
        console.log('You triggered mouse move');
        // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX+e.offsetY})`;
        // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX})`;
        // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`;
        // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 54)`;
        document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 154)`;
        console.log(e.offsetX, e.offsetY);
    }
)