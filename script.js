const container = document.querySelector(".container")
const btn = document.querySelector(".btn")

function buildGrid(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        let divs = document.createElement("div");
        container.appendChild(divs);
    }
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

btn.addEventListener("click", () => {
    let num = prompt("How many squares per side?");
    
    deleteGrid();
    
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`

    function buildCustomGrid(num) {
        for (let i = 0; i < num * num; i++) {
            let divs = document.createElement("div");
            container.appendChild(divs);
        }
}
    buildCustomGrid(num);
})

buildGrid(256);