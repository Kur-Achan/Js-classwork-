const intership = true;
const ourPromise = new Promise((resolve, reject) => {

    if(intership){
        resolve('I made it');
    }
    else{
        reject('I will try harder')

    }
});

ourPromise.then((response)=>{
    console.log({response});
    console.log('I will continue working hard');

})
.catch((error)=>{
    console.log({error});
    console.log('I will continue applying for jobs');
})

.finally(()=>{

console.log('I will be a software Engineer');

});



console.log({ourPromise});

async function myAkiraChixDream(){
    console.log('This is my dream');
    await ourPromise;



try{
console.log('Thid is my dream');
await ourPromise;


}

catch{
    console.log('Our dream is not yet valid');
   
}
}

myAkiraChixDream();
//.then()
//.catch
//

//synchronous(Are used to be used line by line)

//Asynchronous(doesn't follow  a line)go together with await
//Are used to return promises

// try ,resolve

//{catch }
//reject



//Asyn-Assignment corrections

async function logMessage(message, delayTime){
    await new Promise(resolve =>   setTimeout(resolve, delayTime));
    console.log(message)
        
    }
logMessage("Be quick" , 1000)


async function getUserData(id){
    return new Promise((resolve, reject) => {
        
    })
}

