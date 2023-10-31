
console.log("Nested For Loop \n");
let count = 0
for(let i=1; i<=10; i++)
{   
    count++;
    console.log(i, ":From Outer For Loop");

    for(let j=1; j<=i; j++)
    {
        console.log(j, " : the Inner Loop");
        count++;
    }
    console.log("\n..............................................\n");
}
console.log(count);