describe("Home Page Component", () => {
  it("Should return true when the home page has 2 images", () => {
    cy.visit("/")

    cy.get(".home-images-section").find("img").should("be.visible")
    cy.wait(1000)
  })

  it("Should return true when the page has the right 2 buttons", () => {
    cy.visit("/")

    cy.contains("Criar Conta").should("to.have.length", 1)
    cy.contains("Entrar").should("to.have.length", 1)
    cy.wait(1000)
  })
})
