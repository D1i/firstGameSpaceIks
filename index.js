"use strict"

// rules 100000 units === 1m/s

//alert(`Привет человек!
//Поставь английскую раскладку и насслаждайся игрой !)`);

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

function checkBtn(key) {
    if (key === "w") {
        vector = 1;
        document.querySelector(".module5").style.backgroundColor = "#f00";
    }

    if (key === "d") {
        //xSpead++;
    }

    if (key === "a") {
        //xSpead--;
    }

    if (key === "s") {
        document.querySelector(".module2").style.backgroundColor = "#f00";
        vector = -1;
    }

    if (key === "q") {
        //if (z === -180) {
        //    z = 180;
        //}
        zSpead -= 0.01;

        document.querySelector(".module1").style.backgroundColor = "#f00";
        document.querySelector(".module6").style.backgroundColor = "#f00";
    }

    if (key === "e") {
        // if (z === 180) {
        //     z = -180;
        // }
        zSpead += 0.01;
        document.querySelector(".module3").style.backgroundColor = "#f00";
        document.querySelector(".module4").style.backgroundColor = "#f00";
    }

    return null;
}

function trakingMove(event) {
    if (fuel <= 0) {
        document.querySelector(".state").innerHTML = "OFF SYSTEM, FUEL EMPLY!";
        return;
    }
    checkBtn(event.key);
    if (event.key === "w" || event.key === "s") {
        enerting(100, 1);
    }
    document.querySelector(".state").innerHTML = `<div>${xSpead}</div><div>${ySpead}</div><div>z position ${zPosition.toFixed(3)}</div><div>z spead ${zSpead.toFixed(3)}</div><div>${fuel}</div><div>${event.key}</div>`;
    fuel -= 0.01;
}

function playAudio(event) {
    if (event.key !== "w" && event.key !== "d" && event.key !== "s" && event.key !== "a" && event.key !== "q" && event.key !== "e" || setting.mute) {
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
        console.log()
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

    return {y: directionalYSpead, x: directionalXSpead,};
}

function enerting(mass, engenePoser) {
    let acceleration = engenePoser / mass;
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

setInterval(() => {

    document.querySelector(".state").innerHTML = `<div class="stateInfo">${xSpead}</div><div class="stateInfo">${ySpead}</div><div>z position ${zPosition.toFixed(3)}</div><div>z spead ${zSpead.toFixed(3)}</div><div>${fuel}</div><div>emp</div>`;


}, 200);

setInterval(() => {
    //enert traking

    zPosition += zSpead;
    if (zPosition > 180) {
        zPosition = -179;
    }
    if (zPosition < -180) {
        zPosition = 179;
    }
    //document.querySelector(".player").setAttribute("style", `transform: rotate(${zPosition}deg);`) // DEL
    yPosition += ySpead;
    xPosition += xSpead;
    //debugger;
    document.querySelector(".player").setAttribute("style", `top: ${yPosition}px; left: ${xPosition}px; transform: rotate(${zPosition}deg);`);
}, 10);

setInterval(() => {
    document.querySelector(".module1").style.backgroundColor = "#0f0";
    document.querySelector(".module2").style.backgroundColor = "#0f0";
    document.querySelector(".module3").style.backgroundColor = "#0f0";
    document.querySelector(".module4").style.backgroundColor = "#0f0";
    document.querySelector(".module5").style.backgroundColor = "#0f0";
    document.querySelector(".module6").style.backgroundColor = "#0f0";

},500)

setInterval(() => {
    if (fuel <= 0) {
        document.querySelector(".state").innerHTML = "OFF SYSTEM, FUEL EMPLY!";
        return;
    }
    fuel -= 0.0001;
}, 10);

document.addEventListener("keydown", trakingMove);
document.addEventListener("keyup", event => {
    if (event.key === "w" || event.key === "s") {
        vector = 0;
    }
});
document.addEventListener("keydown", playAudio);
document.addEventListener("keyup", stopAudio);
document.querySelector(".muteGame").addEventListener("click", () => {
    if (setting.mute) {
        setting.mute = false;
    } else {
        setting.mute = true;
    }
    //console.log(setting.mute)
});
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
    //console.log(setting.hiddenHUG)
});
document.addEventListener("keydown", event => {
    //console.log("aaa")
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
