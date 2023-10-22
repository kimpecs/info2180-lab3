/*document.querySelector("html").addEventListener('click', () => {
    alert("X")
});
*/

// document.addEventListener("DOMContentLoaded", (event) => {
//     const squares = document.querySelector(".square");

//     squares.forEach(square =>{
//         square.classList.add("box")
//     })
// })

document.addEventListener("DOMContentLoaded", (event) => {
    board = document.getElementById("board");

    for(let i = 0; i < board.children.length; i++) {
        board.children[i].classList.add("square");
    }
});