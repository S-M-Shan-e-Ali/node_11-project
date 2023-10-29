#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\t\t\tLet Start Count Down Timer.\n\n');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
let sec = await inquirer.prompt({
    type: "input",
    name: "count",
    message: "Please Enter your count down time in second"
});
let seconds = sec.count;
const makeIteration = () => {
    console.clear();
    if (seconds > 0) {
        console.log(chalk.green("seconds ") + chalk.red(seconds));
        setTimeout(makeIteration, 1000); // 1 second waiting
    }
    seconds -= 1;
};
setTimeout(makeIteration, 1000); // 1 second waiting
