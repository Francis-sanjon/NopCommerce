const { Given } = require("@badeball/cypress-cucumber-preprocessor")
import Login from './PageObjects/Login.spec'
const lp=new Login();
describe('empty spec', () => {
 
  it('User lanches the NopCommerce webpage', () => {
    cy.visit('https://demo.nopcommerce.com/')
    lp.loginClik()
    
  })
})