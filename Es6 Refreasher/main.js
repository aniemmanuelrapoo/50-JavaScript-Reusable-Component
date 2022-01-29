CONST & LET
const you can not reassign a variable but you an in let
let name = 'john';
let test;

name = "jack";

const person = {
    name: 'john',
    age: '33'
}
person.name = 'Jack';

const nums = [1, 2, 3, 4];
nums.push(5)

ARROW FUNCTION
const sayHello = (name) => console.log(`Hello ${name}`);

sayHello();

FOREACH
const Fruits = ['Apples', 'Oranges', 'Grapes'];
Fruits.forEach((fruit, index) => console.log(fruit));

MAP
const signleFruit = Fruits.map(fruit => fruit.slice(0,-1).toUpperCase());
console.log(signleFruit)

FILTER
const people = [
    {id: 1, name: 'Rapoo'},
    {id: 2, name: 'Light'},
    {id: 3, name: 'Frank'}
];

const people2 = people.filter(person => person.id !==2);
console.log(people2)

SPREAD
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

const person1 = {
    name: 'Rapoo',
    age: 36
};

const person2 = {
    ...person1,
    email: 'Rapoo@gmail.com'
};

DESTRUCTURING
const profile = {
    name: 'Emmanuel Rapoo',
    address: {
        street: '33 Nike road',
        city: 'Enugu'
    },
    hobbies: ['Movies', 'Music']
};

const { name, address, hobbies } = profile;
const { street, city } = profile.address;

console.log(street, city);

CLASSES
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        return `Hello, My name is ${this.name} and i am ${this.age}`;
    }
}

const person1 = new Person('john', 33);
const person2 = new Person('Sara', 28);

console.log(person2.greet())
SUBCLASSES
class Customer extends Person {
    constructor( name, age, balance) {
        super(name, age);
        this.balance = balance;
    }
    info() {
        return `${this.name} owes $${this.balance}.00`;
    }
}

const customers1 = new Customer('Kelvin', 32, 300);

console.log(customers1.info());

MODULES
