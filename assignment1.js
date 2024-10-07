//creating a program that prompts the user to input their score
//implementing the prompt-sync
"use stict";
const jk = require("prompt-sync");
const prompt = jk();
let grade = prompt("Enter your Score : "); //prompt enter the grade
//checking the entered grade using ternary condition
(grade <=71)?console.log("Your equivalent grade is '5.00' Poor")
    :(grade >= 72 && grade <=74)?console.log("Your equivalent Grade is '4.00' poor")
    :(grade >= 75 && grade <=75)?console.log("Your equivalent Grade is '3.00'")
    :(grade >= 76 && grade <= 78)?console.log("Your equivalent Grade is '2.75' Below Average")
    :(grade >= 79 && grade <= 81)?console.log("Your equivalent grade is '2.50' Below Average")
    :(grade >= 82 && grade <= 84)?console.log("Your equivalent Grade is '2.20' Average")
    :(grade >= 85 && grade <= 87)?console.log("Your equivalent Grade is '2.25' Average")
    :(grade >= 88 && grade <= 90)?console.log("Your equivalent Grade is '1.75' Above Average")
    :(grade >= 91 && grade <= 93)?console.log("Your equivalent Grade is '1.50' Above Average")
    :(grade >= 94 && grade <= 96)?console.log("Your equivalent Grade is '1.25' Excellent")
    :(grade >= 97 && grade <= 100)?console.log("Your equivalent Grade is '1.00' Excellent")
    :console.log("Grade is not in the range, input another one"); //invalid mesaage for invalid input

//assigning the final remarks of the grade on the following criteria
if (grade <= 74){
    console.log("FAILED, Needs Improvement");
}else if(grade >=75 && grade <= 79){
    console.log("LOW PASS");
}else if(grade >= 80 && grade <= 89){
    console.log("AVERAGE PASS");
}else{
    console.log("HIGH PASS, Candidate for Cum Laude");
}