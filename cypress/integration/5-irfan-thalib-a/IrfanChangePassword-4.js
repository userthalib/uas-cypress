//Nama          : Irfan Thalib A
//No Absen/NIM  : 11/oldpass
//Kelas         : TI-3A
//Test Case     : Mengisi password benar, pass baru dan konfiramsi pass diisi password lama
/// <reference types="cypress"/>

describe('Insert new password and confirmation password using old password', () => {
    it('Visits LMS JTI Polinema', () => {
        //masuk ke alamat web LMS JTI
        cy.visit('http://lms.jti.polinema.ac.id/')
        //mengarahkan ke halaman login
        cy.contains('Log in').click()
        //mengakses class username dengan id dan memasukkan nim
        cy.get('#username')
          .type('oldpass')
          //menambah assertion berupa konfirmasi password 
          .should('have.value', 'oldpass')
        //mengakses class password dengan id dan memasukkan password(nim juga)
        cy.get('#password')
          .type('oldpass')
          //menambah assertion berupa konfirmasi password 
          .should('have.value', 'oldpass')
        //mengakses tombol login melalui id dan klik tombol untuk melakukan login
        cy.get('#loginbtn').click()
        //mengakses dropdown melalui id dan klik dropdown
        cy.get('#dropdown-1').click()
        //mengakses dropdown melalui id kedua karena yang pertama paada div class id berubah
        cy.get('#dropdown-1').click()
        //mengakses menu preferences dengan id
        cy.get('#actionmenuaction-5').click()
        //mengakses menu change password
        cy.contains('Change password').click()
        //mengakses class current password dengan id dan memasukkan password(nim)
        cy.get('#id_password')
          .type('oldpass')
          //menambah assertion berupa konfirmasi password 
          .should('have.value', 'oldpass')
        //mengakses class new password dengan id dan memasukkan password lama
        cy.get('#id_newpassword1')
          .type('oldpass')
          //menambah assertion berupa konfirmasi password 
          .should('have.value', 'newpassword')
        //mengakses class new password kedua dengan id dan memasukkan password lama
        cy.get('#id_newpassword2')
          .type('oldpass')
          //menambah assertion berupa konfirmasi password 
          .should('have.value', 'newpassword')
        //mengakses tombol submit changes melalui id dan klik tombol untuk melakukan save
        cy.get('#id_submitbutton').click()
    })
})