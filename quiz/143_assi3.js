const rs =require('readline-sync');
const chalk = require('chalk');

//Starting Greet Portion
console.log(chalk.green.bold("\nWelcome to The Earth Day Quiz Game!!!"));
var playerName = rs.question("Hello What is Your Name :- ");
console.log(chalk.yellow(`${playerName} , Welcome to The Game \n`));

//game check portion
var score = 0;
function gamePlay(questions , A , B , C , D, correctAnswer){
    console.log(chalk.cyanBright(questions));
    console.log("A :"+A);
    console.log("B :"+B);
    console.log("C :"+C);
    console.log("D :"+D);
    var answer  = rs.question(chalk.magenta("Answer in Option : -"));
    if(answer.toUpperCase() == correctAnswer){
        console.log(chalk.green('\tCorrect Answer'));    
        score = score+5;
    }
    else{
        console.log(chalk.red('\tWrong Answer'));    
        if(correctAnswer === "A")
        {
            correctAnswer=A;
        }else if(correctAnswer === "B")
        {
            correctAnswer=B;
        }else if(correctAnswer === "C")
        {
            correctAnswer=C;
        }else if(correctAnswer === "D")
        {
            correctAnswer=D;
        }
        console.log(chalk.greenBright("Correct Answer is: "+correctAnswer));
        score = score-2;
    }
        console.log(chalk.yellowBright('Your score is  :' + score));    
        console.log(chalk.gray('\n--------------------------------------------------------------\n'));    
} 
//creating qus answer 
var one = {
    qus:"When is earth day observed?",
    A:"20 March",
    B:"22 April",
    C:"5 June",
    D:"24 September",
    ans:"B"
};
var two = {
    qus:"When was the first earth day observed?",
    A:"1992",
    B:"2001",
    C:"1970",
    D:"1982",
    ans:"C"
};
var three = {
    qus:"Earth day is an......event.",
    A:"Annual Event",
    B:"Two Year event",
    C:"Three-year event",
    D:"Four-year event",
    ans:"A"
};
var four = {
    qus:"The first Earth Day celebrations took place in......",
    A:"Sweden",
    B:"USA",
    C:"Switzerland",
    D:"Japan",
    ans:"B"
};
var five = {
    qus:"Which is a more appropriate reason to observe the earth day every year?",
    A:"To Support for environmental protection",
    B:"To protect the species",
    C:"To save the ozone layer",
    D:"None of the above",
    ans:"A"
};
//calling function
qusArray = [one,two,three,four,five];
for(let i =0 ; i<qusArray.length;i++){
    gamePlay(qusArray[i].qus,qusArray[i].A,qusArray[i].B,qusArray[i].C,qusArray[i].D,qusArray[i].ans);
}
console.log(chalk.yellow('\n=====  Your Final score is  : ' + score + "=====\n"));  