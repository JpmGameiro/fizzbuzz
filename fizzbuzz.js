var fizz;
var buzz;
var i;
for (i = 1; i <= 100; i++) {
    fizz = divby3(i), buzz = divby5(i);
    console.log(fizz && buzz ? "FizzBuzz"
        : fizz ? "Fizz"
            : buzz ? "Buzz"
                : i);
}
function divby3(n) {
    return n % 3 == 0;
}
function divby5(n) {
    return n % 5 == 0;
}
