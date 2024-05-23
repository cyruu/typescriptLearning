// not sure what data will be entered
// use this union istead of any in typescript

let score: number | string = "33";

score = 23;

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let cyrus: User | Admin = {
  username: "cyrus",
  id: 101,
};

// functions

function getDbId(id: string | number) {
  if (typeof id == "string") {
    console.log(id.toUpperCase()); // after if it is 100% string
  } else {
    // here 100% number
    console.log(id + 4);
  }
}
getDbId("44");
getDbId(44);

// arrays
const data: number[] = [1, 3, 4];
const data2: string[] = ["1", "3", "4"];

// both of them

// this is error because it only accepts number array or string array
// const data3: string[] | number[] = [];

const data3: (string | number)[] = [1, 2, "3"];

let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "none"; // can't error
