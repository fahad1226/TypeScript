export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    info() {
        console.log(`${this.name} is a ${this.age} old years player from ${this.country}`);
    }
}
