
let itemlist = [ "Mouse", "printer", "Keyboard" , "Scanner", "Mobile", "laptop"];

console.log("using For Loop\n");
for(let i=0; i<itemlist.length; i++)
{
    console.log("the For Say : ", itemlist[2] );
}


    console.log("\n using While Loop \n");

    let i=0;
    while( i<itemlist.length){
        console.log("the while say ; ",itemlist[i] );
        i++;
    }


    console.log("\n using map() as listing function\n");

    itemlist.map( function(value, index){
        console.log(value,"===========",index);
    })


    console.log("the map() most used method\n");
    itemlist.map((x, y)=>{
        console.log(x, "================", y);
    })



    console.log("\n using forEach() \n");
    itemlist.forEach((itemname, index)=>{
        console.log( index, " ----------- ", itemname);
    });


    console.log(" -----------using forEach 2nd Method---------");
    itemlist.forEach( function(itemname, index){
        console.log( index, " ----------- ", itemname);
    });