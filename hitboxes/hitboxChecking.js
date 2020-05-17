"use strict";

let level = [[[[[{"obj": {"width":10,"height":10,"X":100,"Y":100,"positionZ":0,"type":"square"},}]]]]];

function CheckingSphericalHitbox(xSpheres, ySpheres, radiusSpheres, xObject, yObject, sizeObject) {
    let angle = findingAnglesCoordinates(xSpheres, ySpheres, xObject, yObject);
    let distanceBetweenPointSphereObject = Math.sqrt(Math.pow(Math.abs(ySpheres - yObject),2) + Math.pow(Math.abs(xSpheres - xObject),2));
    if (distanceBetweenPointSphereObject < radiusSpheres) {
        xSpeed = 0;
        ySpeed = 0;
    }
}



class HitboxContact {
    constructor (firstObjectID, secondObjectID) {
        this._firstObject = level[firstObjectID.sectorID][firstObjectID.unitID][firstObjectID.subUnitID][firstObjectID.layerChunksID][firstObjectID.congestionChunksID][firstObjectID.ChunksID][firstObjectID];
        this._secondObject = level[secondObjectID.sectorID][secondObjectID.unitID][secondObjectID.subUnitID][secondObjectID.layerChunksID][secondObjectID.congestionChunksID][secondObjectID.ChunksID][secondObjectID];

        if (this._firstObject.type === "square") {
            if (this._secondObject.type === "square") {
                this.contactSquareWithSquare_SS(this._firstObject, this._secondObject);
            }
            if (this._secondObject.type === "circular") {
                this.contactSquareWithCircular_SC(this._firstObject, this._secondObject);
            }
        }

        if (this._firstObject.type === "circular") {
            if (this._secondObject.type === "circular") {
                this.contactSquareWithCircular_SC( this._secondObject, this._firstObject);
            }
            if (this._secondObject.type === "circular") {
                this.contactCircularWithCircular_CC(this._firstObject, this._secondObject);
            }
        }
    }


    contactSquareWithSquare_SS(firstObject, secondObject) {
        if (((firstObject.X + (firstObject.width / 2) >= secondObject.X + (secondObject.width / 2)) && (firstObject.X - (firstObject.width / 2) <= secondObject.X + (secondObject.width / 2))) ||
            (((firstObject.X + (firstObject.width / 2) >= secondObject.X - (secondObject.width / 2)) && (firstObject.X - (firstObject.width / 2) <= secondObject.X - (secondObject.width / 2))))) {
            if (((firstObject.Y + (firstObject.height / 2) >= secondObject.Y + (secondObject.height / 2)) && (firstObject.Y - (firstObject.height / 2) <= secondObject.Y + (secondObject.height / 2))) ||
                (((firstObject.Y + (firstObject.height / 2) >= secondObject.Y - (secondObject.height / 2)) && (firstObject.Y - (firstObject.height / 2) <= secondObject.Y - (secondObject.height / 2))))) {
                console.log("tick")
             }
        }
    }

    contactSquareWithCircular_SC(square, circular) {
        let x1 = square.X + (square.width / 2);
        let y1 = square.Y + (square.height / 2);
        let x2 = square.X - (square.width / 2);
        let y2 = square.Y - (square.height / 2);
        let angle = determinationDirection(circular.X, circular.Y, square.X, square.Y);//угол. От центра круга к квадрату.
        let circularX = directionalEffect(angle).x * (circular.diameter / 2);
        let circularY = directionalEffect(angle).y * (circular.diameter / 2);

        if ((y1 >= circularY) && (y2 >= circularY) && (x1 >= circularX) && (x2 <= circularX)) {
            console.log("tick");
        }
    }

    contactCircularWithCircular_CC(firstObject, secondObject) {
        let distanceBetweenPointSphereObject = Math.sqrt(Math.pow(Math.abs(firstObject.Y - secondObject.Y),2) + Math.pow(Math.abs(firstObject.X - secondObject.X),2));
        if (distanceBetweenPointSphereObject <= ((firstObject.diameter + secondObject.diameter) / 2)) {
            console.log("tick");

        }
    }
}

function determinationDirection(fromX, fromY, toX, toY) {
    let x = toX - fromX;
    let y = toY - fromY;
    console.log(x + " <x y> " + y);

    let angle = -Math.atan((y / x)) * 57.2958;

    if (x === 0 && y > 0) {
        return 0;
    }
    if (x > 0 && y === 0) {
        return 90;
    }
    if (x === 0 && y < 0) {
        return 180;
    }
    if (x < 0 && y === 0) {
        return 270;
    }

    if (x > 0 && y > 0) {
        return 90 + angle;
    }
    if (x > 0 && y < 0) {
        return 180 - angle;
    }
    if (x < 0 && y < 0) {
        return 180 + -angle;
    }
    if (x < 0 && y > 0) {
        return 270 + angle
    }

}

//INDEX.JS

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