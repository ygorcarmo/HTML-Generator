const Mananger = require("../lib/Manager");

describe("Manager", () => {
    it("Role should be equals to Manager", () => {
        const manager = new Mananger();
        expect(manager.role).toEqual("Manager");
    })
})