// @flow

// VARIABLES
let name: string = "John Doe";
let age: number = 4;
let users: string[] = ["John", "Sara"];
let ids: number[] = [1, 2, 3];
let hasKids: boolean;
let something: any = [1, 3, 4];

// INTERFACE
let person: Person;

person = {
  name: "John",
  age: 30,
  hasKids: true,
};

interface Person {
  name: string;
  age: number;
  hasKids: boolean;
}

// FUNCTIONS
function greeting(name: string): string {
  return "Hello " + name;
}

console.log(greeting("Aniket"));
function someFunction(value: string | number) {
  return "Hello";
}

someFunction("Hey");

// UTILITY TYPES

type Suit = "Diamonds" | "Clubs" | "Spades";

const clubs: Suit = "Clubs";
