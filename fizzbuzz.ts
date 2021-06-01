
let f: boolean
let b: boolean

let i: number

for (i = 1; i <= 100; i++) {
  f = divby3(i), b = divby5(i);
  console.log(
    f && b ? "FizzBuzz"
    : f ? "Fizz"
    : b ? "Buzz"
    : i
  );
}

function divby3(n: number) {
    return i % 3 == 0
}

function divby5(n: number) {
    return i % 5 == 0
}