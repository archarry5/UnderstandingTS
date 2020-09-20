"use strict";
var e1;
var e2;
function printUnknownEmployee(emp) {
    console.log(emp);
}
printUnknownEmployee({ name: 'Harry', privileges: ['create'], startDate: new Date() });
;
function moveAnimal(animal) {
    var speed;
    switch (animal.kind) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed...' + speed);
}
moveAnimal({ kind: 'bird', flyingSpeed: 8000 });
var errorBag = { 'email': 'Invalid email', 'name': 'Harry' };
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + (b || '').toString();
    }
    return a + (b || 1);
}
add(3);
add('5', '3');
//# sourceMappingURL=advancedTypes.js.map