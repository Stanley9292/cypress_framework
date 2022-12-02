export default class LoginPage {
    selectors = {
        emailInput: '[id="email"]',
        passwordInput: '[id="password"]',
        submitBtn: '[data-testid="submit-button"]'
    }


    public login(email, password) {
        cy.get(this.selectors.emailInput).type(email);
        cy.get(this.selectors.passwordInput).type(password);
        cy.get(this.selectors.submitBtn).click();
    }
}