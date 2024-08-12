import userData from '../fixtures/user/user-data.json' // Carrega os dados do usuário de um arquivo JSON.
import LoginPage from '../pages/loginPage' // Importa a classe LoginPage.
import DashboardPage from '../pages/dashboarPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

// Chance é uma biblioteca usada para gerar dados aleatórios para testes.
const Chance = require('chance'); // Importa a biblioteca Chance.

// Cria instâncias das classes importadas.
const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Test', () => {
  it('User info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboarPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.name({ middle: true }), chance.last()) //Caminho da biblioteca
    myInfoPage.fillEmployeeDetails(userData.userSucess.employeeId, userData.userSucess.otherId, userData.userSucess.driversLicenceNumber, userData.userSucess.licenseDate)
    myInfoPage.fillStatus(userData.userSucess.dateOfBirth, userData.userSucess.testField) //caminho da fixture user-data
    myInfoPage.saveForm()
  })
})