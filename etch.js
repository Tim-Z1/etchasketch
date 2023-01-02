/*
Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).

There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
float/clear
inline-block
flexbox
CSS Grid

Be careful with borders and margins, as they can adjust the size of the squares!
“OMG, why isn’t my grid being created???”
Did you link your CSS stylesheet?
Open your browser’s developer tools.
Check if there are any errors in the JavaScript console.
Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.
*/

const container = document.querySelector('.container');
const button = document.querySelector('.button');
let input; //is global variable bad?

//add a default div grid so it can be useable from the very beginning

button.addEventListener('click', changeGrid);

function changeGrid () {
    input = prompt("Enter a number below");

    //insert a code line here that removes loop created div elements 

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

//need a way to reset divs not just keep adding divs when changing grid size



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