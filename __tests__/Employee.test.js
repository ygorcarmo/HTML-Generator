const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Role should be employee", () => {
        const employee = new Employee();
        expect(employee.role).toEqual("Employee");
    })
})