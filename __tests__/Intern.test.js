const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Role should be equals to Intern", () => {
        const intern = new Intern();
        expect(intern.role).toEqual("Intern");
    })
})