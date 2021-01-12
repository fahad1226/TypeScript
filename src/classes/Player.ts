export class Player {
    constructor(
        private name: string,
        private age: number,
        readonly country: string
    ) {}

    info() {
        console.log(
            `${this.name} is a ${this.age} old years player from ${this.country}`
        );
    }
}
