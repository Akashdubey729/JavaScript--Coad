//function with optional params

const one = (n1=0, n2=0, n3=0,)=>{
    let result = n1 + n2 + n3;
    console.log( result );
}

one(10);
one(10, 30);
one(10, 20, 30);
one();