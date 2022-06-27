const animals = ['pigs', 'goats', 'sheep'];

function foo(name) {
  return animals.filter(animal => animal !== name);
}
console.log(foo('pigs'));
