var myName = 'Max';
console.log(myName);

myName = "Manu";
console.log(myName);

function printName(name){
    console.log(name);
}
printName('Max');

const printHiName = (name) => {
    console.log("Hi " + name);
}
printHiName("Nik");

const person = {
    name: 'Max'
}

export default person;

export const clean () => {...}

export const baseData = 10;

/*
For import for person can do:
    1) import person from './person.js'
    2) import prs from './person.js'

For import for clean and baseData can only do:
    1) import{clean} from '.utility.js'
        - or import{clean as cl} from '.utility.js'
    2) import{baseData} from '.utility.js'
    3) import * as bundled from '.utility.js'

*/

// Spread Operator
const numbers = [1,2,3];
const newNumbers = [...numbers, 4, 5]; // [1,2,3,4,5]

//rest operator
const filter = (...args) =>{
    return args.filter(x => x===1);
}
