describe("Teste de login e sessão", () => {
    it("Login e permanência na sessão(limpeza de storage e retorno para a page inicial)", () => {
        
        cy.visit('/');

        cy.getByData('botao-login').click();
        cy.getByData("email-input").type("neilton@alura.com");
        cy.getByData("senha-input").type("123456");
        cy.getByData("botao-enviar").click();

        cy.url().should("contain", "/home")
        cy.visit('/home');


        cy.session({ email: "neilton@alura.com", senha: "123456" }, () => {})
            .then(({ email, senha }) => {
                expect(email).to.equal(email);
                expect(senha).to.equal(senha);
            });
        
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.reload();

        cy.session({ email: "neilton@alura.com", senha: "123456" }, () => {})
            .then(({ email, senha }) => {
                expect(email).to.be.undefined;
                expect(senha).to.be.undefined;
            })
            cy.visit('/');
            cy.url().should("contain", "/")
    })
});