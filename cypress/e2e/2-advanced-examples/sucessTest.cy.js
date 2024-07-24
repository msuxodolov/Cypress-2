const login = require("../fixtures/login.json");
const selector = require("../fixtures/authorization.json");
        
describe("Positive Test", () => {
    beforeEach(() => {
        cy.visit("http://qamid.tmweb.ru/admin");
    });

    it("Отображение главной страницы", () => {
        cy.log(login.validEmail, login.validPassword);
        cy.contains("Управление залами").should("be.visible", true);
    });
});