const Mananger = require("../lib/Manager");

const manager = new Mananger("The Man", 3, "follow@boss.com", 13);



describe("Manager", () => {
    it("Role should be equals to Manager", () => {
        expect(manager.role).toEqual("Manager");
    })
    
    it("The name should be the same as created", () => {
        expect(manager.name).toEqual("The Man");
    });

    it("The ID should be the same as created", () => {
        expect(manager.id).toEqual(3);
    });

    it("The email should be the same as created", () => {
        expect(manager.email).toEqual("follow@boss.com");
    });

    it("The github user should be the same as created", () => {
        expect(manager.officeNumber).toEqual(13);
    });
});