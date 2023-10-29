#! usr/bin/env node

import inquirer from "inquirer";
import { Insert,i } from "./Insert.js";
import { show } from "./show.js";
export {Asked}


Asked();

async function Asked() {
    

var askQuestion=await inquirer.prompt({

        type:"list",
        name:"Select",
        choices:["Insert Record","Search Record","Update Record","Delete Record","Show Record","Exit"]
        

})

switch(askQuestion.Select){

    case "Insert Record":
    do{     
            
       await Insert();
       var again=await inquirer.prompt({
        type:"list",
        choices:["\t\t\t\t\t\t\t\t\t  Yes","\t\t\t\t\t\t\t\t\t  No"],
        name:"restart",
        message:"\n\t\t\tDo you want to Insert again?? Select y or n: "

    })
    
    
}while(again.restart=="\t\t\t\t\t\t\t\t\t  Yes")
Asked();
    

    break;

    case "Search Record":
             Search();
    break;

    case "Update Record":
             Update();
    break;

    case "Delete Record":
            Delete();
    break;

    case "Show Record":
        do{         
            await show();
            var again=await inquirer.prompt({
             type:"list",
             choices:["\t\t\t\t\t\t\t\t\t  Yes","\t\t\t\t\t\t\t\t\t  No"],
             name:"restart",
             message:"\n\t\t\tDo you want to Record show again?? Select y or n: "
         })
     }while(again.restart=="\t\t\t\t\t\t\t\t\t  Yes")
     Asked();
    break;


}

}




async function Search() {
    
    console.log("Search")
}

async function Update() {
    
    console.log("Update")
}

async function Delete() {
    
    console.log("Delete")
}
