it('should display alert on successful login', () => {
  cy.visit('/');
  cy.get('#username').type('admin');
  cy.get('#password').type('password');

  
  cy.get('button[type="submit"]').click();

  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('Login successful!');
  });
});

it('should display alert on unsuccessful login', () => {
  cy.visit('/');
  cy.get('#username').type('user');
  cy.get('#password').type('wrongpassword');


  cy.get('button[type="submit"]').click();

  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('Invalid credentials.');
  });
});

it('should prevent form submission on empty fields', () => {
  cy.visit('/');
  cy.get('#username').clear();
  cy.get('#password').clear();

  cy.get('button[type="submit"]').click();

  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('Please fill out this field.');
  });
});

