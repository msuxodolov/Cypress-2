Cypress.Commands.add('login', (email, password) => {
    if (email) {
        cy.get('[for="email"]').type(email);
    }
    if (password) {
        cy.get('[for="pwd"]').type(password);
    }
    cy.contains("Авторизоваться").click();
});