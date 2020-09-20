//intersection types
type Employee = {
    name: String;
    startDate: Date;
};

type Admin = {
    name: String;
    privileges: String[]
}

type ElevatedEmployee = Employee & Admin;
type UnknownEmployee = Employee | Admin;

let e1 : ElevatedEmployee;
let e2 : UnknownEmployee;

function printUnknownEmployee(emp: UnknownEmployee) {
    console.log(emp);
} 

printUnknownEmployee({name: 'Harry', privileges: ['create'], startDate: new Date()});

//discriminated unions

interface Bird {
    kind: 'bird';
    flyingSpeed: number;
};

interface Horse {
    kind: 'horse';
    runningSpeed : number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed: number;
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
moveAnimal({kind: 'bird', flyingSpeed: 8000});


//index properties
interface ErrorContainer {      //for var num of key value pairs in the object
    [prop: string]: string;
}


const errorBag : ErrorContainer = {'email': 'Invalid email', 'name': 'Harry'};

//function overload
type Combinable = number | string;
function add(n: number): number
function add(a:number, b?:number): number;
function add(a:string, b?: string) : string 
function add (a:Combinable, b?:Combinable){
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + (b || '').toString();
    }
    return a+(b || 1);
}
add(3);
add('5', '3');