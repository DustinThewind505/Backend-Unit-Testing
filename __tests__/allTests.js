const { add, averageSum, checkIfArray, moreThan50k } = require('../functions/functionsToBeTested');


describe("all tests", () => {
    it(": should be running tests", function () {
        expect(true).toBeTruthy()
    })

    describe("the average score", () => {
        const scoresArr = [2, 2, 4, 6, 6];

        it(": should return the average of an array of numbers", () => {
            let scores = [2, 2, 4, 6, 6];

            expect(averageSum(scores)).toBe(4);
        });
        it(": should throw an error if data type is not an array", () => {
            const scoresOBJ = { 2: 2, 2: 2, 4: 4, 6: 6, 6: 6 }
            const scoresString = "2, 2, 4, 6, 6";
            const scoresNaN = NaN;
            const scoresUndefined = undefined;
            const scoresNull = null;
            expect(checkIfArray(scoresArr)).toBeTruthy(); // <--------- Should be the only true edge case
            expect(checkIfArray(scoresOBJ)).toBeFalsy();
            expect(checkIfArray(scoresString)).toBeFalsy();
            expect(checkIfArray(scoresNaN)).toBeFalsy();
            expect(checkIfArray(scoresUndefined)).toBeFalsy();
            expect(checkIfArray(scoresNull)).toBeFalsy();
        });
    })

    describe("salaries over $50k", () => {
        let salariesArr = [4000, 50005, 7500, 90000, 30000];

        it(": should return salaries $50k and higher", () => {
            const expected = [ 50005, 90000 ];
            expect(moreThan50k(salariesArr)).toBe([ 50005, 90000 ]);
        });
        it.todo(": should return only numbers");
        it.todo(": should return an empty array if no arguments are given");
        it(": should throw an error when the argument is not an array", () => {
            const salariesOBJ = { 4000: 4000, 50005: 50005, 7500: 7500, 90000: 90000, 30000: 30000 }
            const salariesString = "4000, 50005, 7500, 90000, 630000";
            const salariesNaN = NaN;
            const salariesUndefined = undefined;
            const salariesNull = null;
            expect(checkIfArray(salariesArr)).toBeTruthy(); // <--------- Should be the only true edge case
            expect(checkIfArray(salariesOBJ)).toBeFalsy();
            expect(checkIfArray(salariesString)).toBeFalsy();
            expect(checkIfArray(salariesNaN)).toBeFalsy();
            expect(checkIfArray(salariesUndefined)).toBeFalsy();
            expect(checkIfArray(salariesNull)).toBeFalsy();
        });
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