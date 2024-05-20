const user = {
  name: "cy",
  email: "cy@gmail.com",
  isActive: true,
};

function createuser({ name: string, isPaid: boolean }) {}

let newUser = { name: "react", isPaid: true, email: "cyr@gmail.com" };
createuser(newUser);

function createCourse(): { name: string; isPaid: boolean } {
  return { name: "react", isPaid: true };
}
export {};
