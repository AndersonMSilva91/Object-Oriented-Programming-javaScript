var Avião = /** @class */ (function () {
    function Avião() {
    }
    return Avião;
}());
var plane = new Avião();
var agen = plane.agenciaAerea = 'Gol';
var type = plane.tipo = 'Boing-777';
var qtdp = plane.qtdpessoas = 60;
console.log("This is the agence of the plane: ".concat(agen));
console.log("This is the type of the plane: ".concat(type));
console.log("This is the number of people the plane support's: ".concat(qtdp));
