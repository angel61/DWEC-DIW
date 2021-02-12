 const addToArrray=(data,array)=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
            array.push(data);
            resolve(array);
         },1000);
         if(!array){
             reject(new Error("No existe el array"));
         }
     })
 }

 console.log("Trabajando promesas");
 const array=[1,2,3];

 console.log("Uno");
 addToArrray(4,array).then(()=>{
     console.log(`${array}\nFin de las promesas`);
 });

 console.log("Dos");
 addToArrray(5,array).then(addToArrray(6,array).then(()=>{
    console.log(`${array}\nFin de las promesas`);
}));