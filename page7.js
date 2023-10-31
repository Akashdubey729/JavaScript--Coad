
console.log("nested condition \n");

let age = 35;
let gender = "female";

if( age>=50 ){
    console.log("Old Aged Person, Offer Him The Chair");
    if(gender == "female")
    {
        console.log("Send 1st");
    }
    else{
        console.log("follow the Queue")
    }
}
else{
    console.log("New Aged Person, Please Wait in Queue");
    console.log(" Follow the FIFO Rules")
}