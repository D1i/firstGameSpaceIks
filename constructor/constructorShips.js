"use strict";

let selectCell = "emplyCell.png";
let shipMapSave = {};
const ySize = 20;
const xSize = 20;
const cellSize = 20;
let backVersionMapShip = {};

//shipMapSave = JSON.parse('{"x0 y0":"armorPlateCell.png","x1 y1":"armorPlateCell.png","x0 y2":"armorPlateCell.png","x0 y3":"armorPlateCell.png","x0 y4":"armorPlateCell.png","x2 y2":"armorPlateCell.png","x2 y3":"armorPlateCell.png","x2 y4":"armorPlateCell.png","x0 y1":"engineLeft.png","x1 y2":"controlBlock.png","x1 y3":"fuelTank.png","x1 y4":"fuelTank.png","x1 y5":"defualtCell.png","x2 y5":"fuelTank.png","x3 y5":"engineTop.png","x6 y5":"engineTop.png","x4 y6":"gun.png","x5 y6":"gun.png","x6 y6":"gunArmor.png","x3 y6":"gunArmor.png","x2 y6":"defualtCell.png","x7 y6":"defualtCell.png","x8 y5":"defualtCell.png","x7 y5":"fuelTank.png","x8 y4":"fuelTank.png","x8 y3":"fuelTank.png","x7 y4":"armorPlateCell.png","x7 y3":"armorPlateCell.png","x7 y2":"armorPlateCell.png","x9 y4":"armorPlateCell.png","x9 y3":"armorPlateCell.png","x9 y2":"armorPlateCell.png","x8 y1":"armorPlateCell.png","x9 y0":"armorPlateCell.png","x9 y1":"engineRight.png","x8 y2":"controlBlock.png","x7 y7":"engineBottom.png","x2 y7":"engineBottom.png","x6 y7":"fuelTank.png","x5 y7":"fuelTank.png","x4 y7":"fuelTank.png","x3 y7":"fuelTank.png","x4 y8":"engineBottom.png","x5 y8":"engineBottom.png","x3 y8":"engineLeft.png","x6 y8":"engineRight.png"}');
//shipMapSave = {"x10 y9":"armorPlateCell.png","x9 y9":"armorPlateCell.png","x10 y10":"armorPlateCell.png","x10 y11":"armorPlateCell.png","x9 y11":"armorPlateCell.png","x8 y9":"armorPlateCell.png","x8 y10":"armorPlateCell.png","x8 y11":"armorPlateCell.png","x9 y10":"fuelTank.png"};
//shipMapSave = {"x7 y12":"armorPlateCell.png","x13 y12":"armorPlateCell.png","x7 y14":"armorPlateCell.png","x11 y12":"armorPlateCell.png","x9 y12":"armorPlateCell.png","x9 y14":"controlBlock.png","x11 y14":"armorPlateCell.png","x11 y13":"defualtCell.png","x9 y9":"fuelTank.png","x11 y9":"defualtCell.png","x9 y15":"defualtCell.png","x11 y15":"engineBottom.png","x9 y10":"armorPlateCell.png","x11 y10":"armorPlateCell.png","x6 y13":"armorPlateCell.png","x13 y13":"engineBottom.png","x7 y13":"defualtCell.png","x13 y11":"armorPlateCell.png","x9 y8":"armorPlateCell.png","x11 y8":"armorPlateCell.png","x6 y12":"defualtCell.png","x7 y10":"armorPlateCell.png","x13 y10":"armorPlateCell.png","x9 y7":"fuelTank.png","x6 y11":"defualtCell.png","x7 y9":"defualtCell.png","x13 y9":"gun.png","x9 y6":"armorPlateCell.png","x11 y6":"armorPlateCell.png","x10 y10":"fuelTank.png","x6 y10":"defualtCell.png","x7 y8":"armorPlateCell.png","x13 y8":"armorPlateCell.png","x11 y5":"defualtCell.png","x10 y9":"armorPlateCell.png","x8 y15":"armorPlateCell.png","x6 y9":"gunArmor.png","x13 y7":"armorPlateCell.png","x9 y4":"controlBlock.png","x11 y4":"armorPlateCell.png","x10 y8":"fuelTank.png","x8 y14":"defualtCell.png","x12 y14":"engineRight.png","x6 y8":"defualtCell.png","x12 y6":"defualtCell.png","x8 y6":"gunArmor.png","x10 y4":"defualtCell.png","x12 y10":"defualtCell.png","x8 y10":"fuelTank.png","x7 y6":"armorPlateCell.png","x13 y6":"armorPlateCell.png","x9 y3":"armorPlateCell.png","x10 y7":"armorPlateCell.png","x8 y13":"gun.png","x12 y13":"armorPlateCell.png","x6 y7":"defualtCell.png","x12 y5":"armorPlateCell.png","x8 y5":"gun.png","x10 y3":"armorPlateCell.png","x12 y9":"gunArmor.png","x8 y9":"armorPlateCell.png","x10 y15":"armorPlateCell.png","x7 y5":"defualtCell.png","x9 y2":"engineTop.png","x10 y6":"gunArmor.png","x8 y12":"gunArmor.png","x12 y12":"defualtCell.png","x6 y6":"defualtCell.png","x8 y4":"defualtCell.png","x10 y2":"engineTop.png","x12 y8":"defualtCell.png","x8 y8":"fuelTank.png","x10 y14":"defualtCell.png","x10 y12":"gunArmor.png","x6 y14":"engineLeft.png","x10 y13":"gun.png","x8 y11":"armorPlateCell.png","x10 y11":"armorPlateCell.png","x5 y13":"engineBottom.png","x12 y11":"defualtCell.png","x5 y12":"armorPlateCell.png","x8 y7":"armorPlateCell.png","x5 y11":"armorPlateCell.png","x5 y10":"armorPlateCell.png","x10 y5":"gun.png","x7 y15":"engineBottom.png","x5 y9":"gun.png","x12 y7":"defualtCell.png","x5 y8":"armorPlateCell.png","x8 y3":"armorPlateCell.png","x5 y7":"armorPlateCell.png","x6 y5":"armorPlateCell.png","x8 y2":"engineTop.png","x5 y6":"armorPlateCell.png","x7 y4":"armorPlateCell.png"};
shipMapSave = {};

function generateCells(ySize, xSize, cellSize, scale, mapObjects) {

    let code = '';
    let cells = xSize * ySize;
    let yRender = 0;
    let xRender = 0;
    let xCoardinats = 0;
    let yCoardinats = 0;
    for (; cells > 0; cells--) {
        if (shipMapSave[`x${xRender} y${yRender}`]) {
            code += `
                    <div style="width: ${cellSize}px; height: ${cellSize}px; background-image: url(img/${shipMapSave[`x${xRender} y${yRender}`]}); background-size: ${cellSize}px; position: absolute; left: ${xCoardinats}px; top: ${yCoardinats}px;" class="x${xRender} y${yRender}"></div>
                `
        } else {
            code += `
                    <div style="width: ${cellSize}px; height: ${cellSize}px; background-image: url(../img/emplyCell.png); background-size: ${cellSize}px; position: absolute; left: ${xCoardinats}px; top: ${yCoardinats}px;" class="x${xRender} y${yRender}"></div>
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

document.querySelector(".menuOfSelect").innerHTML += `
    <div class="armorPlateCell"><img src="../img/armorPlateCell.png" alt="armorPlateCell" height=" 50px;" class="armorPlateCell">Защитная пластина. Прочность 200. Масса 100</div>
    <div class="defualtCell"><img src="../img/defualtCell.png" alt="defualtCell" height=" 50px;" class="defualtCell">Обшивка. Прочность 80. Масса 10</div>
    <div class="fuelTank"><img src="../img/fuelTank.png" alt="fuelTank" height=" 50px;" class="fuelTank">Топливный бак. Прочность 10. При уничтожении наносит 5 урона ближайшим блокам.Масса 100</div>
    <div class="gun"><img src="../img/gun.png" alt="gun" height=" 50px;" class="gun">Оружие.Прочность 100. Урон 200 за выстрел.Масса 70</div>
    <div class="gunArmor"><img src="../img/gunArmor.png" alt="gunArmor" height=" 50px;" class="gunArmor">Боезапас. Прочность 50. При уничтожениее нанаосит ближайшим блокам 200 урона.Масса 80</div>
    <div class="controlBlock"><img src="../img/controlBlock.png" alt="controlBlock" height=" 50px;" class="controlBlock">Командная рубка(лимит 3). Прочность 200. Масса 250. При уничтожении всех командных рубок кораболь самоуничтожается</div>
    <div class="engine"><img src="../img/engineTop.png" alt="engine" height=" 50px;" class="engine">Двигатель. Прочность 50. Масса 25. Тяга 2.5.</div>
    `;

document.querySelector(".constructorMatrice").innerHTML = generateCells(ySize, xSize, cellSize, 0, 1213);
shiftCenterConstructor();

document.querySelector(".constructorMatrice").addEventListener("click", event => {
    if (event.target.style.backgroundImage === 'url("img/emplyCell.png")') {
        event.target.style.backgroundImage = `url(img/${selectCell})`;
        if (selectCell !== "emplyCell.png") {
            shipMapSave[event.target.getAttribute("class")] = selectCell;
        }
    } else {
        event.target.style.backgroundImage = 'url("img/emplyCell.png")';
        delete shipMapSave[event.target.getAttribute("class")];
    }

});

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
        <div class="engineTop"><img src="../img/engineTop.png" alt="engineTop" height=" 50px;" class="engineTop">Двигатель направленный вверх</div>
        <div class="engineRight"><img src="../img/engineRight.png" alt="engineRight" height=" 50px;" class="engineRight">Двигатель направленный вправо</div>
        <div class="engineBottom"><img src="../img/engineBottom.png" alt="engineBottom" height=" 50px;" class="engineBottom">Двигатель направленный вниз</div>
        <div class="engineLeft"><img src="../img/engineLeft.png" alt="engineLeft" height=" 50px;" class="engineLeft">Двигатель направленный влево</div>
    </div>
    `;
    }
    if (!open && document.querySelector(".contextMenuForEngine")) {
        document.querySelector(".contextMenuForEngine").remove();
    }

}

document.querySelector(".menuOfSelect").addEventListener("click", event => {
    console.log(true);
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
});


function getCodeOfSaveMapShip() {
    console.log(JSON.stringify(shipMapSave))
}

function findNumberInString(str) {
    // FORMAT OF IMPUT: STR = x000 y000
    let numbersForReturn = {};
    for (let i = 0; str.length > i; i++) {
        if (12) ;
        if (typeof (parseFloat(str[i])) === "number" && !isNaN(str[i])) {
            if (str[i + 2] === "y") {
                numbersForReturn.x = (Number(str[i]))
            } else if (str[i + 3] === "y") {
                numbersForReturn.x = (Number(str[i] + str[i + 1]));
                i++
            } else if (str[i + 4] === "y") {
                numbersForReturn.x = (Number(str[i] + str[i + 1] + str[i + 2]));
                i += 2
            } else if (str[i + 1] === "y") {
                i++;
            } else if (str[i + 1] === undefined) {
                numbersForReturn.y = (Number(str[i]))
            } else if (str[i + 2] === undefined) {
                numbersForReturn.y = (Number(str[i] + str[i + 1]));
                i += 2;
            } else if (str[i + 3] === undefined) {
                numbersForReturn.y = (Number(str[i] + str[i + 1] + str[i += 2]));
                i += 2;
            }
        }
    }
    return numbersForReturn;
}

function ShiftShip(deviationByX, deviationByY) {
    backVersionMapShip = {};
    for (let key in shipMapSave) {
        backVersionMapShip[key] = shipMapSave[key];

    }
    let setEdition = new Set();
    let arrOriginal = [];
    for (let key in shipMapSave) {
        arrOriginal.push(key);
    }

    let copyOriginalObj = Object.assign({}, shipMapSave);
    for (let key in shipMapSave) {
        let valueProperty = copyOriginalObj[key];
        let coordinates = findNumberInString(key);
        if (coordinates.x - deviationByX < 0) {
            return;
        }
        if (coordinates.y - deviationByY < 0) {
            return;
        }
        shipMapSave[`x${coordinates.x - deviationByX} y${coordinates.y - deviationByY}`] = valueProperty;
        setEdition.add(`x${coordinates.x - deviationByX} y${coordinates.y - deviationByY}`);
    }
    for (let i = 0; i < arrOriginal.length; i++) {
        if (setEdition.has(arrOriginal[i])) {
            delete arrOriginal[i]
        }
    }
    for (let value of arrOriginal) {
        delete shipMapSave[value];
    }

    document.querySelector(".constructorMatrice").innerHTML = generateCells(ySize, xSize, cellSize, 0, 1213)
}

function alignmentShip() {
    let arrXShip = [];
    let arrYShip = [];

    let compareNumeric = function (a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    };

    for (let key in shipMapSave) {
        arrXShip.push(findNumberInString(key).x);
        arrYShip.push(findNumberInString(key).y);
    }


    let deviationByX = arrXShip.sort(compareNumeric)[0];
    let deviationByY = arrYShip.sort(compareNumeric)[0];

    ShiftShip(deviationByX, deviationByY);

    document.querySelector(".constructorMatrice").innerHTML = generateCells(ySize, xSize, cellSize, 0, 1213)
}

function shipDimensions(ship) {
    let arrXShip = [];
    let arrYShip = [];
    let size = {};
    let centerShip = {};
    let compareNumeric = function (a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    };
    for (let key in ship) {
        arrXShip.push(findNumberInString(key).x);
        arrYShip.push(findNumberInString(key).y);

    }

    if (arrXShip.length === 1) {
        size.x = 1;
    } else {
        arrXShip = arrXShip.sort(compareNumeric);
        size.x = [arrXShip[arrXShip.length - 1]] - arrXShip[0] + 1;
    }

    if (arrYShip.length === 1) {
        size.y = 1;
    } else {
        arrYShip = arrYShip.sort(compareNumeric);
        size.y = [arrYShip[arrYShip.length - 1]] - arrYShip[0] + 1;
    }

    centerShip.x = arrXShip[0] + Number((size.x / 2).toFixed(0));
    centerShip.y = arrYShip[0] + Number((size.y / 2).toFixed(0));

    let dateOfReturn = {};
    dateOfReturn.x = size.x
    dateOfReturn.y = size.y
    dateOfReturn.center = {x: centerShip.x, y: centerShip.y,}
    return dateOfReturn;
}

function actionBack() {
    shipMapSave = {};
    for (let key in backVersionMapShip) {
        shipMapSave[key] = backVersionMapShip[key];
    }
    document.querySelector(".constructorMatrice").innerHTML = generateCells(ySize, xSize, cellSize, 0, 1213)
}

function shiftCenterConstructor() {
    let sizeShip = shipDimensions(shipMapSave);
    let shiftX = (xSize / 2).toFixed(0) - sizeShip.center.x;
    let shiftY = (ySize / 2).toFixed(0) - sizeShip.center.y;
    ShiftShip(-shiftX, -shiftY)
}

function closeContructor() {
    document.querySelector(".constructorWindow").style.display = "none";
}

function saveShip() {
    document.querySelector(".blockOfSave").innerHTML = JSON.stringify(shipMapSave);
}

document.querySelector(".shiftTopConstructor").addEventListener("click", () => {
    ShiftShip(0, -1);
});
document.querySelector(".shiftRightConstructor").addEventListener("click", () => {
    ShiftShip(1, 0);
});
document.querySelector(".shiftBottomConstructor").addEventListener("click", () => {
    ShiftShip(0, 1);
});
document.querySelector(".shiftLeftConstructor").addEventListener("click", () => {
    ShiftShip(-1, 0);
});
document.querySelector(".shiftCenterConstructor").addEventListener("click", () => {
    shiftCenterConstructor();
});
document.querySelector(".closeContructor").addEventListener("click", () => {
    closeContructor();
})
document.querySelector(".BTNOFSAVE").addEventListener("click", () => {
    saveShip();
})

closeContructor();



