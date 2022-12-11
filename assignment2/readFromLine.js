const readline=require("readline")

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Please Enter Your name",(name)=>{
    console.log("Hello ",name);
    rl.close();
})