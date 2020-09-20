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

