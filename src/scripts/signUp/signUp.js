document.getElementById('regForm').addEventListener('submit',regUser)

 async function regUser(e) {
  e.preventDefault();
  
  const formData = new FormData(this);

  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
    console.log(key, value); // Для отладки
  }
  
  try {
    const response = await fetch('http://localhost:8000/user/registration', {
      method: 'POST',
       headers: {
        'Content-Type': 'application/json', // Критически важно!
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    console.log('sex-ass', result);
    alert('вы зарегестрированны')
  } catch (error) {
    console.error('ошибка блин', error);
  }
}