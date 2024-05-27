interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial:()=>strings
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

// if i create another interface it merges
interface Admin extends User {
  role: AdminRoles;
}

const enum AdminRoles {
  dashboardMangager = "dashboardd",
  database = "db",
}
const user1: Admin = {
  dbId: 999,
  email: "cy@gmail.com",
  userId: 101,
  role: AdminRoles.dashboardMangager,

  startTrial: () => {
    return "start";
  },
  getCoupon: (couponName: "cyrus", value: 988) => {
    return 10;
  },
};

// const user1: User = {
//   dbId: 999,
//   email: "cy@gmail.com",
//   userId: 101,
//   githubToken: 101,
//   startTrial: () => {
//     return "start";
//   },
//   getCoupon: (couponName: "cyrus", value: 988) => {
//     return 10;
//   },
// };
