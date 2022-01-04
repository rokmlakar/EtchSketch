const container = document.getElementById('container');
const resBtn = document.getElementById('btn-res');
const rgbBtn = document.getElementById('btn-rgb');
const defaultBtn = document.getElementById('btn-def');
const eraseBtn = document.getElementById('btn-ers');

let size = 18;

makeGrid(size);
resBtn.addEventListener('click', resetGrid);
rgbBtn.addEventListener('click', rgb);
defaultBtn.addEventListener('click', hover);
eraseBtn.addEventListener('click', eraser);

function makeGrid(x){
    for(let i=0; i<(x*x); i++){
        let grid = document.createElement("div");
        container.appendChild(grid).className = "gridrow";
        console.log(x)
    }
    container.setAttribute('style', `grid-template-columns: repeat(${x}, 2fr); grid-template-rows: repeat(${x}, 2fr);`);
    hover();
}

function hover(){
    let onHover = document.querySelectorAll('.gridrow');
    onHover.forEach((item) =>{
    item.addEventListener('mouseenter', e =>{
        e.target.setAttribute("style", "")
        e.target.classList.add('hovered')
    })   
});
}

function rgb(){
    let rgb = document.querySelectorAll('.gridrow');
    rgb.forEach((item) => {
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        item.addEventListener('mouseenter', e =>{
            e.target.classList.remove('hovered');
            e.target.setAttribute('style', `background-color: rgb(${r},${g}, ${b});`);
        })
    });
}

function eraser(){
    let  erase = document.querySelectorAll('.gridrow');
    erase.forEach((item) =>{
        item.addEventListener('mouseenter', e=>{
            e.target.classList.remove('hovered');
            e.target.setAttribute('style', "");
        })
    })
}

function resetGrid(){
    let reset = document.querySelectorAll(".gridrow");

    reset.forEach((item) => {
        item.remove();
    })
    let x = prompt("enter number of squares (max 100)");
    while(x > 100 ){
        x = prompt("enter number of squares (max 100)")
    }
    makeGrid(x);
};



