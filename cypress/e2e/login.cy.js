it('should display alert on successful login', () => {
  cy.visit('/');
  cy.get('#username').type('admin');
  cy.get('#password').type('password');

  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('Login successful!');
  });

  cy.get('button[type="submit"]').click();
});

it('should display alert on unsuccessful login', () => {
  cy.visit('/');
  cy.get('#username').type('user');
  cy.get('#password').type('wrongpassword');

  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('Invalid credentials.');
  });

  cy.get('button[type="submit"]').click();
});
