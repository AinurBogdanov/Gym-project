import { admin } from "./admin";
import { formatTime } from "../time/formatTime.js"

if (admin.isAdmin) {
  document.querySelector(".js-admin-main").classList.remove('invisible')
}

let usersHTML = `
  <tr>
    <th>User name</th>
    <th>User phone</th>
  </tr>
`


let ordersHTML = `
	<tr>
    <th>Plan</th>
    <th>Expires at</th>
    <th>User id</th>
  </tr>
`

document.querySelector('.get-users-btn-js').addEventListener('click', renderUsers)
document.querySelector('.get-orders-btn-js').addEventListener('click', renderOrders)

const usersTable = document.querySelector('.table-users-js')
const ordersTable = document.querySelector('.table-orders-js')

async function renderUsers() {
  const usersData = await get('users')
  console.log(usersData)
  console.log('render')
  usersData.forEach(user => {
    usersHTML += `
    <tr>
      <td>${user.user_name}</td>
      <td>${user.phone_number}</td>
    </tr>`
  });
  usersTable.innerHTML = usersHTML;
}
 
async function renderOrders() {
  const ordersData = await get('orders');
  console.log(ordersData);

  ordersData.forEach(order => {
    ordersHTML += `
    <tr>
      <td>${order.name}</td>
      <td>${formatTime(order.expires_at)}</td>
      <td>${order.user_id}</td>
    </tr>`
  });
  ordersTable.innerHTML = ordersHTML;
}


async function get(req) {
  if (admin.isAdmin === false) {
    alert('активируйте админскую панель')
    return
  }

   const response = await fetch(`http://localhost:8000/admin/get_${req}`, {
    method: "GET",
  })

  return await response.json(); 
}




