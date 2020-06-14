//const {userFunction} = require('../index');


const user = {
    name: "Cyclops"
}

describe("user OBJ", () => {
    it("Expect name to be Cyclops", () => {
        expect(user.name).toBe("Cyclops");
    });
})