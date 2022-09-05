//Задание 1
let numOrNot = prompt("Введите число");

const numberTest = (num) => {
  if (Number.isInteger(+num) && !isNaN(num)) {
    if (num % 2 === 0) {
      console.log("Это четное число");
    } else if (num % 2 !== 0) {
      console.log("Это нечетное число");
    }
  } else {
    alert("Упс, кажется вы ошиблись!");
  }
};
numberTest(numOrNot);

//Задание 2

let x;
const typesOfSomething = (variable) => {
  if (typeof variable == "string") {
    console.log("x — строка");
  } else if (typeof variable == "number") {
    console.log("x — число");
  } else if (typeof variable == "boolean") {
    console.log("x — логический тип");
  } else {
    console.log("Тип x не определен");
  }
};

typesOfSomething((x = 5));

//Задание 3

const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

console.log(reverseString("Skillfactory"));

//Задание 4

let x = Math.round(Math.random() * 100);
console.log(x);

//Задание 5

let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Задание 6

//Задание 8
let howManyStrings = new Map();

howManyStrings
  .set("guitar", "six")
  .set("mandoline", "four")
  .set("balalaika", "three")
  .set("dombra", "two")
  .set("broomstickbass", "one");

for (let instruments of howManyStrings.keys()) {
  console.log(`"Ключ - ${instruments}"`);
}

for (let strings of howManyStrings.values()) {
  console.log(`"значение - ${strings}"`);
}

for (let elem of howManyStrings.entries()) {
  console.log(elem);
}

/* or */

howManyStrings.forEach((value, key) => {
  console.log(`"Ключ - ${key}, значение - ${value}"`);
});
