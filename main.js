var x = Math.random() * 15;
console.log(x);
// const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

var y = Math.ceil(Math.random() * 15) + 5;
console.log(y);
console.log(randomiser(56));
console.log(btwnRandomiser(6, 10));
//this function is specifically to generate numbers randomly from 1 up to but excluding the number
 let uname = document.querySelector('#un');
 let email = document.querySelector('input[type=email]');
 let password = document.querySelector('input[type=password]');
let form = document.querySelector('#theform');
let Header1 = document.querySelector(".h1");
let Header2 = document.querySelector(".h11");
let username = document.querySelector('h1.username');   
let nameHolder = document.querySelector('h1 span.nameholder');
function randomiser(p) {
    var c = Math.floor(Math.random() * (p));
    return c;
}
function btwnRandomiser(s, e) {
    var d = Math.floor(Math.random() * (e - s + 1)) + s;
    return d;
}

function nameinitial(name){
    let slitter = name.split(' ');
    let slit=[];
   for(let i = 0; i<slitter.length; i++){
        if(slitter[i]!== ''){
            slit.push(slitter[i]);
        }else{
            continue
        }
    }
    let char = slit[1]?slit[1].charAt(0):'';
    return     (slit[0].charAt(0) + char).toUpperCase();

}
const normal=/(?:script|SCRIPT)/g;
const regx = /^\<{1,}(script|SCRIPT)(?:async|charset|defer|src|type)\>\<\/\1[(?:\w)|\>{1,}]\w$/;
function regex(word){
    // const reg = new RegExp('/^\<{1,}(script|SCRIPT)\>*$/g');
    const response = normal.test(word.value);
    if(response == true){
        Header1.textContent = ' Sorry!!!  your name contains malicious code.';
        console.log(response);
        return
    }else{
        Header1.style.display =  `block`;
        nameHolder.textContent = ` ${word.value}`;
        username.style.display = `block`;
        username.textContent = nameinitial(word.value);
    }
        form.reset();
    return
}
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    regex(uname);
});
