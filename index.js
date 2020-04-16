"use strict"

// rules 100000 units === 1m/s

alert(`Привет человек!
Поставь английскую раскладку и насслаждайся игрой !)`);

//BTN EVENTS
//__________________________________________
function checkBtn(key) {
    if (key === "w") {
        vector = 1;
        document.querySelector(".module5").style.backgroundColor = "#f00";
    }

    if (key === "s") {
        document.querySelector(".module2").style.backgroundColor = "#f00";
        vector = -1;
    }

    if (key === "q") {
        enertingZ(20, 100, key);

        document.querySelector(".module1").style.backgroundColor = "#f00";
        document.querySelector(".module6").style.backgroundColor = "#f00";
    }

    if (key === "e") {
        enertingZ(20, 100, key);

        document.querySelector(".module3").style.backgroundColor = "#f00";
        document.querySelector(".module4").style.backgroundColor = "#f00";
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
        enerting(20, 100);
    }
    stateBlock = `<div>X: ${xSpead}</div><div>Y: ${ySpead}</div><div>z position ${zPosition.toFixed(3)}</div><div>z spead ${zSpead.toFixed(3)}</div><div>${fuel}</div><div>${event.key}</div>`;
    fuel -= 0.01;
}

function directionalEffect(z) {

    if (z < 0) {
        z = 180 + (180 + z);
    }

    const angleToSpeed = 0.011111;
    let directionalYSpead, directionalXSpead;
    if (z < 90) {
        if (z < 45) {
            directionalXSpead = z * angleToSpeed;
            directionalYSpead = (90 - z) * -angleToSpeed;
        } if (z === 45) {
            directionalXSpead = 45 * -angleToSpeed;
            directionalYSpead = 45 * -angleToSpeed;
        } if (z > 45) {
            directionalYSpead = (90 - z) * -angleToSpeed;
            directionalXSpead = z * angleToSpeed;
        }
    }
    if (z >= 90 && z < 180) {
        z -= 90;
        if (z < 45) {
            directionalYSpead = z * angleToSpeed;
            directionalXSpead = (90 - z) * angleToSpeed;
        } if (z === 45) {
            directionalYSpead = 45 * angleToSpeed;
            directionalXSpead = 45 * angleToSpeed;
        } if (z > 45) {
            directionalXSpead = (90 - z) * angleToSpeed;
            directionalYSpead = z * angleToSpeed;
        }
    }
    if (z >= 180 && z < 270) {
        z -= 180;
        if (z < 45) {
            directionalXSpead = z * -angleToSpeed;
            directionalYSpead = (90 - z) * angleToSpeed;
        } if (z === 45) {
            directionalYSpead = 45 * angleToSpeed;
            directionalXSpead = 45 * angleToSpeed;
        } if (z > 45) {
            directionalYSpead = (90 - z) * angleToSpeed;
            directionalXSpead = z * -angleToSpeed;
        }
    }
    if (z > 270) {
        z -= 270;
        if (z < 45) {
            directionalYSpead = z * -angleToSpeed;
            directionalXSpead = (90 - z) * -angleToSpeed;
        } if (z === 45) {
            directionalXSpead = 45 * -angleToSpeed;
            directionalYSpead = 45 * angleToSpeed;
        } if (z > 45) {
            directionalXSpead = (90 - z) * -angleToSpeed;
            directionalYSpead = z * -angleToSpeed;
        }
    }

    if (directionalXSpead === undefined) {
        directionalXSpead = 0;
    }
    if (directionalYSpead === undefined) {
        directionalYSpead = 0;
    }

    return {y: directionalYSpead, x: directionalXSpead,};
}

function enerting(mass, engenePoser) {
    let acceleration = ( engenePoser / mass ) / 1000;//evry 1 ms
    const editEnert = directionalEffect(zPosition);

    if (vector === 1) {
        ySpead += acceleration * editEnert.y;
        xSpead += acceleration * editEnert.x;
    }
    if (vector === -1) {
        ySpead += -acceleration * editEnert.y;
        xSpead += -acceleration * editEnert.x;
    }
}

function enertingZ(mass, engenePoser, key) {
    let acceleration = (engenePoser / mass) / 1000;
    if (key === "e") {
        zSpead += acceleration;
    } else {
        zSpead -= acceleration;
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

    if (x > y) {
        // y-a
        // x-b
        angle = Math.atan((y / x)) * 57.2958;

    } else {
        // y-b
        // x-a
        angle = Math.atan((x / y)) * 57.2958;
    }

    if (xValid < 0 && yValid < 0) {
        angle;
    }
    if (xValid > 0 && yValid < 0) {
        angle += 270;
    }
    if (xValid < 0 && yValid < 0) {
        angle += 180;
    }
    if (xValid < 0 && yValid > 0) {
        angle += 90;
    }

   // if (xValid === 0 && yValid === 0) { return }//STOP
    if (xValid === 0 && yValid > 0) {
        angle += 0;
    }
    if (xValid === 0 && yValid < 0) {
        angle += 180;
    }
    if (xValid > 0 && yValid === 0) {
        angle += 270;
    }
    if (xValid < 0 && yValid === 0) {
        angle += 90;
    }

    return angle;

}

// function gravity(xPositionObject, yPositionObject, mass1, mass2) {
//     let distance = Math.sqrt(Math.pow(xPositionObject - xPosition, 2) + Math.pow(yPositionObject - yPosition, 2));//расстояние между центрами масс тел
//     let G = 6.67 * Math.pow(10, -11) * 10 * Math.pow(mass1, -1);// Гравитационная постоянная 6.67 *  10^-11 м3 кг^-1 с^-2
//     let forceGravity = G * ( ( mass1 * mass2 ) / Math.pow(distance, 2) ); //Гравитационная сила
//
//     let course = findingAnglesCoordinates (xPosition, yPosition, xPositionObject, yPositionObject);
//     let accelerationRatio = directionalEffect(course);
//
//     ySpead += forceGravity * accelerationRatio.y;
//
//     xSpead += forceGravity * accelerationRatio.x;
//
//
//     //return {zPosition, forceGravity};
// }
//__________________________________________
//__________________________________________
//__________________________________________


let xSpead = 0;
let ySpead = 0;
let zSpead = 0;
let vector = 0;
let yPosition = 100;
let xPosition = 300;
let zPosition = 0;
let fuel = 100;
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
    document.querySelector(".state").innerHTML = `<div class="stateInfo">X: ${xSpead}</div>
    <div class="stateInfo">Y: ${ySpead}</div>
    <div>z position ${zPosition.toFixed(3)}</div>
    <div>z spead ${zSpead.toFixed(3)}</div>
    <div>${fuel}</div><div>emp</div>`;
}, 200);
//__________________________________________
//__________________________________________
//__________________________________________

//PAYMENT POSITION CYCLE
//__________________________________________
setInterval(() => {

    zPosition += zSpead;
    if (zPosition > 180) {
        zPosition = -179;
    }
    if (zPosition < -180) {
        zPosition = 179;
    }
    yPosition += ySpead;
    xPosition += xSpead;
    document.querySelector(".player").setAttribute("style", `top: ${yPosition}px; left: ${xPosition}px; transform: rotate(${zPosition}deg);`);
}, 10);
//__________________________________________
//__________________________________________
//__________________________________________

//OFF MODULES PLAYER CYCLE
//__________________________________________
setInterval(() => {
    document.querySelector(".module1").style.backgroundColor = "#0f0";
    document.querySelector(".module2").style.backgroundColor = "#0f0";
    document.querySelector(".module3").style.backgroundColor = "#0f0";
    document.querySelector(".module4").style.backgroundColor = "#0f0";
    document.querySelector(".module5").style.backgroundColor = "#0f0";
    document.querySelector(".module6").style.backgroundColor = "#0f0";

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
    fuel -= 0.0001;
}, 10);
//__________________________________________
//__________________________________________
//__________________________________________


//GRAVITY CYCLE
//__________________________________________
// setInterval(() => {
//     gravity(500, 100, 100, 50000000000);
// }, 10)
//__________________________________________
//__________________________________________
//__________________________________________
