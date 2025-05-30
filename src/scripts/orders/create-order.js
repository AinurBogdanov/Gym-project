document.querySelectorAll('.js-order').forEach((el) => {
  el.addEventListener('click',sendOrder)
})

async function sendOrder(event) {
  const orderId = event.currentTarget.dataset.orderId

    const url = `http://localhost:8000/order/create_order?order=${orderId}&user_id=1`;

  try {
    const response = await fetch(url, {
      method: 'POST',
       headers: {
         'Accept': 'application/json',
      },
    });

    const result = await response.json();
    
    if (result.Success === true ) {
      alert('заказ сделан')
    }
  } catch (error) {
    alert('что-то не так с сервером')
  }

}