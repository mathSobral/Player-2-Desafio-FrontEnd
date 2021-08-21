describe("02 route access", () => {
  it("try to access a private route without been logged in", () => {
    cy.visit("/")
    cy.locationPathShouldBeEqual("/login")
  })

  it("try to access login page when is logged in", () => {
    cy.doLogin()
    cy.wait(2000)
    cy.visit("/login") // Visit login page
    cy.locationPathShouldBeEqual("/") // Expect the redirection to root route
  })
})