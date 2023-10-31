
console.log("the scope of variable");

let x = 500;
const y = 300;

if( 50 > 20)
{
    var a = "banglore";
    let b = "mumbai";
    const c = "pune";

    console.log(x);
    console.log(y);
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log("out of block");
console.log(a);// till printing....


console.log(b);
console.log(c);
