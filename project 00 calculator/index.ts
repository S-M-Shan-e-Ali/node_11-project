#!usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { add } from "./operation/add.js";
import { sub } from "./operation/sub.js";
import { mul } from "./operation/mul.js";
import { div } from "./operation/div.js";

//
const sleep=()=>{
    return new Promise((res)=>{setTimeout(res, 2000);})
}

async function welcome(){
    let rainbowTitle=chalkAnimation.rainbow('Let start Calculation.');   //start 
    await sleep();
    rainbowTitle.stop();

    console.log(chalk.blueBright(`
     _______________________
    |  ___________________  |
    | |S M SHAN E ALI   O.| |
    | |___________________| |
    |  ___  ___  ___   ___  |
    | | 7 || 8 || 9 | | + | |  
    |  ___  ___  ___   ___  |
    | | 1 || 2 || 3 | | x | |  
    | |___||___||___| |___| |
    |  ___  ___  ___   ___  |
    | | . || 0 || = | | / | |  
    | |___||___||___| |___| |
    |_______________________|


    `));


}

await welcome();

startAgain();



async function askQuestion() {
    const answers:{operator:String,numberTwo:number}= await inquirer.prompt([
        {
            type:"list",
            name:"operator",
            choices:["Addition","Subtraction","Multiplication","Division"],
            message:"Select Operator what you perform \t:",

        },
    ]);
    
    let input1:{numberOne:number};

   do{input1=await inquirer.prompt([
        {
            type:"number",
            name:"numberOne",
            message:"Kindly enter your first number \t: ",
        },
    ])}while(!input1.numberOne);

   let input2:{numberTwo:number};

   do{
    input2=await inquirer.prompt([
        {
            type:"number",
            name:"numberTwo",
            message:"Kindly enter your Second number \t: ",
        },
        ])
   }while(!input2.numberTwo);
    


    let result=0;

    switch(answers.operator){
        case "Addition":{result=add(input1.numberOne,input2.numberTwo)}
        break;
        case "Subtraction":{result=sub(input1.numberOne,input2.numberTwo)}
        break;
        case "Multiplication":{result=mul(input1.numberOne,input2.numberTwo)}
        break;
        case "Division":{result=div(input1.numberOne,input2.numberTwo)}
        break;
    }
   

    console.log(chalk.green("\t\t\tYour result is \t: ", result));

   


}    

    
    
  
   
    
    
async function startAgain() {
    
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Do you want to continue? Press y or n: "
        })
    }while(again.restart=="y" || again.restart=="Y" || again.restart=="yes" || again.restart=="YES")
    
    console.log(chalk.red("\tThank you for using myCalculator"));
}




