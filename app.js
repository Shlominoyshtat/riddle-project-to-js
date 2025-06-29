
import Player from "./folder_classes/player.js";
import Riddle from "./folder_classes/riddle.js";
import _import from "./folder_riddle/import.js";
import readlineSync from 'readline-sync'



const input = readlineSync.question("enter you are name: ")
const person = new Player(input)
for(let i = 0;i < _import.length;i++){
    let start = Date.now();
    const men = new Riddle(_import[i]);
    men.ask()
    person.recordTime(start)

}

person.showStatus()
 



