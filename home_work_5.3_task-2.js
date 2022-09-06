//Задание 2

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
let x = 5;
typesOfSomething(x);
