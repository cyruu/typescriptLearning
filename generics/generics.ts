function identity(arg: number): number {
  return arg;
}
// function identity(arg: string): string {
//   return arg;
// }

const score: Array<number> = [];
const names: Array<string> = [];

function cyFunction(val: boolean | number): boolean | number {
  return val;
}
// using generics

function genericFunction<Type>(val: Type): Type {
  return val;
}
genericFunction("cyrus");

function anotherGeneric<T>(val: T): T {
  return val;
}

interface Person {
  name: string;
  email: string;
}
anotherGeneric<Person>({ name: "cy", email: "@gmail.com" });

// input parameter as an array
function getProduct<T>(products: T[]): T {
  return products[0];
}
getProduct<Person>([{ name: "", email: "" }]);
// arrow function
const anotherFucntion = <T>(val: T): T => {
  return val;
};

export {};
