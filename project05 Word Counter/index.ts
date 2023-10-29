#! usr/bin/env node

import inquirer from "inquirer";

type wordCount =(str: string)=> void;

const wordCount: wordCount =(string)=>{
    const word = string.trim().split(/\s+/g);
    const char=string.replace(/[^a-z]/gi, "").length;
    const space=string.length-char;
    console.log("\nTotal character In The Para\t: " + char)
    console.log("Total word In The Para\t\t: "+ word.length)
    console.log("Total White Space In The Para\t: "+ space);
}

const getInput=async () => {
    const userInput = await inquirer.prompt([
        {
            type:"input",
            name:"para",
            message:"Enter Your Para",
        }
    ]);
    await wordCount(userInput.para)
}

await getInput();