#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\t\t\tLet Start The Text-Based Adventure-Game.\n\n');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
start();
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
async function start() {
    let player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Enter Your Name: "
    });
    let opponent = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select Your Opponent Player",
        choices: ["Skeleton", "Assassin", "Zombie"]
    });
    console.log(chalk.bold.red.italic(player.name) + " VS " + chalk.bold.green.italic(opponent.select));
    // Gather Data
    let p1 = new Player(player.name);
    let o1 = new Player(opponent.select);
    do {
        if (opponent.select == "Skeleton") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "\nLets Play A Game",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            });
            if (ask.opt == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}` + " VS " + `${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                    if (p1.fuel <= 0) {
                        console.log(chalk.redBright.bold.italic("\nYou Losse, Better Luck Next Time"));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}` + " VS " + `${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                    if (o1.fuel <= 0) {
                        console.log(chalk.redBright.bold.italic("\nYou Win!"));
                        process.exit();
                    }
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${p1.fuel}`));
            }
            if (ask.opt == "Run For Your Life..") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
        if (opponent.select == "Assassin") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "\nLets Play A Game",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            });
            if (ask.opt == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}` + " VS " + `${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                    if (p1.fuel <= 0) {
                        console.log(chalk.redBright.bold.italic("\nYou Losse, Better Luck Next Time"));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}` + " VS " + `${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                    if (o1.fuel <= 0) {
                        console.log(chalk.redBright.bold.italic("\nYou Win!"));
                        process.exit();
                    }
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${p1.fuel}`));
            }
            if (ask.opt == "Run For Your Life..") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
        if (opponent.select == "Zombie") {
            let ask = await inquirer.prompt({
                type: "list",
                name: "opt",
                message: "\nLets Play A Game",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."]
            });
            if (ask.opt == "Attack") {
                let num = Math.floor(Math.random() * 2);
                if (num > 0) {
                    p1.fuelDecrease();
                    console.log(`${chalk.bold.red(p1.name)} fuel is ${p1.fuel}` + " VS " + `${chalk.bold.green(o1.name)} fuel is ${o1.fuel}`);
                    if (p1.fuel <= 0) {
                        console.log(chalk.redBright.bold.italic("\nYou Losse, Better Luck Next Time"));
                        process.exit();
                    }
                }
                if (num <= 0) {
                    o1.fuelDecrease();
                    console.log(`${chalk.bold.red(o1.name)} fuel is ${o1.fuel}` + " VS " + `${chalk.bold.green(p1.name)} fuel is ${p1.fuel}`);
                    if (o1.fuel <= 0) {
                        console.log(chalk.redBright.bold.italic("\nYou Win!"));
                        process.exit();
                    }
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion Your fuel is ${p1.fuel}`));
            }
            if (ask.opt == "Run For Your Life..") {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
    } while (true);
}
