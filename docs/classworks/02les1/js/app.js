let userList = ['car', 'dog', 'cat'];
let cat = userList[5];
console.log(`tem name is ${cat}`);
userList[5] = 5;
userList[2] = 'mouse';
// console.log(userList[2]);
// количество юзерлиста
console.log(`Amount of users ${userList.length}`);
userList = ['Bob Dilan', 'Jon week', 'Tony Stark'];
// по порядку i+1 номерация с 1- если нет с 0
// for (let i = 0; i < userList.length; i += 1) {
//   console.log(`${i + 1}) User name is ${userList[i]}`)
// }
// // перебирает весь лист- без нумерации
// for (const user of userList) {
//   console.log(`User name is ${user}`)
// }
// // поиск по юзурам
// for (const user of userList) {
//   if (user === 'Jon week') {
//     console.log(`Found user ${user}`);
//     break;
//   }
//   console.log(`User name is ${user}`)
// }
// // парные числа
// const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const number of numberList) {
//   if (number % 2 === 0) {
//     console.log(`Number is ${number}`);
//     continue;
//   }
//   console.log(`Number ${number}`);
// }
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Array item[${i}][${j}] = ${matrix[i][j]}`)
  }
}
// const article = 'I need your clothes, boots and motocycle';
// const worldArray = article.split(' ');
// const outputString = worldArray.join('_');
// console.log(worldArray);
// console.log(outputString);
// // на какой позиции
// console.log(`Boots in [${worldArray}] on ${worldArray.includes('boots')} position`);
console.log(userList);
userList.push('super user');
// console.log(userList);
// удаляет последний елемент
// console.log(userList.pop());
console.log(userList.slice(2, 3));
const article = 'need your clothes, boots and motocycle';
const foo = article.slice(0, 1).toUpperCase() + article.slice(1);
console.log(foo);