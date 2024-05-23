function detectType(value: number | string) {
  if (typeof value == "string") {
    return value.toLowerCase();
  }
  return value + 2;
}

function provideId(id: string | null) {
  if (!id) {
    console.log("id not provided");
  }
  id?.toLowerCase();
}

interface User {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function checkAdmin(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  return "just a normal user";
}
