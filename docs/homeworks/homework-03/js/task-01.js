'use strict';
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
console.log(user.mood);

user.hobby = 'javascript';
console.log(user.hobby);

user.premium = false;
console.log(user.premium);

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
