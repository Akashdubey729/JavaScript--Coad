console.log("difference between var, let, const");

var a =100;
console.log(a);
a = 200; //value changed
console.log(a);

var a = 900; //re-declaration
console.log(a);

console.log("---using let----");

let b = 300;
console.log(b);
b = 400; //value change
console.log(b);

//let b = 600;//re-declaration - not allowed


console.log("----using const----");
const c = 700;
console.log(c);

c = 800;
console.log(c);

/*
value change
-> var allow to change value
->let allow to change value
->const do not allow to change value

re-declaratio
-> var allow to re-declare
->let and const do not allow to re-declar

scope
 ->var allow global scope (create inside the block and acces outside)
 -> let and const allow block level scope (create inside block and access in block)

*/