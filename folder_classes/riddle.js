// import rr1 from '../folder_riddle/r1.js'
import readlineSync from 'readline-sync'


export default class Riddle{
    constructor({id,name,taskDescription,correctAnswer}){
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.corectAnswer = correctAnswer;
    }
    ask(){
        console.log(this.taskDescription); 
        let input = readlineSync.question('enter your answer: ')
        while(this.corectAnswer != input){
            console.log(" Wrong answer"); 
            console.log(this.taskDescription); 
            input = readlineSync.question('enter your answer: '); 
        }
        console.log("is grate! corect answer!!"); 
        
    }
}

// const res = new Riddle(rr1)
// console.log(res);
