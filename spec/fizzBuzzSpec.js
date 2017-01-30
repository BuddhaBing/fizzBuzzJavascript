describe('FizzBuzz', function() {

    var fizzbuzz;

    beforeEach(function() {
        fizzbuzz = new FizzBuzz();
    });

    it("should output fizz when given a number that is divisible by 3", function() {
        expect(fizzbuzz.play(3)).toEqual("Fizz");
    });

    it("should output buzz when given a number that is divisible by 5", function() {
        expect(fizzbuzz.play(5)).toEqual("Buzz");
    });
    it("should output fizzbuzz when given a number that is divisible by 3 and 5", function() {
        expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
    });
    it("should return the number when given a number that is not divisible by 3 or 5", function() {
        expect(fizzbuzz.play(37)).toEqual(37);
    });
})
