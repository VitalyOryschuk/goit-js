'use strict';
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
console.log(users.shift());
console.log(users);

console.log(users.pop());
console.log(users);

console.log(users.unshift('Lux'));
console.log(users);

console.log(users.push('Jay', 'Kiwi'));
console.log(users);

const userToDelete = 'Ajax';
console.log(users.splice(users.indexOf(userToDelete), 1));
console.log(users);

const userToInsert = 'Kong';
const insertBefore = 'Jay';
console.log(users.splice(users.indexOf(userToInsert), 0, userToInsert));
console.log(users);
