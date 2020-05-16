"use strict";

function CheckingSphericalHitbox(xSpheres, ySpheres, radiusSpheres, xObject, yObject, sizeObject) {
    let angle = findingAnglesCoordinates(xSpheres, ySpheres, xObject, yObject);
    let distanceBetweenPointSphereObject = Math.sqrt(Math.pow(Math.abs(ySpheres - yObject),2) + Math.pow(Math.abs(xSpheres - xObject),2));
    if (distanceBetweenPointSphereObject < radiusSpheres) {
        xSpeed = 0;
        ySpeed = 0;
    }
}

class Class {
    
}