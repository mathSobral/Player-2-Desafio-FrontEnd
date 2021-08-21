context("banks", () => {
  before(() => {
    cy.doLogin()
  })

  it("banks cards should be visible", () => {
    cy.get(".bank-card").should("be.visible")
  })

  it("search should filter banks", () => {
    // Before the search the number of bank-cards shouldn't greather then 1
    cy.get(".bank-card").should("not.have.length", 1)
    // Search for Banco do Brasil S.A.
    cy.getElementByDataCy("bankFilterInput").type("Banco do Brasil S.A.")
    // After the search the number of bank-cards should be equal to 1
    cy.get(".bank-card").should("have.length", 1)
  })

  it("should delete a bank", () => {
    // Clear the search field
    cy.getElementByDataCy("bankFilterInput").clear()
    // Gets the card that contains the text Banco do Brasil S.A.
    cy.contains("Banco do Brasil S.A.").parents().get(".bank-card").as("bbCard")
    // Clicks in more button
    cy.get("@bbCard").get(".moreButton").click()
    // Clicks in delete button
    cy.contains("Deletar Banco").click()
    // Checks if the bank was deleted
    cy.contains("Banco do Brasil S.A.").should("not.exist")
  })

  it("should delete using mocked data", () => {
    cy.doLogin()
    cy.intercept("GET","https://brasilapi.com.br/api/banks/v1", {fixture: "banks.json"})
    cy.contains("5 bancos")
  })

})