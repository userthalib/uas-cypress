//Nama          : Maulana Malik Ibrahim
//No Absen/NIM  : 12/1941720055
//Kelas         : TI-3A
//Test Case     : Login Testing

const { get } = require("http")

it.only('lms jti polinema test', function () {
    cy.visit('http://lms.jti.polinema.ac.id/login/index.php')

    cy.get('span.login')
    .click().should('be.visible')

    cy.get('#username.form-control')
    .type('1941******').should('be.visible') // random username another user
    
    cy.get('#password.form-control')
    .type('******0154') // random password another user

    cy.get('#loginbtn')
    .click().should('be.visible')
    // kurang pembuktian berhasil dan gagal
    // cy.screenshot()
})