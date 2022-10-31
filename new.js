function addIncrement(x, y) {
  x = ++x * y;
  return x;
}
console.log(addIncrement(3, 7));

function addDecrement(x, y) {
  y = --x + y;
  console.log(y); //добавил, потому что никак не мог понять, почему получается такое значение)
  console.log(x); //аналогично
  return x + y;
}

console.log(addDecrement(3, 7));
