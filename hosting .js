
// Hoisting 

//  var salary= 1000;
//         function first(){
//             console.log("My salary is "+ salary);
//             var salary = 5000;
//             console.log("My salary is "+ salary);
//         }







// Call Back Functions:

// first()

// firstFunction()
// function firstFunction(){
//     var a = 10;
//     console.log("This is called hoisting")
// }

// console.log(a)

function execute(a,b,cb){
    var result = a+b;
    cb(result)

}
execute(5,10,function(resultData){
   console.log(resultData/2)
})


function execute(a,b,cb){
    var result = a+b;
   setInterval(function(){
    cb(result)
   })

}
execute(5,10,function(resultData){
   console.log(resultData/2)
})




