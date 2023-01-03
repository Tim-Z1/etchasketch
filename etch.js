const container = document.querySelector('.container');
const button = document.querySelector('.button');

let input; //is global variable bad?

for (i = 0; i < 16*16; i++) {
    const box = document.createElement('div');
    container.appendChild(box);
    box.style.width = '6.25%';

    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'purple';
    });
}

button.addEventListener('click', changeGrid);

function changeGrid() {
    //the 3 lines below remove all existing divs in container (got this code from mdn)
    let element = container;
    while (element.firstChild) {
    element.removeChild(element.firstChild);
}
    input = prompt("Enter a number below (single number)");

    if (input > 100) {
        alert('Grid size too big! Max is 100x100')
        input = prompt("Enter a number below (single number)");
    }

    //style.width requires a string, using two variables to achieve that
    let value = 100/input;
    let gridSize = '' + value + '%';

    //loops to make multiple divs in a row
    for (i = 0; i < input*input; i++) {
    const box = document.createElement('div');
    container.appendChild(box);
    box.style.width = gridSize;

    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'purple';
    });
    }
}

/* Pseudo-code
Use hover effect to change color of div 
    -add a button when clicked resets the board to white

Add a button that prompts user to input a number (max 100): 
    i.e. how many squares user wants 3x3, 9x9 etc.

*/

/*
ways to make a grid:
-using flex wrap
    *dependent on pixel sizing of container and divs
-use JS to change width/height of div and how many divs are created

-make one row inline, make a new row inline etc.
    *each row is a new element which can become a lot if there's 100 rows
*/