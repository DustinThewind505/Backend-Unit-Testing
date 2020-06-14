const { add } = require('../calculator/calculator');




describe("all tests", () => {
    it("should be running tests", function () {
        expect(true).toBe(true)
    })

    describe("user OBJ", () => {
        it("Expect name to be Cyclops", () => {
            const user = {
                name: "Cyclops"
            }
            expect(user.name).toBe("Cyclops");
        });
    })

    describe("the calculator", () => {
        it("returns the sum of two given numbers", function () {
            expect(add(2, 2)).toBe(4);
            expect(add(12, 2)).toBe(14);
            expect(add(9, 99)).toBe(108);
            expect(add(400, 20)).toBe(420);
        })
        it("returns 0 if no numbers are given", function(){
            expect(add()).toBe(0);
        })

        it.todo("make more tests");
    })
})