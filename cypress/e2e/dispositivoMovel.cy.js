describe('Testando dispositivos móveis', () => {
  it('Deve existir um botão menu burguer', () => {
    cy.viewport(375, 676);

    cy.login("neilton@alura", "123456");

    cy.location('pathname').should('eq', '/home');

    cy.getByData('menu-burguer').click();
    cy.getByData('menu-lateral').find('a').eq(4).click();

    cy.location('pathname').should('eq', '/home/investimentos');
  });
});
