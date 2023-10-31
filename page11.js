
/*
    while loop
    init;
    while( condition )
    {
        statement;
        ++/--
    }
*/

let i=1;
while( i<=20 )
{
    if( i%2==0)
    {
        console.log(i, " - is even no");
    }
    i++;
}


console.log("----------Do While Loop -------------")
let j=1000;
do{
    console.log("The Do Say :", j);
    j++;
}while( j<=10 );