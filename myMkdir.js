#!/usr/bin/env node

let fs= require("fs");

// write fs.writeFileSync("a.txt","123")

// make dir fs.mkdirSync("a")

// remove dir fs.rmdirSync("a")

(function (){
    let n= process.argv[2];
    let name= process.argv[3]

    if(!Number.isInteger(+n)|| typeof name != "string" || n<=0){
        console.log("invalid input")
        return;
    }
    try{

    if(fs.existsSync(`${name}- 0`))
    {
        for(let i=0; i<n; i++){
        fs.rmdirSync(`${name}- ${i}`)
            }
    }
    else{
        for(let i=0; i<n; i++){
            fs.mkdirSync(`${name}- ${i}`)
                }
    }
}
catch(err){
    console.log("some error occured")
}


    

})();