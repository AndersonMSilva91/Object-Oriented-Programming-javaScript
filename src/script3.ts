class productEletronic {
    public type:string;
    public value:Number;
    public brand:string;
    public serie:string;
}
const prod = new productEletronic();
const typ = prod.type = 'cell phone';
const value = prod.value = 1.600;
const brand = prod.brand = 'samsung';
const nam = prod.serie = 'samsung S 9';

console.log(`This is the name of the product: ${nam}`);
console.log(`This is the type of the product: ${typ}`);
console.log(`This is the brand of the product: ${brand}`);
console.log(`This is the value of the product: ${value}`);