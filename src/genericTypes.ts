interface Lengthy {
    length: number
}
class Printer {
    print<T extends Lengthy>(collection: T) {
        console.log('Contains ' + collection.length + ' elements'); 
    }
}

let objPrinter = new Printer();
objPrinter.print({name: 'Nitin', age: 28, length: 7});
let arrPrinter = new Printer();
arrPrinter.print(['4', '5', '6', '9']);
let stringPrinter = new Printer();
stringPrinter.print("Harry Thank you so much!!!");
