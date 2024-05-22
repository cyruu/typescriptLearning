type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "cyrus", email: "@gmail.com", isActive: true };
}

createUser({ name: "cyrus", email: "@gmail.com", isActive: true });

// ? here is optional property
// readonly can't be reassigned
type myType = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: myType = {
  _id: "123",
  name: "cy",
  email: "@gmail.com",
  isActive: false,
};

myUser.email = "gmail.com";
// myUser._id = "newId"; // cant because it is readonly property

// again

type anotherType = {
  id: number;
  name: string;
  isValid: boolean;
};

export {};
