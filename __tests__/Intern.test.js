const Intern = require("../lib/Intern");

const intern = new Intern("Ygor", 2, "student@learning.com", "Sydney Uni");

describe("Intern", () => {
    it("Role should be equals to Intern", () => {
        expect(intern.role).toEqual("Intern");
    })

    it("The name should be the same as created", () => {
        expect(intern.name).toEqual("Ygor");
    });

    it("The ID should be the same as created", () => {
        expect(intern.id).toEqual(2);
    });

    it("The email should be the same as created", () => {
        expect(intern.email).toEqual("student@learning.com");
    });

    it("The github user should be the same as created", () => {
        expect(intern.school).toEqual("Sydney Uni");
    });
});