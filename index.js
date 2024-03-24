#! /usr/bin/env node
import inquirer from "inquirer";
/*
1) generate random number by computer
2) ask user to guess
3) check if its correct or not
*/
//1
// (generating random numbers)
const randno = Math.floor(Math.random() * 6);
// math.random give decimal ones. so we ant integer ones. so we call math.floor() to round of math.random. rounds to lower number.
// now we will get just 0 as random generation is between 0-10
//so now we * our random value with some number (that generates the range we want to keep.) (the answer is between range 0-x)
// if we want to eliminate 0 we can add 1 [Math.floor(Math.random() * 10)] now range is 0-10
// if we want to eliminate 0 we can add 1 [Math.floor(Math.random() * 10+1)] now range is 1-10
// if we want to eliminate 0 we can add 1 [Math.floor(Math.random() * 10+2)] now range is 2-10
//2
// (taking input through inquirer prompt)
// await for late answer to variable
// taking inputs in array
// list in array is taken in through object {}.
let answers;
answers = 3;
while (answers.userguessnumber != randno) {
    answers = await inquirer.prompt([
        {
            name: "userguessnumber",
            type: "number",
            message: "Please guess a number between 0-6!",
        },
    ]);
    //3
    if (answers.userguessnumber === randno) {
        console.log("Congratulations! You guessed Right.");
    }
    else {
        console.log("Sorry!, could've done better.");
    }
}
console.log(answers);
