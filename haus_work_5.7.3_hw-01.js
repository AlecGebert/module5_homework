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
