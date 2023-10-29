#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep=()=>{
    return new Promise((res)=>{setTimeout(res, 2000)})
    }
    
    
    async function welcome() {
        
        let rainbowTitle=chalkAnimation.rainbow('\t\t\tLets Start Quiz System.\n\n');
        await sleep();
        rainbowTitle.stop();

       
    }
    
    await welcome();


    let askName= await inquirer.prompt({
        name:"name",
        type:"input",
        message:"Enter Your Name : "
    })
    console.log(chalk.bold.italic.green("\t\t\tGood Luck! " + askName.name));

    let askconfirm= await inquirer.prompt({
        name:"confirm",
        type:"confirm",
        message:"Start the Quiz : "
    })
    

var Q1="\nQuestion 1 of 5 \n What are the three main 'simple types' in TypeScript?";
var q1a="Boolean, Number, String"; // Right
var q1b="Object, Number, String";
var q1c="Object, Array, Symbol";
var q1d="Array, Object, Boolean";

var Q2="\nQuestion 2 of 5 \n What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?";
var q2a="Explicit";  //right
var q2b="Implicit"
//var q2c="";
//var q2d="";

var Q3="\nQuestion 3 of 5 \n True or False: TypeScript can always correctly infer a variables type.";
var q3a="False"; // Right
var q3b="True";
//var q3c="";
//var q3d="";

var Q4="\nQuestion 4 of 5 \n ______ is similar to 'any', but a safer alternative when uncertain about the type.";
var q4a="never"; 
var q4b="similar";
var q4c="unknown"; //right
//var q4d="";

var Q5="\nQuestion 5 of 5 \n What is the inherited type for the variable example in `const example = ['Dylan']`?";
var q5a="string"; 
var q5b="String[]";   //right
var q5c="any[]";
var q5d="unknown[]";


    if(askconfirm.confirm){

      
        let question= await inquirer.prompt([
            {
                type:"checkbox",
                choices:[q1a,q1b,q1c,q1d],
                name:"q1",
                message:Q1,
                
                
            },
            {
                type:"checkbox",
                choices:[q2a,q2b],
                name:"q2",
                message:Q2,
                
            },
            {
                type:"checkbox",
                choices:[q3a,q3b],
                name:"q3",
                message:Q3,
            },
            {
                type:"checkbox",
                choices:[q4a,q4b,q4c],
                name:"q4",
                message:Q4,
            },
            {
                type:"checkbox",
                choices:[q5a,q5b,q5c,q5d],
                name:"q5",
                message:Q5,
            },
            
            
        ])

    var a:number=0;
    var b:number=0;
    var c:number=0;
    var d:number=0;
    var e:number=0;
        if(question.q1==q1a){
            a=1;
        }
        if(question.q2==q2a){
             b=1;
        }
        if(question.q3==q3a){
             c=1;
        }
        if(question.q4==q4c){
             d=1;
        }
        if(question.q5==q5b){
             e=1;
        }

        var final = a+b+c+d+e;

        console.log(chalk.bold.red.italic ("\n Your TypeScript Result is " + chalk.bold.green.italic (` ${final} of 5 `)));
        
      


    }else { process.exit}
    