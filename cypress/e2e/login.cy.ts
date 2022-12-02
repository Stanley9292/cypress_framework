import LoginPage from '../page-objects/login-page';

describe('Login page', () => {

  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should render submit button', () => {
    cy.contains('Submit')
  })

  it('should check if submit button is visible', () => {
    cy.get(loginPage.selectors.submitBtn).should('be.visible');
  })

  it('should check if email input is visible', () => {
    cy.get(loginPage.selectors.emailInput).should('be.visible');
  })

  it('hould check if password input is visible', () => {
    cy.get(loginPage.selectors.passwordInput).should('be.visible');
  })

  it('should login if email contains "<name>@<domain>.com"', () => {
    loginPage.login('stanalexandru@something.com', 'Alexandru123!');
    cy.get('h1').contains('Welcome stanalexandru@something.com!').should('be.visible');
  })

  it('should login if email contains ".co.uk"', () => {
    loginPage.login('stanalexandru@co.uk', 'Alexandru123!');
    cy.get('h1').contains('Welcome stanalexandru@co.uk!').should('be.visible');
  })

  it('should login if email contains ".it"', () => {
    loginPage.login('stanalexandru@domain.it', 'Alexandru123!');
    cy.get('h1').contains('Welcome stanalexandru@domain.it!').should('be.visible');
  })

  it('should login if password has at least 8 characters', () => {
    loginPage.login('stanalexandru@domain.it', 'Alexandru123!');
    cy.get('h1').contains('Welcome stanalexandru@domain.it!').should('be.visible');
  })

  it('should show error message if email adress does not contain @ sign', () => {
    loginPage.login('stanalexandrudomain.com', 'Alexandru123!');
    cy.get('p').contains('Enter a valid email').should('be.visible');
  })

  it('should show error message if email adress does not contain .com', () => {
    loginPage.login('stanalexandru@domain', 'Alexandru123!');
    cy.get('p').contains('Enter a valid email').should('be.visible');
  })

  it('should show error message if password contain less than 8 characters ', () => {
    loginPage.login('stanalexandru@domain.com', 'Alexand');
    cy.get('p').contains('Password should be of minimum 8 characters length').should('be.visible');
  })

  it('should show error message if no upper case validation is made for password', () => {
    loginPage.login('stanalexandru@domain.com', 'alexandru123!');
    cy.get('p').contains('Password should contain a mix of upper and lower case letters, numbers and at least one special character').should('be.visible');
  })

  it('should show error message if no lower case validation is made for password', () => {
    loginPage.login('stanalexandru@domain.com', 'ALEXANDRU123!');
    cy.get('p').contains('Password should contain a mix of upper and lower case letters, numbers and at least one special character').should('be.visible');
  })

  it('should show error message if no number is added for password', () => {
    loginPage.login('stanalexandru@domain.com', 'Alexandrusss!');
    cy.get('p').contains('Password should contain a mix of upper and lower case letters, numbers and at least one special character').should('be.visible');
  })

  it('should show error message if no special character is added for password', () => {
    loginPage.login('stanalexandru@domain.com', 'Alexandru123');
    cy.get('p').contains('Password should contain a mix of upper and lower case letters, numbers and at least one special character').should('be.visible');
  })
})
