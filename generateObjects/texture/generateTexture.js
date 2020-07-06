"use strict";

class CreateTextureSquare {
    constructor(xPosition, yPosition, zPosition, width, height, shading, color) {
        this._xPosition = xPosition;
        this._yPositin = yPosition;
        if (zPosition > 360) {
            this._zPosition = zPosition - 360;
        }
        if (zPosition < 0) {
            this._zPosition = zPosition + 360;
        }
        this._width = width;
        this._height = height;
        this._shading = shading;
        this._color = color
    }

    show(containerCanv) {
        //Takes a canvas as a value and puts a shape into it and creates an id for the container
        /*
         fillRect(x, y, width, height)
        Рисование заполненного прямоугольника.
        strokeRect(x, y, width, height)
        Рисование прямоугольного контура.
        clearRect(x, y, width, height)
        Очистка  прямоугольной области, делая содержимое совершенно прозрачным.
        */
        let cav = containerCanv.getContext('2d');
        if (this._shading) {
            cav.fillRect(0, 0, this._width, this._height,);
            cav.fillStyle = this._color;
        }

    }
}

// import {CreateTextureSquare} from '../../index.js';