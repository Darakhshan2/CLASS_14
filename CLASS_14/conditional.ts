// conditional promise
// ranndom genertae num 0.1 - 1  tk koi hb rendom number 
// error name a obj hai is mn hum testing krty hen built in error hai 

const conditionalPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    // randomly choose 
    if (success) {
        resolve("Success!")
    } else {
        reject(new Error("Failure"))
    }
});

conditionalPromise
    //handle  a successful resolution
  .then()

    .catch
// this code randomly log either 



// new  promise     
const sirZia = new Promise((resolve,reject)=>{
   return reject("Failed")
});

// yahan pr check kren gy status
sirZia
.then((status)=>{
    console.log(status)
})
.catch((status)=>{
    console.log(Error , "error");
})



// then or catch hum code an check krty hen 
//resolve or reject banaty hen 


// async ye pora func syn hai jb async chaiye to await chahihe

async function checksirZia(){
    let promiseVal = await  sirZia // is lien ak await ho rha hai isky bad wali line isk wait rky gi 
    console.log(Promise);
}