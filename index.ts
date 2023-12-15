#!/usr/bin/env node
import inquirer from "inquirer";

const answers:{
    numberOne:number,
    numberTwo:number,
    operator:string
} =await inquirer.prompt([
    {
        type:"number",
        name:"numberOne",
        message:"Kindly Enter Your First Number:"
    },
    {
        type:"number",
        name:"numberTwo",
        message:"Kindly Enter Your Second Number:"
    },
    {
        type:"list",
        name:"operator",
        choices:["Addition(+)","Subtraction(-)","Multiplication(*)","Division(/)"],
        message:"Select operator:"
    }
]);

const {numberOne,numberTwo,operator} =answers

if(numberOne && numberTwo && operator){
    let result:number=0;
    if(operator === "Addition(+)"){
     result=numberOne+numberTwo
     }
     else if(operator === "Subtraction(-)"){
        result=numberOne-numberTwo
     }
     if(operator === "Multiplication(*)"){
        result=numberOne*numberTwo
    }
     if(operator === "Division(/)"){
        result= numberOne/numberTwo
    }
    console.log(`Your result is:${result}`)
}else{
    console.log("kindly enter valid input")
}