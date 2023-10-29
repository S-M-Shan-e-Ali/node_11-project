import inquirer from "inquirer";
import {faker} from "@faker-js/faker";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import { User, createUser } from "./data.js";
export {atmFunc}





// create Atm machine function



const atmFunc = async(user:User)=>{
    
    const ans=await inquirer.prompt
([
         {
            name:"TransactionType",
            type:"list",
            choices:["FastCash","WithDraw","Balance","Exit"],
            message:chalk.green("Select Your Option : "),
        },

])

switch(ans.TransactionType){

    case "FastCash":
            
    const ans1=await inquirer.prompt
([
         {
            name:"FastCash",
            type:"list",
            choices:[2000,5000,10000,20000],
            message:chalk.green("Select Your Transaction Amount : "),
        },

])
            if (ans1.FastCash>=user.balance){

                 console.log(chalk.red("Current balance is insufficient"))
                 
             }else {

             console.log("FastCash Transaction amount is " + ans1.FastCash);
             console.log("Previous Balance :" + user.balance );

             user.balance=user.balance-ans1.FastCash;
             console.log("Remaining Balance :" + user.balance);
             }
        
        atmFunc(user);
    break;
    
    
    case "WithDraw":

    const ans2=await inquirer.prompt
([
         {
            name:"WithDraw",
            type:"input",
            message:chalk.green("Select Your Transaction Amount : "),
        },

])
            if (ans2.WithDraw>=user.balance){

                 console.log(chalk.red("Current balance is insufficient"))
                 
             }else if(ans2.WithDraw>25000){
                console.log(chalk.red("You have Cross Transaction Limits"))
             }else
             
             {

             console.log("FastCash Transaction amount is " + ans2.WithDraw);
             console.log("Previous Balance :" + user.balance );

             user.balance=user.balance-ans2.WithDraw;
             console.log("Remaining Balance :" + user.balance);
             }
        atmFunc(user);
    break;
    
    
    case "Balance":
        console.log("Your Balance is :" + user.balance);
        atmFunc(user);
    
    break;
}


}