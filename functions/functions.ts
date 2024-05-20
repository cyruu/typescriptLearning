function addTwo(num: number): number {
  return num + 2;
}
addTwo(2);

// function getValue(val: number):boolean {
//   if (val > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["miles", "morales", "gwen", "stacy"];
// const heros = [1, 2, 3, 4];

heros.map((hero): string => {
  return "hero is " + hero;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}
export {};
