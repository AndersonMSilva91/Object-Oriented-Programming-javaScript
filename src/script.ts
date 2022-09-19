class Client {
    public yourname:string;
    public age:Number;
    public height:Number;
    public tell:Number;
}

const client = new Client();
const yname = client.yourname = 'Jorel';
const age = client.age = 18;
const height = client.height = 1.80;
const tell = client.tell = 922043241;

console.log(`The name is ${yname}`);
console.log(`The age is ${age}`);
console.log(`This is the height ${height}`);
console.log(`This is the client number ${tell}`);