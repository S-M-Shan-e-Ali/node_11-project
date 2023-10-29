#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000); });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('\t\t\tLet Start The OOP (Object Oriented Program).\n\n');
    await sleep();
    rainbowTitle.stop();
}
await welcome();
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const person = new Person();
const programmStart = async (person) => {
    do {
        console.log("\nWelcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "\nWhich person would you like to talk..\n",
            choices: ["itSelf", "students"],
        });
        if (ans.select == "itSelf") {
            console.log("\nHello I'm talking itself..");
            console.log("\nI'm very well.");
        }
        if (ans.select == "students") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "\nwhich student would you like to talk..\nPlease Enter Student Name: ",
                name: "student"
            });
            const student = person.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`\nHello  I'm ${name.name}, and I'm fine.`);
                console.log(person.students);
            }
            if (student) {
                console.log(`\nHello I'm ${student.name}, and I'm fine.............`);
                console.log(person.students);
            }
        }
        var again = await inquirer.prompt({
            type: "confirm",
            name: "restart",
            message: "\nDo you want to talk again?? Select y or n: "
        });
    } while (again.restart == true);
    console.log(chalk.green("\nThank you for use OOP (Object Oriented Program)."));
};
programmStart(person);
