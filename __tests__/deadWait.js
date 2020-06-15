const { add } = require('../calculator/calculator');
const { theArray, averageSum } = require('../mathHelper/mathHelper');




describe("all tests", () => {
    it(": should be running tests", function () {
        expect(true).toBeTruthy()
    })

    describe("the average score", () => {
        it(": should return the average of an array of numbers", () => {
            let scores = [2, 2, 4, 6, 6];

            expect(averageSum(scores)).toBe(4);
        });
        it(": should throw an error if data type is not an array", () => {
            let scoresArr = [2, 2, 4, 6, 6]; // <--------- Should be the only true edge case
            let scoresOBJ = { 2:2, 2:2, 4:4, 6:6, 6:6 }
            let scoresString = "2, 2, 4, 6, 6";
            let scoresNaN = NaN;
            let scoresUndefined = undefined;
            let scoresNull = null;
            expect(theArray(scoresArr)).toBeTruthy();
            expect(theArray(scoresOBJ)).toBeFalsy();
            expect(theArray(scoresString)).toBeFalsy();
            expect(theArray(scoresNaN)).toBeFalsy();
            expect(theArray(scoresUndefined)).toBeFalsy();
            expect(theArray(scoresNull)).toBeFalsy();
        });
    })

    describe("salaries over $50k", () => {
        it.todo(": should return salaries $50k and higher");
        it.todo(": should return only numbers");
        it.todo(": should return an empty array if no arguments are given");
        it.todo(": should throw an error when the argument is not an array");
    })

    describe("the calculator", () => {
        it(": should return the sum of two given numbers", () => {
            expect(add(2, 2)).toBe(4);
            expect(add(-2, -2)).toBe(-4);
            expect(add(2, -2)).toBe(0);
            expect(add(0, 2)).toBe(2);
            expect(add(0, 0)).toBe(0);
        
        })

        it(": should return 0 if no arguments are given", () => {
            expect(add()).toBe(0);
        })

        it(": should return the value of the argument when only one number is given", () => {
            expect(add(0)).toBe(0);
            expect(add(2)).toBe(2);
            expect(add(undefined, 2)).toBe(2);
        })

        it(": should throw an error if arguments are not numbers", () => {
            expect(() => {
                add({}, {})
            }).toThrow();
            expect(() => {
                add(2, {})
            }).toThrow();
            expect(() => {
                add({}, 2)
            }).toThrow();

            expect(() => {
                add([], [])
            }).toThrow();
            expect(() => {
                add(2, [])
            }).toThrow();
            expect(() => {
                add([], 2)
            }).toThrow();

            expect(() => {
                add(NaN, NaN)
            }).toThrow();
            expect(() => {
                add(2, NaN)
            }).toThrow();
            expect(() => {
                add(NaN, 2)
            }).toThrow();

            expect(() => {
                add(null, null)
            }).toThrow();
            expect(() => {
                add(2, null)
            }).toThrow();
            expect(() => {
                add(null, 2)
            }).toThrow();

            expect(() => {
                add("two", "two")
            }).toThrow();
            expect(() => {
                add(2, "two")
            }).toThrow();
            expect(() => {
                add("two", 2)
            }).toThrow();
        })

        it.todo(": make more tests");
    })
})