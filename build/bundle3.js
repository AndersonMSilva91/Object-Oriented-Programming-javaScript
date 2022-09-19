var productEletronic = /** @class */ (function () {
    function productEletronic() {
    }
    return productEletronic;
}());
var prod = new productEletronic();
var typ = prod.type = 'cell phone';
var value = prod.value = 1.600;
var brand = prod.brand = 'samsung';
var nam = prod.serie = 'samsung S 9';
console.log("This is the name of the product: ".concat(nam));
console.log("This is the type of the product: ".concat(typ));
console.log("This is the brand of the product: ".concat(brand));
console.log("This is the value of the product: ".concat(value));
