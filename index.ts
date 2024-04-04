#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
    name: "pin",
    message: "enter your pin number",
    type: "number"
        }
    ]
);

if(pinAnswer.pin === myPin){
    console.log("correct pin code")

   let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "select option",
                type: "list",
                choices: ["withdraw","check balance","fast cash"]
            }
        ]
    )
    
    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        )
        myBalance -= amountAns.amount
        console.log(`your balance is ${myBalance}`)
    }
    if (operationAns.operation === "check balance"){
        console.log(`your balance is ${myBalance}`)
    }
    if(operationAns.operation === "fast cash"){
        console.log("choose your option")
        var fastcashAns = await inquirer.prompt(
            [
                {
                    name: "opfastcash",
                    message: "select option",
                    type: "list",
                    choices: ["1000","2000","3000"]
                }
            ]
        )
    }
    if (fastcashAns.opfastcash === "1000"){
        myBalance -= fastcashAns.opfastcash
        console.log(`your new balance is ${myBalance}`)
    }
    else if (fastcashAns.opfastcash === "2000"){
        myBalance -= fastcashAns.opfastcash
        console.log(`your new balance is ${myBalance}`)
    }
    else if (fastcashAns.opfastcash === "3000"){
        myBalance -= fastcashAns.opfastcash
        console.log(`your new balance is ${myBalance}`)
    }
}
else{
    console.log("enter correct pin")
}