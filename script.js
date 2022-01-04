const container = document.getElementById('container');
const resBtn = document.getElementById('btn-res');
const rgbBtn = document.getElementById('btn-rgb');
const defaultBtn = document.getElementById('btn-def');
const eraseBtn = document.getElementById('btn-ers');
const gridSize = document.getElementById('range');
const gridValue = document.getElementById('grid-value');

let size = gridSize.value;

gridSize.oninput = function(){
    gridValue.innerText = `${this.value}x${this.value}`;
    size = this.value;
    reset();
    makeGrid(size)
}

makeGrid(size);
resBtn.addEventListener('click', clear);
rgbBtn.addEventListener('click', rgb);
defaultBtn.addEventListener('click', hover);
eraseBtn.addEventListener('click', eraser);

function makeGrid(x){
    for(let i=0; i<(x*x); i++){
        let grid = document.createElement("div");
        container.appendChild(grid).className = "gridrow";
    }
    container.setAttribute('style', `grid-template-columns: repeat(${x}, 2fr); grid-template-rows: repeat(${x}, 2fr);`);
    hover();
    console.log(size)
}

function reset(){
    let reset = document.querySelectorAll(".gridrow");
    reset.forEach((item) =>{
        item.remove();
    })
}

function clear(){
    let reset = document.querySelectorAll(".gridrow");

    reset.forEach((item) => {
        item.remove();
    })
    makeGrid(size)
};

function hover(){
    let onHover = document.querySelectorAll('.gridrow');
    onHover.forEach((item) =>{
    item.addEventListener('mousedowns', e =>{
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
        item.addEventListener('mousedown', e =>{
            e.target.classList.remove('hovered');
            e.target.setAttribute('style', `background-color: rgb(${r},${g}, ${b});`);
        })
    });
}

function eraser(){
    let  erase = document.querySelectorAll('.gridrow');
    erase.forEach((item) =>{
        item.addEventListener('mousedown', e=>{
            e.target.classList.remove('hovered');
            e.target.setAttribute('style', "");
        })
    })
}