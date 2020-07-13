import leftPad from 'left-pad';

export function one(p) {
  console.log("one");
  return Object.assign({
    action: 'one'
  }, p);
}

export function two(p) {
  console.log("two");
  return Object.assign({
    action: 'two'
  }, p);
}

export function three(p) {
  console.log("three");
  return Object.assign({
    action: leftPad('three', 10, '.')
  }, p);
}
