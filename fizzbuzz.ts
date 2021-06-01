
let fizz: boolean;
let buzz: boolean;

let i: number;

for (i = 1; i <= 100; i++) {
  fizz = divby3(i), buzz = divby5(i);
  console.log(
    fizz && buzz ? "FizzBuzz"
    : fizz ? "Fizz"
    : buzz ? "Buzz"
    : i
  );
}

function divby3(n: number) {
    return i % 3 == 0;
}

function divby5(n: number) {
    return i % 5 == 0;
}