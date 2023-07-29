describe('Example E2E Test', () => {
  it('should display the correct text on the page', () => {
    cy.visit('http://localhost:3000'); // Change the URL to match your application's URL

    cy.contains('Hello, Jest!').should('exist');
  });

  it('should add a new todo', () => {
    cy.visit('http://localhost:3000'); // Change the URL to match your application's URL

    cy.get('input[placeholder="Username"]').type('testuser');
    cy.get('input[placeholder="Password"]').type('testpassword');

    cy.contains('Login').click();

    cy.contains('Welcome, testuser!').should('exist');
  });
});
