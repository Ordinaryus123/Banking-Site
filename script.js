'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Kaan Erdibil',
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Ege Erdibil',
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Derin Figen Erdibil',
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Şenyar Erdibil',
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayTransactions = function (transactions) {
  containerTransactions.innerHTML = '';
  transactions.forEach(function (tra, i) {
    const type = tra > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        
        <div class="movements__value">${tra} €</div>
    </div>
    
    `;
    containerTransactions.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (transactions) {
  const balance = transactions.reduce((accum, tra) => accum + tra, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.transactions);
displayTransactions(account1.transactions);

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word.at(0))
      .join('');
  });
};

createUsername(accounts);
console.log(accounts);
// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (arr1, arr2) {
//   const corrected = arr1.slice();
//   corrected.splice(0, 1);
//   corrected.splice(-2);

//   console.log(corrected);
//   const dogs = arr1.concat(arr2);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log('adult');
//     } else {
//       console.log('puppy');
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2), 'h');
// console.log(arr.slice());

// //SPlice
// // console.log(arr.splice(2));
// // arr.splice(-1);
// console.log(arr);
// // arr.splice(1, 2);
// console.log(arr);
// arr.splice(1, 3);
// console.log(arr);

// //REverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h '];

// //Concat

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(arr);

// //join

// console.log(letters.join('-'));

// const arr = [23, 11, 64];
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// console.log(arr.at(-1));

// console.log('kaan'.at(0));
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements)
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} You deposited ${mov}`);
//     console.log(arr);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'TRY', 'TRY']);

// currenciesUnique.forEach(function (value, _, set) {
//   console.log(`${_}: ${value}`);
// });
// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const arrJ = [3, 5, 2, 12, 7];
// const arrK = [4, 1, 15, 8, 3];

// const checkDogs = function (arr1, arr2) {
//   const copyarr1 = arr1.slice(1, -2);
//   console.log(copyarr1);

//   const joinedArr = copyarr1.concat(arr2);

//   joinedArr.forEach(function (age, i) {
//     if (age < 3) {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     } else {
//       console.log(`Dog number ${i + 1} is  an adult and ${age} years old.`);
//     }
//   });
// };
// checkDogs(arrJ, arrK);
// console.log(arrJ);

// const transactionsNew = account1.transactions.map(tra => tra * 2);
// console.log(account1.transactions);
// console.log(transactionsNew);

// const transactionsUSDfor = [];

// for (const tra of account1.transactions) transactionsUSDfor.push(tra * 2);
// console.log(transactionsUSDfor);

// const transEDscriptions = account1.transactions.map(
//   (mov, i) =>
//     `Movement ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(transEDscriptions);

// const balance = account1.transactions.reduce((acc, val) => acc + val, 0);
// console.log(balance);

// [5,2,4,1,15,8,3] [16,6,10,5,6,1,4]

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : age * 4 + 16));

//   const adults = humanAges.filter(age => age >= 18);

//   console.log(humanAges);
//   console.log(adults);

//   const average =
//     adults.reduce(function (acc, age) {
//       return acc + age;
//     }, 0) / adults.length;
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

// const eurToTry = 1.1;

// const totalDepositsTry = account1.transactions
//   .filter(tra => tra > 0)
//   .map(tra => tra * eurToTry)
//   .reduce((acc, tra) => acc + tra, 0);

// console.log(totalDepositsTry);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Kaan Erdibil');
// console.log(account);

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // console.log(arr.slice(2, 4));
// // console.log(arr.slice(-2, -1));
// // console.log(arr.slice(-1));

// // console.log(arr.slice());
// // console.log(...arr);

// //console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];

// let arr2 = ['j', 'i', 'f', 'g', 'h'];

// s = arr2.splice('');
// console.log(s);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// //   if (movement > 0) {
// //     console.log(`deposited ${movement}`);
// //   } else {
// //     console.log(`withdraw ${movement}`);
// //   }
// // }

// // movements.forEach(function (x) {
// //   if (x > 0) {
// //     console.log(`deposited ${x}`);
// //   } else {
// //     console.log(`withdraw ${x}`);
// //   }
// // });

// const balance = movements.reduce(function (accum, current, i, arr) {
//   console.log(`iteration number ${i}, ${accum}`);
//   return (accum += current);
// }, 0);

// console.log(balance);

const numArr = [1, 2, 3, 4, 5, 6];
const numUnsorted = [4, 7, 2, 13, -5, 3];
const emptArr = [];

const stringArr = ['hi', 'oo', 'fdg', 'try'];

numArr.push(6, 7, 8, 9);
console.log(numArr);

numArr.unshift(0);
console.log(numArr);

numArr.pop();
console.log(numArr);

numArr.shift();
console.log(numArr);

console.log(numArr.splice(2, 3));
console.log(numArr.splice(-1));

console.log(numArr);
console.log(numArr.reverse());

console.log(numUnsorted);
console.log(numUnsorted.sort((a, b) => a - b));
console.log(numUnsorted.sort((a, b) => b - a));

console.log(emptArr.fill(1, 5));
