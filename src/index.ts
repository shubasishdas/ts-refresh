// class Name {
//   constructor(
//     public name: string,
//     public id: number,
//     private age: number,
//     protected lang: string
//   ) {
//     this.name = name;
//     this.id = id;
//     this.age = age;
//     this.lang = lang;
//   }
// }

// const Shubasish = new Name("Shubasish Das", 1, 23, "Js");
// console.log(Shubasish.age);
// console.log(Shubasish.lang);

// console.log({ Shubasish });

type Meal = {
  Pizza: number;
  Burger: number;
  Coffee: number;
  // [key: string]: number | string;
};

// const m: any = ["s"];

// console.log(4 / m);

// type Meal = {
//   [key: string]: number;
// };
// console.log(typeof 5 === "number")

// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{ name: string }>;

// interface Operators<T> {
//   add: (x: T, y: T) => T;
//   multiply: (x: T, y: T) => T;
// }

// const m: Operators<number> = {
//   add: (x, y) => x + y,
//   multiply: (x, y) => x * y,
// };

// m.add(5, 9);

// m.multiply(5, 9);

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, z: 89 };
// logPoint(point3); // logs "12, 26"

// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   gets: () => Type;
// }

// // This line is a shortcut to tell TypeScript there is a
// // constant called `backpack`, and to not worry about where it came from.
// declare const backpack: Backpack<string>;

// // object is a string, because we declared it above as the variable part of Backpack.
// const object = backpack.gets();

// // Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add("23");

const meal: Meal = {
  Pizza: 10,
  Burger: 20,
  Coffee: 30,
};

// console.log(meal.Pizza);
// console.log(meal["Pizza"]);
const newPizza: string = "Pizzasss";
// console.log(meal[newPizza]);
// console.log(meal.newPizza);

for (let key in meal) {
  console.log(meal[key as keyof Meal], "log000");
  // console.log(meal[key]);
}

// console.log(meal["hello"] );

type Source = "salary" | "investment" | "affiliation";

type Income = Record<Source, number>;

const montlyIncomes: Income = {
  salary: 500,
  investment: 200,
  affiliation: 300,
};

const b: string = "salarysasdsa";

const a = b as keyof Income;
// const a: Source = b;

console.log({ a });

for (const key in montlyIncomes) {
  console.log(montlyIncomes[key as keyof Income], "log001");
}

const isObj = <T>(arg: T): { param: T; status: boolean } => {
  if (typeof arg === "object" && arg !== null && !Array.isArray(arg)) {
    return { param: arg, status: true };
  }
  return { param: arg, status: false };
};

// console.log(isObj("Shubasish Das"), "~~~~");
// console.log(isObj([]));
// console.log(isObj({}));
// console.log(isObj(null));
// console.log(isObj(undefined));
// console.log(isObj(10));
// console.log(isObj(true));
// console.log(isObj(false));
// console.log(isObj(0));
// console.log(isObj(1));

type ObjCheck<T> = { param: T; status: boolean };

const isObj2 = <T>(arg: T): ObjCheck<T> => {
  if (typeof arg === "object" && arg !== null && !Array.isArray(arg)) {
    return { param: arg, status: true };
  }
  return { param: arg, status: false };
};

// console.log(isObj2({ name: "Shubasish Das" }));

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

const getUserProperty = <T, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map((user) => user[key]);
};

// type HasId = {
//   id: number;
// };

// const getUserProperty = <T extends HasId, K extends keyof T>(
//   users: T[],
//   key: K
// ): T[K][] => {
//   return users.map((user) => user[key]);
// };

// console.log(getUserProperty(usersArray, "email"));
