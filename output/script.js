import { Player } from "./classes/Player.js";
const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
const tamim = new Player("Tamim", 35, "Bangladesh");
const mushfique = new Player("Mushfique", 33, "Bangladesh");
const players = [];
// this is an arrya of type Player class, cannot push any other type in this arrya but Player object
players.push(mashrafi);
players.push(tamim);
players.push(mushfique);
console.log(players);
function addition(x, y) {
    return x + y;
}
console.log(addition(12, 12));
const myInfo = [];
const person = {
    name: "John",
    age: 34,
    passion: "Photography",
    sport: "Cricket",
};
person.name = "Fahad";
console.log(person);
const friends = ["Ross"];
friends.push("Joey", "Chandler");
console.log(friends);
let list;
const names = [];
let demo;
demo = {
    name: "Fahad",
    age: 23,
    passion: "Programming",
    cgpa: 3.3,
    marks: 80,
};
let arr;
arr = [1, 23, 4];
