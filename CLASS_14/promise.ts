// let sirZiaPromise = new Promise(()=>"");  // pending state 


// example of return func
function makenewPizza(){
    return 'Your pizza is being  prepared'
}
let sirPizza = makenewPizza();
console.log(sirPizza , "table 1");


// arrow funct
let makePIzza = () => "Your pizza is being prepared"
console.log(makePIzza());

//return ko hire krenyg jb block lagaen gy 
let Makepizza = () =>{
    return "your fries is prepared"
}
console.log(makePIzza());


// Promises             (resolve) 
// has 3 stateus pending fullfill 
// promise strt hota hia to pending ki state mn chala jata hai 
// promise ky object mn 
// promise created by using keyword promise
// new keyword is used to create copy of another copy
// then ka kam ye hai ky promise ki state fullfill hai to ye hamary message ko print rkwae ga 

let helloPromise = new Promise ((resolve) => {
     setTimeout(()=>{
        resolve("Hello darakhshan ")
     },2000)
})
helloPromise.then((message)=>{
    console.log(message);
})


//  then resolve ki conditional pr chaly ga 
// catch reject pr chaljata hia 































