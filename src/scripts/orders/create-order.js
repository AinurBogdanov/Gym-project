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
    const phoneNumber = user.phone_number



    console.log(phoneNumber);
    const cleanPhone = phoneNumber.replace(/\+/, '%2B');
      const url = `
      http://localhost:8000/order/create_order?order=${orderName}&phone_number=${cleanPhone}
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
        alert('заказ сделан ожидайте звонка');
      }
    } catch (error) {
      alert('что-то не так с сервером')
    }
  } else {
    alert('войдите в аккаунт')
    window.location.href = 'http://localhost:5173/src/pages/signIn.html';
  }
}