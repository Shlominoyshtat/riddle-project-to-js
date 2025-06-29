import Player from "./folder_classes/player.js";
import Riddle from "./folder_classes/riddle.js";
import _import from "./folder_riddle/import.js";
import readlineSync from 'readline-sync'


// console.log(_import);

// let newClass = new Riddle(_import[0])
// newClass.ask()

// const start = Date.now();
// console.log(start);

// const input = readlineSync.question("enter you are name: ")
// const person = new Player(input);
// person.recordTime(start)
// console.log(person);
// console.log(person.showStatus());

// console.log(person);

const input = readlineSync.question("enter you are name: ")
const person = new Player(input)
for(let i = 0;i < _import.length;i++){
    let start = Date.now();
    const men = new Riddle(_import[i]);
    men.ask()
    person.recordTime(start)

}

console.log(person.showStatus());
 



