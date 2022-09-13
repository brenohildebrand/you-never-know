const obj = {
    timeInSeconds: 2,
    timeInMilliseconds: this.timeInSeconds * 1000,
};

const obg = {};
obg.timeInSeconds = 2;
obg.timeInMilliseconds = obg.timeInSeconds * 1000;

function Obj () {
    this.timeInSeconds = 3;
    this.timeInMilliseconds = this.timeInSeconds * 1000;
}

console.log(obj.timeInMilliseconds);
console.log(obg.timeInMilliseconds);
console.log((new Obj()).timeInMilliseconds);