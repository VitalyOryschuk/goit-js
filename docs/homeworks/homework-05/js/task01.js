'use strict'

const Account = function (login, email) {
  this.login = login;
  this.email = email;
  this.getInfo = function () {
    console.log(`Login: ${login}, Email: ${email}`);
  }
}
Account.prototype.getInfo = Account;
console.log(Account.prototype.getInfo);

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com