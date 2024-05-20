type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "cyrus", email: "@gmail.com", isActive: true };
}

createUser({ name: "cyrus", email: "@gmail.com", isActive: true });

export {};
