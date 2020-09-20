"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(target) {
    console.log('Logging....');
    console.log(target);
}
//Decorator Factory
function LoggerFactory(logString) {
    return function (_target) {
        console.log(logString);
    };
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Max';
        console.log('Creating Person...' + this.name);
    }
    Person = __decorate([
        LoggerFactory('Logging - Person'),
        Logger
    ], Person);
    return Person;
}());
//# sourceMappingURL=decorators.js.map