const Employee = require("../lib/Employee");

const employee = new Employee("Base", 4, "theemployee@who.com");
describe("Employee", () => {
    it("Role should be employee", () => {
        expect(employee.role).toEqual("Employee");
    })
    it("The name should be the same as created", () => {
        expect(employee.name).toEqual("Base");
    });

    it("The ID should be the same as created", () => {
        expect(employee.id).toEqual(4);
    });

    it("The email should be the same as created", () => {
        expect(employee.email).toEqual("theemployee@who.com");
    });
})