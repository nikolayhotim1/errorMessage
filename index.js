'use strict';
class Robot {
    constructor(name, year, owner) {
        this.name = name;
        this.year = year;
        this.owner = owner;
    }

    reportError() {
        console.log(this.name + ' says ' + this.errorMessage);
    }

    spillWater() {
        this.errorMessage = 'I appear to have a short circuit!';
    }
}

Robot.prototype.maker = 'ObjectsRUs';
Robot.prototype.errorMessage = 'All systems go.';

let robby = new Robot('Robby', 1956, 'Dr. Morbius');
let rosie = new Robot('Rosie', 1962, 'George Jetson');

rosie.reportError(); // Rosie says All systems go.
robby.reportError(); // Robby says All systems go.
robby.spillWater(); // robby.errorMessage = 'I appear to have a short circuit!';
rosie.reportError(); // Rosie says All systems go.
robby.reportError(); // Robby says I appear to have a short circuit!

console.log(robby.hasOwnProperty('errorMessage')); // true
console.log(rosie.hasOwnProperty('errorMessage')); // false
