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
            if (this._secondObject.type === "square") {
                this.contactCircularWithSquare_CS(this._firstObject, this._secondObject);
            }
            if (this._secondObject.type === "circular") {
                this.contactCircularWithCircular_CC(this._firstObject, this._secondObject);
            }
        }
    }


    contactSquareWithSquare_SS(firstObject, secondObject) {

    }
    contactSquareWithCircular_SC(firstObject, secondObject) {
    }
    contactCircularWithCircular_CC(firstObject, secondObject) {
    }
    contactCircularWithSquare_CS(firstObject, secondObject) {
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