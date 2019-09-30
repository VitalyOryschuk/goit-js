// module.exports  -comonJS
// export default [{
//     name: 'Tom',
//     lastName: 'Tom'
//   },
//   {
//     name: 'John',
//     lastName: 'Oh'
//   }
// ]
import userItemTemplate from '../templates/user-cart.hbs';

const userList = [{
    img_url: '',
    name: 'Tom Nice',
    description: 'Nice nice'
  },
  {
    img_url: '',
    name: 'Jimmy',
    description: 'Good good'
  },
  {
    img_url: '',
    name: 'Zitta',
    description: 'Acha acha'
  },
]
export default function () {
  const userListContainer = document.querySelector('.users');

  const users = userList.reduce((acc, item) => {
    return acc + userItemTemplate(item);
  }, '')
  userListContainer.innerHTML = users;
}