function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
    if (this._isDivisibleBy(15, number)) {
        console.log("FizzBuzz");
        return "FizzBuzz";
    }
    else if (this._isDivisibleBy(3, number)) {
        console.log("Fizz");
        return "Fizz";
    }
    else if (this._isDivisibleBy(5, number)) {
        console.log("Buzz");
        return "Buzz";
    }
    else {
        console.log(number);
        return number;
    }
};

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
    return number % divisor === 0;
};
