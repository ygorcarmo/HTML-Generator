const Engineer = require("../lib/Engineer");

let engineer = new Engineer("Peter Pan", 1, "numberOne@first.com", "TheCoder")

describe("Engineer", () => {
    it("Role should be equals to Engineer", () => {
        expect(engineer.role).toEqual("Engineer");
    });

    it("The name should be the same as created", () => {
        expect(engineer.name).toEqual("Peter Pan");
    });

    it("The ID should be the same as created", () => {
        expect(engineer.id).toEqual(1);
    });

    it("The email should be the same as created", () => {
        expect(engineer.email).toEqual("numberOne@first.com");
    });

    it("The github user should be the same as created", () => {
        expect(engineer.github).toEqual("TheCoder");
    });
});