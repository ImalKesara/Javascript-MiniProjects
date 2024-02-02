"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Accounts
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const displayMovements = function (movements) {
  // containerMovements.textContent = "";
  containerMovements.innerHTML = "";

  movements.forEach(function (value, index) {
    console.log(`${index + 1} ${value}`);
    const type = value > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${value}</div>
        </div>
      
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);

    // containerMovements.innerHTML = html;
  });
};

displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);

// let julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

const juliaa = function (dogAges) {
  dogAges.splice(0, 1);
  dogAges.splice(2, 3);

  dogAges.forEach((dogAge, index) => {
    console.log(
      dogAge >= 5
        ? `Dog number ${index + 1} is an adult and is ${dogAge} years old.`
        : `Dog number ${
            index + 1
          } is Still a  puppy and is ${dogAge} years old.`
    );
  });
};

const kate = function (dogAges) {
  dogAges.splice(0, 1);
  dogAges.splice(2, 3);

  dogAges.forEach((dogAge, index) => {
    console.log(
      dogAge >= 5
        ? `Dog number ${index + 1} is an adult and is ${dogAge} years old.`
        : `Dog number ${
            index + 1
          } is Still a  puppy and is ${dogAge} years old.`
    );
  });
};

const bothData = function (dogjulia, dogKate) {
  dogjulia.splice(0, 1);
  dogjulia.splice(-2);

  dogKate.splice(0, 1);
  dogKate.splice(-2);

  dogjulia.forEach((dogAge, index) => {
    console.log(
      dogAge >= 5
        ? `Dog number ${index + 1} is an adult and is ${dogAge} years old.`
        : `Dog number ${
            index + 1
          } is Still a  puppy and is ${dogAge} years old.`
    );
  });

  dogKate.forEach((dogAge, index) => {
    console.log(
      dogAge >= 5
        ? `Dog number ${index + 1} is an adult and is ${dogAge} years old.`
        : `Dog number ${
            index + 1
          } is Still a  puppy and is ${dogAge} years old.`
    );
  });
};

juliaa([3, 5, 2, 12, 7]);
kate([4, 1, 15, 8, 3]);

console.log("-----------------------------");

bothData([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const x = [2, 3, 4, 5];
const y = [4, 5, 6];

const r = [...x, ...y];
console.log(r);
