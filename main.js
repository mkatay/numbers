import { genrandNumber } from "./genrandNumber.js";
import {compare} from "./compare.js"

let randNr=genrandNumber(1,100)
console.log(randNr);

let result=compare(99,randNr)
console.log(result);

document.querySelector('.checkBtn').addEventListener('click',check)

function check(){
    
}