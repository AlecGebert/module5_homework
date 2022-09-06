//Задание 6

const sameElem = (arr) => {
  let anotherArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (typeof arr[i] === typeof arr[j]) {
        anotherArr.push(arr[i]);
      }
    }
  }
  if (anotherArr.length > 0) {
    console.log("true");
  } else {
    console.log("false ");
  }

  if (anotherArr.length == arr.length || anotherArr.length == arr.length - 1) {
    console.log("Все элементы одного типа");
  }
};

let someArr = [true, "false", 1, 2];

sameElem(someArr);
