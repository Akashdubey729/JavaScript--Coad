
let customer = [
    {city:"Mumbai", user:['Manoj', 'Prasad', 'Suraj', 'Alex' ] },
    {city:"Bhubanaswer", user:['Akash', 'Patel'] },
    {city:"Pune", user:['Mohit', 'Rohit', 'karan'] }
];

customer.sort().map((info, index)=>{
    console.log(index, "#", info.city );

    for(let i=0; i<info.user.length; i++){
        console.log("\t", info.user[i]);
    }
})