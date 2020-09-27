function Logger(target: Function) {
    console.log('Logging....');
    console.log(target);
}

//Decorator Factory
function LoggerFactory(logString: string) {
    return function (_target: Function) {
        console.log(logString);
    }
}

@LoggerFactory('Logging - Person')
@Logger
class Person {
    name = 'Max';
    constructor() {
        console.log('Creating Person...' + this.name);
    }
}

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator!!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target:any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method Decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, methodName: string, position: number) {
    console.log('Parameter Decorator');
    console.log(target);
    console.log(methodName);
    console.log(position);
}

class Product {
    @Log
    private _title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid Price');
        }
    }

    constructor(t: string, price: number) {
        this._title = t;
        this._price = price;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}



//decorator with return values
//orig version
// function WithTemplate (template: string, hookId: string) {
//     console.log('Template Factory!!');
//     return function(originalConstructor: any) {
//         console.log('Rendering Template..');
//         const hookEle = document.getElementById(hookId);
//         if (hookEle) {
//             hookEle.innerHTML = template;
//             hookEle.querySelector('h1')!.textContent = p.name;
//         }
//     }
// }

//returning values
function WithTemplate (template: string, hookId: string) {
    console.log('Template Factory!!');
    return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering Template..');
                const hookEle = document.getElementById(hookId);
                if (hookEle) {
                    console.log('all done...');
                    hookEle.innerHTML = template;
                    hookEle.querySelector('h1')!.textContent = this.name;
                }
            }
        }  
    }
}

@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person2 {
    name = 'Max';
    constructor() {
        console.log('Creating Person Object');
    }
}

const p2 = new Person2();
