const container = document.getElementById('container');


function makeGrid(r, c){
    for(let i=0; i<(r*c); i++){
        let grid = document.createElement("div");
        container.appendChild(grid).className = "gridrow";
    }
}
makeGrid(16, 16);



let onHover = document.querySelectorAll('.gridrow');
onHover.forEach((item) =>{
    item.addEventListener('mouseenter', e =>{
        e.target.classList.add('hovered')
    })
    
});

