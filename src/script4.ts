class Employee {
    public sector:string;
    public timeOfWork:Number;
    public rotation:string;
    public wage:Number;
    public office:string;
}

const emplo = new Employee();
const sect = emplo.sector = 'technology';
const tofw = emplo.timeOfWork = 8
const rotat = emplo.rotation = 'morning';
const offi = emplo.office = 'programmer';
const wage = emplo.wage = 3000;

console.log(`the sector of teh Employee is ${sect}.`);
console.log(`the time that he/she work is ${tofw} hours.`);
console.log(`His/Her turn is ${rotat}.`);
console.log(`His/Her office is ${offi}.`);
console.log(`and his/her wage is: ${wage} , dolars`);