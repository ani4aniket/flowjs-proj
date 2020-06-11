// @flow

// VARIABLES
let name: string = "John Doe";
let age: number = 4;
let users: string[] = ["John", "Sara"];
let ids: number[] = [1, 2, 3];
let hasKids: boolean;
let something: any = [1, 3, 4];

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
