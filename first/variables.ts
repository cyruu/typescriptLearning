function addTwo(num: number) {
  return num + 2;
}

function toUpper(val: string) {
  return val.toUpperCase();
}

function signUp(name, email, phone) {
  return 1 + name;
}
// function signUp(name: string, email: string, phone: number) {}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {};

signUp("1", "sad", 3);
toUpper("asdf");
addTwo(5);

loginUser("cy", "gmail");
export {};
