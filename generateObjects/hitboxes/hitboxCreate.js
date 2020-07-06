"use strict";

//ВСЕ В МАССИВ HITBOXCREATE. MODEL: NEW HITBOX.CREATE

//CreateSquareHitboxModels

class SetCoordinates {
    setPositionX(x) {
        this._positionX = x;
    }

    setPositionY(y) {
        this._positionY = y;
    }

    setPositionZ(z) {
        this._positionZ = z;

        if (this._positionZ >= 360) {
            this._positionZ -= 360;
        }

        if (this._positionZ < 0) {
            this._positionZ += 360;
        }
    }
}

class EditCoordinates extends SetCoordinates {
    editPositionX(x) {
        this._positionX += x;
    }

    editPositionY(y) {
        this._positionY += y;
    }

    eidtPositionZ(z) {
        this._positionZ += z;

        if (this._positionZ >= 360) {
            this._positionZ -= 360;
        }

        if (this._positionZ < 0) {
            this._positionZ += 360;
        }
    }
}

class ConclusionCoordinates extends EditCoordinates {
    get x() {
        return this._positionX;
    }

    get y() {
        return this._positionY;
    }

    get z() {
        return this._positionZ;
    }
}

class Square extends ConclusionCoordinates {
    constructor(width, height, positionX, positionY, positionZ) {
        super();
        this._width = width;
        this._height = height;
        this._positionX = positionX;
        this._positionY = positionY;
        this._positionZ = positionZ;
        this.type = "square";
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    editWidth(units) {
        this._width += units;
    }

    editHeight(units) {
        this._width += units;
    }


    setWidth(units) {
        this._width = units;
    }

    setHeight(units) {
        this._width = units;
    }

}

class Circular extends ConclusionCoordinates {
    constructor(diameter, positionX, positionY, positionZ) {
        super();
        this._diameter = diameter;
        this._positionX = positionX;
        this._positionY = positionY;
        this._positionZ = positionZ;
        this.type = "circular";
    }

    get diameter() {
        return this._diameter;
    }

    editDiameter(units) {
        this._diameter += units;
    }

    setDiameter(units) {
        this._diameter = units;
    }
}

let Hitbox = {};

Hitbox.create = {
    "square": Square,
    "circular": Circular,
};

// import {Hitbox.create} from '../../index.js';