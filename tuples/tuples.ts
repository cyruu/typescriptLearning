// tuples allows to store data in specified format

const userOne: (string | number)[] = [2, "miles", 1];

let anotherUser: [string, number, boolean];
anotherUser = ["miles", 12, false];

let rgb: [number, number, number];
rgb = [255, 0, 156];

type anoUser = [number, string];

const newcolor: anoUser = [11, "miles"];
newcolor[0] = 20;

// allowed to use
newcolor.push("false"); // can do? but why? tuples can only have number,string 2 elem in this case then wwhy?
//objects
type rgbColor = {
  red: number;
  green: number;
  blue: number;
};

const color1: rgbColor = {
  red: 34,
  green: 34,
  blue: 34,
};
export {};
