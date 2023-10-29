import inquirer from "inquirer"
import { Insert, student, } from "./Insert.js"
export{show}

async function show() {
    
    let showAsk=await inquirer.prompt([{
        type:"input",
        name:"record",
        message:"Enter Student Id Number"
    }])


   
 

    for(let i=0; i<student.length; i++){

    
        if(showAsk.record==student[i].id){
            console.log(student[i]);
            

            break;
        }
        
}

}