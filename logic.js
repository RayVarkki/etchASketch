
const boxContainer = document.querySelector(".gridCard");
const clearBoxBtn = document.querySelector("#clearBoxBtn");
const setDimensionsBtn = document.querySelector("#setGridDimensionBtn");
const gridSize = 16;

/**
 * Generates the grid used for etch-a-sketch 
 * @param {Number} size 
 */
function generateGrid(size){

    let boxDimensions = boxContainer.getBoundingClientRect();
    while(boxContainer.firstChild){
        boxContainer.removeChild(boxContainer.lastChild);
    }
    for(let i = 0; i < size*size; i++){

        let generatedBox = document.createElement("div");
        generatedBox.classList.add("box-element");
        generatedBox.style.height = `${boxDimensions.height / size}px`;
        generatedBox.style.width = `${boxDimensions.width / size}px`;
        boxContainer.appendChild(generatedBox);
    }
}

boxContainer.addEventListener("mouseover", (event) => {

    if(event.target && event.target.classList.contains("box-element") && !(event.target.style.backgroundColor)){
        event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    }
});

clearBoxBtn.addEventListener("click" , () => {
    const boxes = document.querySelectorAll(".box-element");
    boxes.forEach(box => {
        box.style.backgroundColor = "";
    });
});

setDimensionsBtn.addEventListener("click", () => {
    let gridSize = prompt("What do you want the grid size to be? Must be no greater than 100");
    if(gridSize <= 100 | gridSize > 0){
        generateGrid(gridSize);
    }
})
