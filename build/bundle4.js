var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var emplo = new Employee();
var sect = emplo.sector = 'technology';
var tofw = emplo.timeOfWork = 8;
var rotat = emplo.rotation = 'morning';
var offi = emplo.office = 'programmer';
var wage = emplo.wage = 3000;
console.log("the sector of teh Employee is ".concat(sect, "."));
console.log("the time that he/she work is ".concat(tofw, " hours."));
console.log("His/Her turn is ".concat(rotat, "."));
console.log("His/Her office is ".concat(offi, "."));
console.log("and his/her wage is: ".concat(wage, " dolars"));
