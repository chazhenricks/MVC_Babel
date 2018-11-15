export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    speak() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old and I am doing a thing!`);
    }
}