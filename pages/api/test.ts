import { ChatGPTAPI } from "chatgpt";
// import dotenv from "dotenv";

// dotenv.config();
interface person {
  name: string;
  age: number;
}
let i: person = { name: "", age: 0 };

const createName = async (name: string) => {
  i.name = name;
};

const createAge = async (age: number) => {
  i.age = age;
};

const test = async (name: string, age: number) => {
  await createName(name);
  console.log(i.name);
  await createAge(age);
  console.log(i.age);
  return i;
};

export default test;
