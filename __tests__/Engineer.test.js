const Engineer = require("../lib/Engineer");

describe("Intern", () => {
    it("Role should be equals to Intern", () => {
        const engineer = new Engineer();
        expect(engineer.role).toEqual("Engineer");
    })
})