import { user } from '../data'
import { order } from '../data'
document.querySelectorAll('.js-order').forEach((el) => {
  el.addEventListener('click',sendOrder)
})

async function sendOrder(event) {
  if (order.name === '1' || order.name === '6' || order.name === '12') {
    alert('заказ уже сделан')
    return
  }
  if (user.auth) {
    const orderName = event.currentTarget.dataset.orderId
    const phoneNumber = user.phone

    console.log(phoneNumber)
      const url = `
        http://localhost:8000/order/create_order?order=${orderName}&  phone_number=%2B${phoneNumber}
      `;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
      });

      const result = await response.json();
      
      console.log(result)
      if (result.success === true) {
        order.name = orderName;
        localStorage.setItem('order', JSON.stringify(order));
        alert('заказ сделан');
      }
    } catch (error) {
      alert('что-то не так с сервером')
    }
  } else {
    alert('войдите в аккаунт')
  }
}