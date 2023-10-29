#! usr/bin/env node
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import { createUser } from "./options/data.js";
import { atmMachine } from "./options/machine.js";
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Welcome to come SMSALI Bank ATM.'); //start 
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.blueBright(`
     _______________________________
    |  ___________________________  |
    | |S M SHAN E ALI             | |
    | |                           | |
    | |         Welcome           | |
    | |           to              | |
    | |       SMSALI BANK         | |
    | |          ATM              | |
    | |___________________________| |
    |  ___  ___  ___   ___________  |
    | | 7 || 8 || 9 | | Clear     | | 
    | |___||___||___| |___________| | 
    |  ___  ___  ___   ___________  |
    | | 1 || 2 || 3 | | Exit      | |  
    | |___||___||___| |___________| |
    |  ___  ___  ___   ___________  |
    | |   || 0 ||   | | Enter     | |  
    | |___||___||___| |___________| |
    |_______________________________|


    `));
}
await welcome();
const users = createUser();
console.log(users);
atmMachine(users);
