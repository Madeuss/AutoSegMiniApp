describe("SignUp Page components", () => {
  it("Should go to the profile page when the form validation is ok", () => {
    cy.visit("/signup")

    //Insert example data in the form
    cy.get("[cypress-test-id=inputnamesignup]").type("Mateus", { delay: 100 })
    cy.get("[cypress-test-id=inputemailsignup]").type("mateus123@hotmail.com", {
      delay: 100,
    })
    cy.get("[cypress-test-id=inputpasswordsignup]").type("matmat123", {
      delay: 100,
    })

    //click to submit
    cy.get(".signup-btn-section").find("#sign-btn").click()
  })

  it("Should return true when the user name is showed in the header", () => {
    //verify if the user name is showing in the profile page
    cy.contains("Mateus").should("to.have.length", 1)
  })
})
