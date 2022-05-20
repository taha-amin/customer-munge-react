/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', 'Hello Mattie Mungane' etc]
*/

export function greetUsers(customers) {
  // just map over them to make a greeting
  const greeting = customers.map(
    ({ first_name, last_name }) => `Hello ${first_name} ${last_name}`
  );
  return greeting;
}

/* 
Output: 
['Hello Suzie Summerson!', 'Hello Cacilia Caramuscia', etc]
*/

export function greetUsersOverAge60(customers) {
  // first, filter over the user to get the ones over 60
  const overSixty = customers.filter((customer) => customer.age >= 60);

  // then map over them to make a greeting
  const greeting = overSixty.map(
    ({ first_name, last_name }) => `Hello ${first_name} ${last_name}!`
  );
  return greeting;
}

/* 
Output: 
4532
*/

export function addAllAges(customers) {
  // reduce through the customers to make a sum
  const sum = customers.reduce((previousValue, customer) => {
    previousValue += customer.age;

    return previousValue;
  }, 0);

  return sum;
}

/* 
Output: 
4.5
*/

export function getAverageCoolFactor(customers) {
  // map through to make an array of cool factors
  const coolFactor = customers.map(({ cool_factor }) => cool_factor);
  console.log(coolFactor);
  // then reduce through that array to get a sum
  const sum = coolFactor.reduce((previousValue, currentCoolFactor) => {
    previousValue += currentCoolFactor;

    return previousValue;
  }, 0);
  console.log(sum);
  // then divide by the total number of customers

  return sum / customers.length;
}

/* 
Output: 
{
    female: 42,
    male: 39,
    nonbinary: 8,
    etc . . .
}
*/

export function getTotalOfEachGender(customers) {
  const countingHashMap = customers.reduce((previousValue, customer) => {
    if (previousValue[customer.gender]) {
      previousValue[customer.gender]++;
    } else {
      previousValue[customer.gender] = 1;
    }

    return previousValue;
  }, {});

  return countingHashMap;
}

/* 
Output: 
 {
    female: 3,
    male: 2,
    nonbinary: 1,
    etc . . .
 }
*/

export function getGenderBreakdownOfFordOwners(customers) {
  const fordOwners = customers.filter(
    (customer) => customer.car_make === "Ford"
  );

  const genderFordOwners = fordOwners.reduce((previousValue, fordOwner) => {
    if (previousValue[fordOwner.gender]) {
      previousValue[fordOwner.gender]++;
    } else {
      previousValue[fordOwner.gender] = 1;
    }

    return previousValue;
  }, {});

  return genderFordOwners;
}

/* 
Output: 
{
    ford: {
        female: 3,
        male: 6,
        nonbinary: 0,
    },
    mercedes:  {
        female: 5,
        male: 4,
        nonbinary: 1,
    },
    etc . . .
}
*/

export function getGenderBreakdownOfEachCar(customers) {
  return true;
}

/* 
Output: 
{
    ford: [3, 5, 4, 4, 7, 5],
    mercedes: [8, 5, 6, 8, 3, 9],
    honda: [2, 4, 4, 3, 7, 1],
    etc. . .
}
*/

export function getAllCoolFactorsOfEachCar(customers) {
  return true;
}

/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////
/////////////////////////////// STRETCH GOALS ///////////////////////////////////////

/* 
Output: 
{
    ford: 5.4
    mercedes:  8.5
    honda: 2.3
}
*/

export function getAverageCoolFactorOfEachCar(customers) {
  return true;
}

/* 
Output: 
// break the customers into age demographic blocks. 
// For example, this says there are 55 people between 10 and 19, 38 people between 20 and 29, etc
{
    10: 55,
    20: 38,
    30: 12,
    40: 31,
    50: 62,
    60: 93,
    70: 45,
    80: 32,
    90: 11,
}
*/

export function makeAgeBrackets(customers) {
  return true;
}

/* 
Output: 
// break the customers into age blocks. 
// For example, this lists out every cool factor for users aged between 1 and 10, then every cool factor for users aged between 21 and 30, etc
{
    10: [3, 5, 4, 4, 7, 5],
    20: [8, 5, 6, 8, 3, 9],
    30: [1, 8, 4, 1, 9, 2],
    40: [2, 4, 4, 3, 7, 1],
    etc . . .
}
*/

export function getCoolFactorsByAgeBracket(customers) {
  return true;
}

/* 
Output: 
// break the customers into age demographic blocks, and give the average cool factor for every age block. 
// For example, below, the average cool factor for users aged between 31-40 is 9.5.

{
    10: 5.6,
    20: 3.1
    30: 7.8,
    40: 9.5,
    etc . . .
}
*/

export function getAverageCoolFactorByAgeBracket(customers) {
  return true;
}
