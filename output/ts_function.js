"use strict";
const school = (name, estd, place = "place did not mentioned") => {
    console.log(`Your school name is ${name} and its established on ${estd} at ${place}`);
};
console.log(school("Chittagong Govt. School", "1900", "Chittagong"));
const userDetails = (id, name, place, passion) => { };
let user; // this is called Function Signatures
user = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return 0;
    }
};
user(10, 10, "add");
