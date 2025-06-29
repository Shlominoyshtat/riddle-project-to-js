// import readlineSync from 'readline-sync';


export default class Player{
    constructor(name){
        this.name = name;
        this.arrTime = [];
        this.avg = 0;
        this.total = 0;
    }
    recordTime(start){
        const time =+ ((Date.now()-start)/1000).toFixed(2);
        this.total += time;
        this.arrTime.push(time);
    }
    showStatus(){
        this.avg = this.total/this.arrTime.length;
        console.log(`Your average is: ${this.avg}`);
    }
}