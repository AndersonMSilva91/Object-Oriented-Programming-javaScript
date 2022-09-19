class Avião {
    public agenciaAerea:string;
    public tipo:string;
    public qtdpessoas:Number;
}
const plane = new Avião();
const agen = plane.agenciaAerea = 'Gol';
const type = plane.tipo = 'Boing-777';
const qtdp = plane.qtdpessoas = 60;

console.log(`This is the agence of the plane: ${agen}`);
console.log(`This is the type of the plane: ${type}`);
console.log(`This is the number of people the plane support's: ${qtdp}`);