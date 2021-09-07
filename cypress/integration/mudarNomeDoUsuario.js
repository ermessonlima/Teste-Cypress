describe('TGL', ()=> {
    it('Editar nome do usuario', ()=>{
        cy.visit('http://localhost:3000/');

        cy.get('#email').type('ermessonlimadossantos@hotmail.com');
        cy.get('#password').type('123456');
        cy.get('.sc-ezzafa > a').click();


        cy.get('#username').type('Caroline Tavares');
        cy.get('#email').type('carolinetavares@hotmail.com');
        cy.get('#password').type('123456');
        cy.get('.sc-giAqHp').click();

    })
})