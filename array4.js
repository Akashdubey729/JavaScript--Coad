let user = { fullname: "alex", age: "40 Years", edu: "MCA", city: "Bangalore" };

console.log("The Details \n");
console.log(user.fullname);
console.log(user.age);
console.log(user.edu);
console.log(user.city);

console.log("----Array Of Object----");

let userlist = [
    { fullname: "alex", age: "40 Years", edu: "MCA", city: "Bangalore" },
    { fullname: "amir", age: "45 Years", edu: "MBA", city: "Mumbai" },
    { fullname: "sumit", age: "42 Years", edu: "B.TECH", city: "Pune" },
    { fullname: "ali", age: "49 Years", edu: "M.TECH", city: "Bhubanaswer" },
];

userlist.map((myuser, index) => {
    console.log(index, myuser.fullname, myuser.age, myuser.edu, myuser.city,);
    console.log("------------------------------------------------");
})