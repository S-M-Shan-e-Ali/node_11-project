#! usr/bin/env node

import inquirer from "inquirer"

let Currency=[
       'PKR',       //Pakistani
       'USD',       //US Dollar
       'GBP',       //British Pound
       'SAR',       //Saudi Riyal
      
]
// Pakistani one Rupees 
let Conversion={

"PKR":{
                                                    
        "PKR":1,                  
        "USD":332,                               
        "GBP":411.55,                 
        "SAR":86.35,              
                  
},

// USD one Dollar 
"USD":{
    "PKR":332,                  
    "USD":1,                               
    "GBP":0.815,                 
    "SAR":3.883,              
},       

// GBP onE 
 "GBP":{
                                                    
    "PKR":411.550,                  
    "USD":1.252,                               
    "GBP":1,                 
    "SAR":4.813,              
 },       
    
// SAR one 
"SAR":{                                             
    "PKR":86.350,                  
    "USD":0.263,                               
    "GBP":0.212,                 
    "SAR":1,              
       
},

}
        const answer:{
            from:"PKR" | "USD" | "GBP" | "SAR",
            to:"PKR" | "USD" | "GBP" | "SAR",
            amount:number,
        }= await inquirer.prompt([
            
            {
                name:"from",
                type:"list",
                choices:Currency,
                message:"Select Your Currency :"

            },
            {
                name:"to",
                type:"list",
                choices:Currency,
                message:"Select Your Conversion Currency :"

            },
            {
                name:"amount",
                type:"number",
                message:"Enter Your Currency Amount :"
                

            },
            

            
        ])


        const {from, to, amount}=answer;

        if(from && to && amount){
            let result=Conversion[from][to]*amount;
            console.log(`Your conversion from ${from} to ${to} is ${result}`);
        
        }else{
            console.log("Invalid Inputs")
        }

   