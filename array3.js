let itemlist = [ "Mouse", "Printer", "Keyboard" , "Scanner", "Mobile", "Laptop"];

itemlist.reverse().map((itemname, index)=>{
    console.log(index ,".", itemname);
})

console.log("-------------ascending order-----------------");

itemlist.sort().map((itemname, index)=>{
    console.log(index ,".", itemname);
})

console.log("--------------descinding order----------------");

itemlist.sort().reverse().map((itemname, index)=>{
    console.log(index ,".", itemname);
})