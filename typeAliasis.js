"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
  return { name: "cyrus", email: "@gmail.com", isActive: true };
}
createUser({ name: "cyrus", email: "@gmail.com", isActive: true });
var myUser = {
  _id: "123",
  name: "cy",
  email: "@gmail.com",
  isActive: false,
};
myUser.email = "gmail.com";
myUser._id = "newId";
