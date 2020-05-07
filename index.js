"use strict"

// rules 100000 units === 1m/s

// alert(`Привет человек!
// Поставь английскую раскладку и насслаждайся игрой !)`);

const module1 = document.querySelector(".module1");
const module2 = document.querySelector(".module2");
const module3 = document.querySelector(".module3");
const module4 = document.querySelector(".module4");
const module5 = document.querySelector(".module5");
const module6 = document.querySelector(".module6");
// vector ; 1 = top; 0 = stay; -1 = bottom
//BTN EVENTS
//__________________________________________
function checkBtn(key) {
    if (key === "w") {
        vector = 1;
        module5.style.backgroundColor = "#f00";
    }

    if (key === "s") {
        module2.style.backgroundColor = "#f00";
        vector = -1;
    }

    if (key === "q") {
        enertingZ(MASS, ENGENE_POSER, key);

        module1.style.backgroundColor = "#f00";
        module6.style.backgroundColor = "#f00";
    }

    if (key === "e") {
        enertingZ(MASS, ENGENE_POSER, key);

        module3.style.backgroundColor = "#f00";
        module4.style.backgroundColor = "#f00";
    }

}
//__________________________________________
//__________________________________________
//__________________________________________

//AUDIO EVENTS
//__________________________________________
function playAudio(event) {
    if (event.key !== "w" && event.key !== "s" && event.key !== "q" && event.key !== "e" || setting.mute) {
        return;
    }
    document.querySelector(".audioEngen").play();
}

function stopAudio(event) {
    if (event.key !== "w" && event.key !== "d" && event.key !== "s" && event.key !== "a" && event.key !== "q" && event.key !== "e") {
        return;
    }
    document.querySelector(".audioEngen").pause();
}
//__________________________________________
//__________________________________________
//__________________________________________

//MOVE EVENTS
//__________________________________________

function trakingMove(event) {
    let stateBlock = document.querySelector(".state").innerHTML;

    if (fuel <= 0) {
        stateBlock = "OFF SYSTEM, FUEL EMPLY!";
        return;
    }
    checkBtn(event.key);
    if (event.key === "w" || event.key === "s") {
        enerting(MASS, ENGENE_POSER);
    }
    stateBlock = `<div>X: ${xSpeed}</div><div>Y: ${ySpeed}</div><div>z position ${zPosition.toFixed(3)}</div><div>z speed ${zSpeed.toFixed(3)}</div><div>${fuel}</div><div>${event.key}</div>`;
    fuel -= 0.01;
}

function directionalEffect(z) {

    if (z < 0) {
        z = 180 + (180 + z);
    }

    const angleToSpeed = 0.011111;
    let directionalYSpeed, directionalXSpeed;
    if (z < 90) {
        if (z < 45) {
            directionalXSpeed = z * angleToSpeed;
            directionalYSpeed = (90 - z) * -angleToSpeed;
        } if (z === 45) {
            directionalXSpeed = 45 * -angleToSpeed;
            directionalYSpeed = 45 * -angleToSpeed;
        } if (z > 45) {
            directionalYSpeed = (90 - z) * -angleToSpeed;
            directionalXSpeed = z * angleToSpeed;
        }
    }
    if (z >= 90 && z < 180) {
        z -= 90;
        if (z < 45) {
            directionalYSpeed = z * angleToSpeed;
            directionalXSpeed = (90 - z) * angleToSpeed;
        } if (z === 45) {
            directionalYSpeed = 45 * angleToSpeed;
            directionalXSpeed = 45 * angleToSpeed;
        } if (z > 45) {
            directionalXSpeed = (90 - z) * angleToSpeed;
            directionalYSpeed = z * angleToSpeed;
        }
    }
    if (z >= 180 && z < 270) {
        z -= 180;
        if (z < 45) {
            directionalXSpeed = z * -angleToSpeed;
            directionalYSpeed = (90 - z) * angleToSpeed;
        } if (z === 45) {
            directionalYSpeed = 45 * angleToSpeed;
            directionalXSpeed = 45 * angleToSpeed;
        } if (z > 45) {
            directionalYSpeed = (90 - z) * angleToSpeed;
            directionalXSpeed = z * -angleToSpeed;
        }
    }
    if (z > 270) {
        z -= 270;
        if (z < 45) {
            directionalYSpeed = z * -angleToSpeed;
            directionalXSpeed = (90 - z) * -angleToSpeed;
        } if (z === 45) {
            directionalXSpeed = 45 * -angleToSpeed;
            directionalYSpeed = 45 * angleToSpeed;
        } if (z > 45) {
            directionalXSpeed = (90 - z) * -angleToSpeed;
            directionalYSpeed = z * -angleToSpeed;
        }
    }

    if (directionalXSpeed === undefined) {
        directionalXSpeed = 0;
    }
    if (directionalYSpeed === undefined) {
        directionalYSpeed = 0;
    }

    return {y: directionalYSpeed, x: directionalXSpeed,};
}

function enerting(mass, engenePoser) {
    let acceleration = ( engenePoser / mass ) / 1000;//evry 1 ms
    const editEnert = directionalEffect(zPosition);

    if (vector === 1) {
        ySpeed += acceleration * editEnert.y;
        xSpeed += acceleration * editEnert.x;
    }
    if (vector === -1) {
        ySpeed += -acceleration * editEnert.y;
        xSpeed += -acceleration * editEnert.x;
    }
}

function enertingZ(mass, engenePoser, key) {
    let acceleration = (engenePoser / mass) / 1000;
    if (key === "e") {
        zSpeed += acceleration;
    } else {
        zSpeed -= acceleration;
    }
}
//__________________________________________
//__________________________________________
//__________________________________________

//GRAVITY EVENTS
//__________________________________________
function findingAnglesCoordinates (fromX, fromY, toX, toY) {
    //угол от x1;y1 к x2;y2
    let x = fromX - toX;
    let y = fromY - toY;
    let xValid = x;
    let yValid = y;
    let angle;
    if (x < 0) {
        x *= -1;
    }if (y < 0) {
        y *= -1;
    }

    let XYStatus = {x: false, y: false,};

    // if (x > y) {
        // y-a
        // x-b
        angle = -Math.atan((y / x)) * 57.2958;


    // } else {
    //     // y-b
    //     // x-a
    //     angle = Math.atan((x / y)) * 57.2958;
    // }

    if (xValid > 0 && yValid > 0) {
        angle = (angle - 270) * -1;
        //console.log("1")
    }
    if (xValid > 0 && yValid < 0) {
        angle += 270;
        //console.log("2")
    }
    if (xValid < 0 && yValid < 0) {
       angle = (angle - 90) * -1;
        //console.log("3")
    }
    if (xValid < 0 && yValid > 0) {
        angle += 90;
        //console.log("12")
    }

   // if (xValid === 0 && yValid === 0) { return }//STOP
    if (xValid === 0 && yValid > 0) {
        angle += 0;
        //console.log("4")
    }
    if (xValid === 0 && yValid < 0) {
        angle += 180;
        //console.log("5")
    }
    if (xValid > 0 && yValid === 0) {
        angle += 270;
        //console.log("6")
    }
    if (xValid < 0 && yValid === 0) {
        angle += 90;
        console.log("6")
    }

    if (angle < 0) {
        angle += 0;

    }


    if (document.querySelector(".gravityLine") !== null) {
        document.querySelector(".gravityLine").remove();
    }

    //console.log(angle);

    let code = `
    <div class="gravityLine" style="position: absolute; top: ${yPosition}px; left: ${xPosition}px; width: 5px; height: 200px; background-color: blueviolet; transform: rotate(${angle}deg)" ></div>
    `
    document.body.innerHTML += code;

    return angle;

}

function gravity(xPositionObject, yPositionObject, mass1, mass2) {
    let distance = Math.sqrt(Math.pow(xPositionObject - xPosition, 2) + Math.pow(yPositionObject - yPosition, 2));//расстояние между центрами масс тел
    let G = 6.67 * Math.pow(10, -11) * 10 * Math.pow(mass1, -1);// Гравитационная постоянная 6.67 *  10^-11 м3 кг^-1 с^-2
    let forceGravity = G * ( ( mass1 * mass2 ) / Math.pow(distance, 2) ); //Гравитационная сила

    let course = findingAnglesCoordinates (xPosition, yPosition, xPositionObject, yPositionObject);
    let accelerationRatio = directionalEffect(course);

    ySpeed += forceGravity * accelerationRatio.y;

    xSpeed += forceGravity * accelerationRatio.x;


    //return {zPositionzPosition, forceGravity};
}
//__________________________________________
//__________________________________________
//__________________________________________

function CheckingSphericalHitbox(xSpheres, ySpheres, radiusSpheres, xObject, yObject, sizeObject) {
    let angle = findingAnglesCoordinates(xSpheres, ySpheres, xObject, yObject);
    let distanceBetweenPointSphereObject = Math.sqrt(Math.pow(Math.abs(ySpheres - yObject),2) + Math.pow(Math.abs(xSpheres - xObject),2));
    if (distanceBetweenPointSphereObject < radiusSpheres) {
        xSpeed = 0;
        ySpeed = 0;
    }
}

function planetLandscapeGeneration(xCoordinates, yCoordinates, planetSizes) {
    debugger;
    planetSizes += 200;
    let code = "";
    let angle = 0;
    for (let i = 0; i < 100; i++) {
        angle = i * (360 / 100);
        code += `<div style="width: ${(planetSizes / 2).toFixed(0)}px; height: ${(planetSizes).toFixed(0)}px; background-color: #f00; transform: rotate(${angle}deg); top: ${xCoordinates - (planetSizes / 2).toFixed(0) + 150}px; left: ${yCoordinates - (planetSizes / 4).toFixed(0) }px; position: absolute;"></div>`
    }
    document.body.innerHTML += code;
}

planetLandscapeGeneration(600, 900, 500)

planetLandscapeGeneration(1000, 2000, 500)

let xSpeed = 0;
let ySpeed = 0;
let zSpeed = 0;
let vector = 0;
let yPosition = 100;
let xPosition = 300;
let zPosition = 0;
let fuel = 100;
const MASS = 20;
const ENGENE_POSER = 100000;
let setting = {
    "mute": true,
    "close": true,
    "hiddenHUG": false,
}



document.addEventListener("keydown", trakingMove);
document.addEventListener("keyup", event => {
    if (event.key === "w" || event.key === "s") {
        vector = 0;
    }
});
document.addEventListener("keydown", playAudio);
document.addEventListener("keyup", stopAudio);

//CHECKING STATE SOUND
//__________________________________________
document.querySelector(".muteGame").addEventListener("click", () => {
    if (setting.mute) {
        setting.mute = false;
    } else {
        setting.mute = true;
    }
});
//__________________________________________
//__________________________________________
//__________________________________________

//HIDDEN HUG
//__________________________________________
document.querySelector(".hidenHUG").addEventListener("click", () => {
    if (setting.hiddenHUG) {
        setting.hiddenHUG = false;
        document.querySelector(".infoOfSpaceShipsContainer").style.display = "block";
        document.querySelector(".state").style.display = "flex";
    } else {
        setting.hiddenHUG = true;
        document.querySelector(".infoOfSpaceShipsContainer").style.display = "none";
        document.querySelector(".state").style.display = "none";
    }
});
//__________________________________________
//__________________________________________
//__________________________________________

//OPEN MENU
//__________________________________________
document.addEventListener("keydown", event => {
    if (event.key !== "Escape") {
        return;
    }
        if (setting.close) {
            setting.close = false;
            document.querySelector(".settingGame").style.display = "flex";
        } else {
            setting.close = true;
            document.querySelector(".settingGame").style.display = "none";
        }
});
//__________________________________________
//__________________________________________
//__________________________________________

//RETURN DATA CYCLE
//__________________________________________
setInterval(() => {
    document.querySelector(".state").innerHTML = `<div class="stateInfo">X: ${xSpeed}</div>
    <div class="stateInfo">Y: ${ySpeed}</div>
    <div>z position ${zPosition.toFixed(3)}</div>
    <div>z speed ${zSpeed.toFixed(3)}</div>
    <div>speed ${((ySpeed + xSpeed)/2).toFixed(3)}</div>
    <div>${fuel}</div><div>emp</div>`;
}, 200);
//__________________________________________
//__________________________________________
//__________________________________________

//PAYMENT POSITION CYCLE
//__________________________________________
setInterval(() => {

    zPosition += zSpeed;
    if (zPosition > 180) {
        zPosition = -179;
    }
    if (zPosition < -180) {
        zPosition = 179;
    }
    yPosition += ySpeed;
    xPosition += xSpeed;
    document.querySelector(".player").setAttribute("style", `top: ${yPosition}px; left: ${xPosition}px; transform: rotate(${zPosition}deg);`);
}, 33);
//__________________________________________
//__________________________________________
//__________________________________________

//OFF MODULES PLAYER CYCLE
//__________________________________________
setInterval(() => {
    module1.style.backgroundColor = "#0f0";
    module2.style.backgroundColor = "#0f0";
    module3.style.backgroundColor = "#0f0";
    module4.style.backgroundColor = "#0f0";
    module5.style.backgroundColor = "#0f0";
    module6.style.backgroundColor = "#0f0";

},500)
//__________________________________________
//__________________________________________
//__________________________________________

//DUEL CHECK CYCLE
//__________________________________________

setInterval(() => {
    if (fuel <= 0) {
        document.querySelector(".state").innerHTML = "OFF SYSTEM, FUEL EMPLY!";
        return;
    }
    fuel -= 0.003;
}, 33);
//__________________________________________
//__________________________________________
//__________________________________________


//GRAVITY CYCLE
//__________________________________________
setInterval(() => {
    gravity(900, 600, 100, 999999999999999);
    gravity(2000, 1000, 100, 999999999999999);
    CheckingSphericalHitbox(900, 600, 500, xPosition, yPosition, 20);
    CheckingSphericalHitbox(2000, 1000, 500, xPosition, yPosition, 20);

}, 10)
//__________________________________________
//__________________________________________
//__________________________________________
