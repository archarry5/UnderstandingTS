"use strict";
var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function (collection) {
        console.log('Contains ' + collection.length + ' elements');
    };
    return Printer;
}());
var objPrinter = new Printer();
objPrinter.print({ name: 'Nitin', age: 28, length: 7 });
var arrPrinter = new Printer();
arrPrinter.print(['4', '5', '6', '9']);
var stringPrinter = new Printer();
stringPrinter.print("Harry Thank you so much!!!");
//# sourceMappingURL=genericTypes.js.map