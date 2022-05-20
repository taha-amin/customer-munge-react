// IMPORT MODULES under test here:
import {
  addAllAges,
  getAverageCoolFactor,
  getGenderBreakdownOfEachCar,
  getGenderBreakdownOfFordOwners,
  getTotalOfEachGender,
  greetUsers,
  greetUsersOverAge60,
} from "../functions.js";
import customers from "./data.js";

const { test, skip } = QUnit;

test("greetUsers", (expect) => {
  const expected = [
    "Hello Suzi Summerson",
    "Hello Boot Penton",
    "Hello Cacilia Caramuscia",
    "Hello Mattie Mungane",
    "Hello Kathryne Gostling",
    "Hello Cristal Oakman",
    "Hello Mahmud Shingler",
    "Hello Kenny Kepe",
    "Hello Elena Guisby",
    "Hello Irene Kynvin",
    "Hello Debor Lashmar",
    "Hello Christian Churchill",
    "Hello Fawnia Cowdroy",
    "Hello Eli Perigo",
    "Hello Parker Goodboddy",
    "Hello Leeland Bonome",
    "Hello Lowe Driussi",
    "Hello Tracy Chidlow",
    "Hello Dimitri Ochiltree",
    "Hello Sascha Yanin",
    "Hello Emmaline Horribine",
    "Hello Erinna Swires",
    "Hello Erroll Reade",
    "Hello Ilaire O'Codihie",
    "Hello Anatol Gulley",
    "Hello Celestine Teodori",
    "Hello Brandi Sawdon",
    "Hello Atlanta Oneil",
    "Hello Salomone Merkle",
    "Hello Alta Sulter",
    "Hello Marys Allsopp",
    "Hello Marilin Ellacott",
    "Hello Alexandros Cornell",
    "Hello Matti Haller",
    "Hello Henryetta Cheng",
    "Hello Gennie Saura",
    "Hello Sherwynd Wiggans",
    "Hello Thorn McMeekin",
    "Hello Esmaria Moukes",
    "Hello Dietrich Gladebeck",
    "Hello Karol Rosa",
    "Hello Manya Fodden",
    "Hello Casi Waterland",
    "Hello Munroe Walthall",
    "Hello Tannie Sedman",
  ];

  const actual = greetUsers(customers);

  expect.deepEqual(actual, expected);
});

test("greetUsersOverAge60", (expect) => {
  const expected = [
    "Hello Suzi Summerson!",
    "Hello Boot Penton!",
    "Hello Cacilia Caramuscia!",
    "Hello Cristal Oakman!",
    "Hello Kenny Kepe!",
    "Hello Dimitri Ochiltree!",
    "Hello Ilaire O'Codihie!",
    "Hello Anatol Gulley!",
    "Hello Salomone Merkle!",
    "Hello Alta Sulter!",
    "Hello Alexandros Cornell!",
    "Hello Thorn McMeekin!",
    "Hello Esmaria Moukes!",
    "Hello Munroe Walthall!",
    "Hello Tannie Sedman!",
  ];

  const actual = greetUsersOverAge60(customers);

  expect.deepEqual(actual, expected);
});

test("addAllAges", (expect) => {
  const expected = 2125;

  const actual = addAllAges(customers);

  expect.deepEqual(actual, expected);
});

test("getAverageCoolFactor", (expect) => {
  const expected = 5.088888888888889;

  const actual = getAverageCoolFactor(customers);

  expect.deepEqual(actual, expected);
});

test("getTotalOfEachGender", (expect) => {
  const expected = {
    Bigender: 1,
    Female: 19,
    Genderqueer: 1,
    Male: 23,
    "Non-binary": 1,
  };

  const actual = getTotalOfEachGender(customers);

  expect.deepEqual(actual, expected);
});

test("getGenderBreakdownOfFordOwners", (expect) => {
  const expected = {
    Female: 1,
    Male: 2,
  };

  const actual = getGenderBreakdownOfFordOwners(customers);

  expect.deepEqual(actual, expected);
});

test("getGenderBreakdownOfEachCar", (expect) => {
  const expected = {
    "Alfa Romeo": {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Audi: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    BMW: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Buick: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Cadillac: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Chevrolet: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Chrysler: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Dodge: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Eagle: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Ford: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    GMC: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Infiniti: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Jeep: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Kia: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Lexus: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Mazda: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    "Mercedes-Benz": {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Mercury: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Mitsubishi: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Oldsmobile: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Peugeot: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Pontiac: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Porsche: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Scion: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Subaru: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Toyota: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
    Volvo: {
      Bigender: 1,
      Female: 19,
      Genderqueer: 1,
      Male: 23,
      "Non-binary": 1,
    },
  };

  const actual = getGenderBreakdownOfEachCar(customers);

  expect.deepEqual(actual, expected);
});

skip("getAllCoolFactorsOfEachCar", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactorOfEachCar", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactor", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactor", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getCoolFactorsByAgeBracket", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactorByAgeBracket", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});
