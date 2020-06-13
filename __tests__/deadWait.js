//const {userFunction} = require('../index');


const user = {
    name: "Cyclops"
}

describe("dumbFuck", () => {
    it("Expect name to be Cyclops", () => {
        expect(user.name).toBe("Cyclops");
    });
})