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
