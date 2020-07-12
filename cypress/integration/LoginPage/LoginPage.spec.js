describe("Login page", () => {
  it("Should go to profile page when the login form validation was correct", () => {
    cy.visit("/login")

    cy.get("[cypress-test-id=inputnamelogin]").type("Madeus", { delay: 100 })
    cy.get("[cypress-test-id=inputpasswordlogin]").type("password123", {
      delay: 100,
    })
    cy.get(".signup-btn-section").find("#login-btn").click()
  })
  it("Should return true when the user name is showed in the header", () => {
    //verify if the user name is showing in the profile page
    cy.contains("Madeus").should("to.have.length", 1)
  })
})
