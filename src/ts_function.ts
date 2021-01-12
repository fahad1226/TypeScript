const school: Function = (
    name: string,
    estd: number,
    place: string = "place did not mentioned"
) => {
    console.log(
        `Your school name is ${name} and its established on ${estd} at ${place}`
    );
};

console.log(school("Chittagong Govt. School", "1900", "Chittagong"));

type stringOrNumber = number | string;

const userDetails = (
    id: stringOrNumber,
    name: string,
    place: stringOrNumber,
    passion: string
) => {};

let user: (a: number, b: number, c: string) => number; // this is called Function Signatures

user = (a: number, b: number, c: string) => {
    if (c === "add") {
        return a + b;
    } else {
        return 0;
    }
};

user(10, 10, "add");
