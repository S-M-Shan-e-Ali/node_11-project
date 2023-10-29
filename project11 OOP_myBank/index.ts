#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { faker } from '@faker-js/faker'

const sleep = () => {
    return new Promise((res) => { setTimeout(res, 2000) })
}


async function welcome() {

    let rainbowTitle = chalkAnimation.rainbow('\t\t\tLet Start OOP_myBank.\n\n');
    await sleep();
    rainbowTitle.stop();
}

await welcome();

// customer class
class Customer {
    firstName: string
    lastName: string
    age: number
    gender: string
    mobNumber: number
    accNumber: number

    constructor(fName: string, lName: string, age: number, gender: string, mob: number, acc: number) {
        this.firstName = fName
        this.lastName = lName
        this.age = age
        this.gender = gender
        this.mobNumber = mob
        this.accNumber = acc
    }
}

//interface BankAccount
interface BankAccount {
    accNumber: number,
    balance: number,

}

//class Bank
class Bank {
    customer: Customer[] = []
    account: BankAccount[] = []

    addCustomer(obj: Customer) {
        this.customer.push(obj)
    }

    addAccountNumber(obj: BankAccount) {
        this.account.push(obj)
    }

    transaction(accobj: BankAccount) {
        let NewAccounts = this.account.filter(acc => acc.accNumber !== accobj.accNumber);
        this.account = [...NewAccounts, accobj];
    }
}

let myBank = new Bank();

//customer Creater

for (let i = 1; i <= 3; i++) {
    let fName = faker.person.firstName('male');
    let lName = faker.person.lastName();
    let num = parseInt(faker.phone.number());
    const cus = new Customer(fName, lName, 25 * i, "male", num, 1000 + i)
    myBank.addCustomer(cus);
    myBank.addAccountNumber({ accNumber: cus.accNumber, balance: 100 * i })
}


//Bank functionality

async function bankService(bank: Bank) {
    let service = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Please Select the Service",
        choices: ["View Balance", "Cash Withdraw", "Cash Deposit"]
    })


    //view Balance

    if (service.select == "View Balance") {

        let res = await inquirer.prompt({
            type: "input",
            name: "num",
            message: "Please Enter your Account Number: "
        })

        let account = myBank.account.find((acc) => acc.accNumber == res.num)

        if (!account) {
            console.log(chalk.red.bold("Invalid Account Number"));

        }
        if (account) {

            let name = myBank.customer.find((item) => item.accNumber == res.num)


            console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} your Account Balance is ${chalk.bold.blueBright(`$${account.balance}`)}`)
        }
    }

    // Cash Withdraw
    if (service.select == "Cash Withdraw") {

        let res = await inquirer.prompt({
            type: "input",
            name: "num",
            message: "Please Enter your Account Number: "
        });


        let account = myBank.account.find((acc) => acc.accNumber == res.num)


        if (!account) {
            console.log(chalk.red.bold("Invalid Account Number"));

        }

        if (account) {
            let ans = await inquirer.prompt({
                type: "number",
                message: "Please Enter your amount.",
                name: "rupee",
            });

            let newBalance = account.balance - ans.rupee

            //transaction method

            bank.transaction({ accNumber: account.accNumber, balance: newBalance });


        }


    }

    // Cash Deposit
    if (service.select == "Cash Deposit") {

        let res = await inquirer.prompt({
            type: "input",
            name: "num",
            message: "Please Enter your Account Number: "
        });


        let account = myBank.account.find((acc) => acc.accNumber == res.num)


        if (!account) {
            console.log(chalk.red.bold("Invalid Account Number"));

        }

        if (account) {
            let ans = await inquirer.prompt({
                type: "number",
                message: "Please Enter your amount.",
                name: "rupee",
            });

            if (ans.rupee > account.balance) {

                console.log(chalk.red.bold("Mojuda balance nakaafi hai...."))
            }

            let newBalance = account.balance - ans.rupee

            //transaction method call

            bank.transaction({ accNumber: account.accNumber, balance: newBalance });

        }




    }

}

bankService(myBank);