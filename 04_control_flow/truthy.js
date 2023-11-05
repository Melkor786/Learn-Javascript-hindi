const userEmail = []

if(userEmail){
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
}

// falsy value
// false, 0, -0, BigInt 0n, null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function (){}

if(userEmail.length===0){
    console.log("Array is Empty");
}

const emptyObj = {}

if(Object.keys){
    console.log("Object is Empty");
}

// false == 0   => true
// false == ''  => true
// 0 == ''      => true

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5??10;//5
val1 = null??10;//10
val1 = undefined??10;//10
val1 = undefined??1??10;//1
// console.log(val1);

// Ternery Operator
// (if expression is true)?(assign this):(else this)
