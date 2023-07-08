// import { merveille } from "./main";

const x : number = Math.random()*15;
console.log(x);
const y : number = Math.ceil(Math.random()*15)+5;
console.log(y);
console.log(randomiser(56));
console.log(btwnRandomiser(6,10));


//this function is specifically to generate numbers randomly from 1 up to but excluding the number

 function randomiser(p:number) : number {
    const c = Math.floor(Math.random()*(p));
 return c;
}

function btwnRandomiser(s:number,e:number):number {
    const d = Math.floor(Math.random()*(e-s+1)) + s;
    return d;
}

