"use strict"

let selectCell = "emplyCell.png"
let shipMapSave = {};

shipMapSave = JSON.parse('{"x0 y0":"armorPlateCell.png","x1 y1":"armorPlateCell.png","x0 y2":"armorPlateCell.png","x0 y3":"armorPlateCell.png","x0 y4":"armorPlateCell.png","x2 y2":"armorPlateCell.png","x2 y3":"armorPlateCell.png","x2 y4":"armorPlateCell.png","x0 y1":"engineLeft.png","x1 y2":"controlBlock.png","x1 y3":"fuelTank.png","x1 y4":"fuelTank.png","x1 y5":"defualtCell.png","x2 y5":"fuelTank.png","x3 y5":"engineTop.png","x6 y5":"engineTop.png","x4 y6":"gun.png","x5 y6":"gun.png","x6 y6":"gunArmor.png","x3 y6":"gunArmor.png","x2 y6":"defualtCell.png","x7 y6":"defualtCell.png","x8 y5":"defualtCell.png","x7 y5":"fuelTank.png","x8 y4":"fuelTank.png","x8 y3":"fuelTank.png","x7 y4":"armorPlateCell.png","x7 y3":"armorPlateCell.png","x7 y2":"armorPlateCell.png","x9 y4":"armorPlateCell.png","x9 y3":"armorPlateCell.png","x9 y2":"armorPlateCell.png","x8 y1":"armorPlateCell.png","x9 y0":"armorPlateCell.png","x9 y1":"engineRight.png","x8 y2":"controlBlock.png","x7 y7":"engineBottom.png","x2 y7":"engineBottom.png","x6 y7":"fuelTank.png","x5 y7":"fuelTank.png","x4 y7":"fuelTank.png","x3 y7":"fuelTank.png","x4 y8":"engineBottom.png","x5 y8":"engineBottom.png","x3 y8":"engineLeft.png","x6 y8":"engineRight.png"}')
shipMapSave = {};


function generateCells(ySize, xSize, cellSize, scale, mapObjects) {

    let code = '';
    let cells = xSize * ySize;
    let yRender = 0;
    let xRender = 0;
    let xCoardinats = 0;
    let yCoardinats = 0;
    for (;cells > 0; cells--) {
            if (shipMapSave[`x${xRender} y${yRender}`]) {
                code += `
                    <div style="width: ${cellSize}px; height: ${cellSize}px; background-image: url(img/${shipMapSave[`x${xRender} y${yRender}`]}); background-size: ${cellSize}px; position: absolute; left: ${xCoardinats}px; top: ${yCoardinats}px;" class="x${xRender} y${yRender}"></div>
                `
            } else  {
            code += `
                    <div style="width: ${cellSize}px; height: ${cellSize}px; background-image: url(img/emplyCell.png); background-size: ${cellSize}px; position: absolute; left: ${xCoardinats}px; top: ${yCoardinats}px;" class="x${xRender} y${yRender}"></div>
                    `
        }
        let cell;
        xRender++;
        xCoardinats += cellSize;
        if (xRender >= xSize) {
            yRender++;
            xRender = 0;
            xCoardinats = 0;
            yCoardinats += cellSize;
        }


    }

    return code;
}

document.body.innerHTML += `<div class="menuOfSelect" style="position: absolute; right:500px;">
    <div class="armorPlateCell"><img src="img/armorPlateCell.png" alt="armorPlateCell" height=" 50px;" class="armorPlateCell">armorPlateCell</div>
    <div class="defualtCell"><img src="img/defualtCell.png" alt="defualtCell" height=" 50px;" class="defualtCell">defualtCell</div>
    <div class="fuelTank"><img src="img/fuelTank.png" alt="fuelTank" height=" 50px;" class="fuelTank">fuelTank</div>
    <div class="gun"><img src="img/gun.png" alt="gun" height=" 50px;" class="gun">gun</div>
    <div class="gunArmor"><img src="img/gunArmor.png" alt="gunArmor" height=" 50px;" class="gunArmor">gunArmor</div>
    <div class="controlBlock"><img src="img/controlBlock.png" alt="controlBlock" height=" 50px;" class="controlBlock">controlBlock</div>
    <div class="engine"><img src="img/engineTop.png" alt="engine" height=" 50px;" class="engine">engine</div>
    </div>`;

document.querySelector(".constructorMatrice").innerHTML = generateCells(20, 20, 30, 0, 1213)

document.querySelector(".constructorMatrice").addEventListener("click", event => {
    if (event.target.style.backgroundImage === 'url("img/emplyCell.png")') {
        event.target.style.backgroundImage = `url(img/${selectCell})`;
        if (selectCell !== "emplyCell.png") {
            shipMapSave[event.target.getAttribute("class")] = selectCell;
        }
    } else  {
        event.target.style.backgroundImage = 'url("img/emplyCell.png")'
        delete shipMapSave[event.target.getAttribute("class")];
    }

})

//defualtCell.png
//img/armorPlateCell.png
//fuelTank.png
//gun.png
//gunArmor.png
//controlBlock.png

function contextMenuForEngine(open) {
    if (open) {
        document.querySelector(".menuOfSelect").innerHTML += `
    <div class="contextMenuForEngine" style=" position: absolute; right: -40px; bottom: 0;">
        <div class="engineTop"><img src="img/engineTop.png" alt="engineTop" height=" 50px;" class="engineTop">gunArmor</div>
        <div class="engineRight"><img src="img/engineRight.png" alt="engineRight" height=" 50px;" class="engineRight">gunArmor</div>
        <div class="engineBottom"><img src="img/engineBottom.png" alt="engineBottom" height=" 50px;" class="engineBottom">gunArmor</div>
        <div class="engineLeft"><img src="img/engineLeft.png" alt="engineLeft" height=" 50px;" class="engineLeft">gunArmor</div>
    </div>
    `;
    }
    if (!open && document.querySelector(".contextMenuForEngine")) {
        document.querySelector(".contextMenuForEngine").remove();
    }

}

document.querySelector(".menuOfSelect").addEventListener("click", event => {
    console.log(true)
    contextMenuForEngine(false);
    if ("defualtCell" === event.target.getAttribute("class")) {
        selectCell = "defualtCell.png";
    }
    if ("armorPlateCell" === event.target.getAttribute("class")) {
        selectCell = "armorPlateCell.png";
    }
    if ("fuelTank" === event.target.getAttribute("class")) {
        selectCell = "fuelTank.png";
    }
    if ("gun" === event.target.getAttribute("class")) {
        selectCell = "gun.png";
    }
    if ("gunArmor" === event.target.getAttribute("class")) {
        selectCell = "gunArmor.png";
    }
    if ("controlBlock" === event.target.getAttribute("class")) {
        selectCell = "controlBlock.png";
    }
    if ("engine" === event.target.getAttribute("class")) {
        contextMenuForEngine(true)
    }


    if ("engineTop" === event.target.getAttribute("class")) {
        selectCell = "engineTop.png";
        document.querySelector(".menuOfSelect .engine img").setAttribute("src", "img/engineTop.png")

    }
    if ("engineRight" === event.target.getAttribute("class")) {
        selectCell = "engineRight.png";
        document.querySelector(".menuOfSelect .engine img").setAttribute("src", "img/engineRight.png")

    }
    if ("engineBottom" === event.target.getAttribute("class")) {
        selectCell = "engineBottom.png";
        document.querySelector(".menuOfSelect .engine img").setAttribute("src", "img/engineBottom.png")

    }
    if ("engineLeft" === event.target.getAttribute("class")) {
        selectCell = "engineLeft.png";
        document.querySelector(".menuOfSelect .engine img").setAttribute("src", "img/engineLeft.png")
    }
})


function getCodeOfSaveMapShip() {
    console.log(JSON.stringify(shipMapSave))
}


// addEventListener("click", event => {
//     if (event.target === document.querySelector(".contexMenuConstructor") || document.querySelector(".contexMenuConstructor") === event.target.parentNode) {
//         return
//     }
//     if (document.querySelector(".contexMenuConstructor")) {
//         document.querySelector(".contexMenuConstructor").remove();
//     }
// })
//
// addEventListener("contextmenu", event => {
//     if (document.querySelector(".contexMenuConstructor")) {
//         document.querySelector(".contexMenuConstructor").remove();
//     }
//     event.preventDefault();
//     console.log(event);
//     document.body.innerHTML += `<div style="position: absolute; background-color: rgba(0, 0, 0, 0.5); left: ${event.screenX}px; top: ${event.screenY - 65}px;" class="contexMenuConstructor">
//         <button>rotate left</button>
//         <button>rotate right</button>
//     </div>`;
//     event.screenX;
//     event.screenY;
//
// })

