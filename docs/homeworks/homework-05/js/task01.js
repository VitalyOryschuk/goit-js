'use strict'

const Account = function (Login, Email) {
  this.Login = Login;
  this.Email = Email;
  this.getInfo = function () {
    console.log(`Login: ${Login}, Email: ${Email}`);
  }
}
Account.prototype.getInfo = function () {

}
console.log(Account.prototype.getInfo);

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com