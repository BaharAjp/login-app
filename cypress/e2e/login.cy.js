describe('Login Page', () => {
  it('should display the login form', () => {
    cy.visit('/');
    cy.get('form#loginForm').should('be.visible');
  });

  it('should login successfully with correct credentials', () => {
    cy.visit('/');
    cy.get('#username').type('admin');
    cy.get('#password').type('password');
    cy.get('button[type="submit"]').click();
    cy.contains('Login successful!').should('be.visible');
  });

  it('should show error with incorrect credentials', () => {
    cy.visit('/');
    cy.get('#username').type('user');
    cy.get('#password').type('wrongpassword');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid credentials.').should('be.visible');
  });
});
