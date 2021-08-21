const credentials = {
  email: "teste@gmail.com",
  password: "123456789"
}

describe("01 - login", () => {
  beforeEach(() => {
    cy.visit("/login")
  })

  /**
   * A series of failed login attempts tests
   */
  context("login attempts should fail", () => {
    it("empty login and password inputs", () =>{
      cy.getButtonByType("submit").click()
      cy.contains("O e-mail é obrigatório").should("be.visible")
      cy.contains("A senha é obrigatória").should("be.visible")
    })

    it("empty email field and filled password field", () => {
      cy.getInputByName("email").type(credentials.email)
      cy.getButtonByType("submit").click()
      cy.get("#email-helper-text").should("not.exist")
      cy.contains("A senha é obrigatória").should("be.visible")
    })


    it("filled email field and empty password field", () => {
      cy.getInputByName("password").type(credentials.email)
      cy.getButtonByType("submit").click()
      cy.contains("O e-mail é obrigatório").should("be.visible")
      cy.get("#password-helper-text").should("not.exist")
    })

    
    it("email malformed", () => {
      cy.getInputByName("email").type("emailMalformado")
      cy.getButtonByType("submit").click()
      cy.contains("Informe um e-mail válido").should("be.visible")
    })

    it("password without minumun lenght", () => {
      // The minum password length is 8
      cy.getInputByName("password").type("1234567")
      cy.getButtonByType("submit").click()
      cy.contains("A senha deve possuir no mínimo 8 caracteres de comprimento").should("be.visible")
    })

    it("incorrect password", () => {
      cy.getInputByName("email").type(credentials.email)
      // The only case where password is considered wrong is when the passord is equals to "12345678"
      cy.getInputByName("password").type("12345678")
      cy.getButtonByType("submit").click()
      cy.contains("Senha ou usuário informados incorretamente").should("be.visible")
    })
  })

  context("login attempts shoud be successfully", () => {

    it("successfully login", () => {
      cy.doLogin()
      cy.locationPathShouldBeEqual("/")
    })

    it("shoud logout", () => {
      cy.doLogin()
      cy.get(".sign-out").click()
      cy.locationPathShouldBeEqual("/login")
    })
  })
})