'use strict'
const userListContainer = document.querySelector('.user-list');

const createUserTemplate = ({
  name,
  email,
  phone,
  username
}) => {
  return `<div class="user">
  <span>Name: ${name}</span>
  <span>Email: ${email}</span>
  <span>Phone: ${phone}</span>
  <span>Username: ${username}</span>
  </div>`
};

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise");
  }, 2000)
});


firstPromise.then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second promisee");
    }, 2000)
  });
}).then(result => console.log(result));

const users = fetch('https://jsonplaceholder.typicode.com/users').then(result => {

  return result.json();
}).then(userList => {
  userListContainer.innerHTML = userList.reduce((acc, user) => {
    return acc + createUserTemplate(user);
  }, '');
}).catch(e => console.log(e))
// вызываем ошибку
// throw new Error('error')

// тот самый метод как фетч
// const getUserList = async () => {
//   const usersData = await fetch('https://jsonplaceholder.typicode.com/users');
//   const userList = await usersData.json();
//   console.log(userList);
//   return userList;
// }
// getUserList();