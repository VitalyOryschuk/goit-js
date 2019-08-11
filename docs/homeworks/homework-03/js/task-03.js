'use strict'
const findBestEmployee = function (employees) {
  let maxTaskEmployee = 0;
  const tasks = Object.keys(employees);

  for (let task of tasks) {
    if (employees[task] > maxTaskEmployee) {
      maxTaskEmployee = employees[task];
      name = task;
    }

  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);