describe("dashboard", () => {
  before(() => {
    cy.doLogin()
  })

  context("navbar", () => {
    it("drawer should open", () => {
      cy.getElementByDataCy("navbarLogo").click()
      cy.contains("informem-se").should("be.visible")
    })

    it("drawer shoud close", () => {
      cy.getElementByDataCy("navbarLogo").click()
      cy.get("informem-se").should("not.exist")
    })
  })
})