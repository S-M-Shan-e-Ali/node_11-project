import inquirer from "inquirer";
import {faker} from "@faker-js/faker";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import { User, createUser } from "./data.js";
import { atmFunc } from "./atmfunction.js";
export {atmMachine}




//create Atm machine engine.

const atmMachine=async (users:User[])=>
{
         var res = await inquirer.prompt([
            {
                name:"userPin",
                type:"input",
                message: chalk.green("\nPlease Enter your 4 digit PIN\t: "),
            },
        ])
           
        var user=users.find((val)=>val.pin == res.userPin);
        
            if(user){
            console.log("\nThank you for Login SMSALI Bank")    
            console.log(`\nYour Account Name\t: ${user.name}  \nYour Account Number\t: ${user.accountNumber}\n`);
                 atmFunc(user);
                 return;
            } else
             console.log(chalk.red("\t\t\nInvalid User PIN"));
             
             var res= await inquirer.prompt([
                  {
                    name:"repet",
                    type:"list",
                    choices:["\t\tTry Again","\t\tExit"],
                    message:"\nWhat Do You Want\t: ",
                       
                },
                            
            ])
            if(res.repet){
                atmMachine(users);
            }

        
        
}