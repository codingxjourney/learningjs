console.log('this is tutorial 17 on events');

document.getElementById('heading').addEventListener('click', function(e) {  // ('mouseover', function(e) {  } 
    console.log('You have clicked the heading');
    // location.href = '//codingxjourney.com';
    let variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    variable = Array.from(e.target.classList);

    variable = e.offsetX;
    variable = e.offsetY;

    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
});