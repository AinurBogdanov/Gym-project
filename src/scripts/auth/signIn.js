document.getElementById('enterForm').addEventListener('submit',authUser)

 async function authUser(e) {
  e.preventDefault();
  
  const formData = new FormData(this);

  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  try {
    const response = await fetch('http://localhost:8000/user/user_login', {
      method: 'POST',
       headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (result.Success === true ) {
      alert('вы вошли в аккаунт'),
      document.querySelectorAll('input').forEach((el) => {
        el.value = '';
      })
    }
  } catch (error) {
    alert('что-то не так с сервером')
  }
}

  // 12345678
  // +79049009090
  // Айнурчик