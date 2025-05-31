import { user } from "../data";

document.getElementById('regForm').addEventListener('submit',regUser)

 async function regUser(e) {
  e.preventDefault();
  
  const formData = new FormData(this);

  const data = {};

  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  try {
    const response = await fetch('http://localhost:8000/user/registration', {
      method: 'POST',
       headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    
    if (result.success === true ) {
      user.auth = true;
      user.phone = data.phone_number;

      localStorage.setItem('userAuth', JSON.stringify(user))

      alert('вы зарегестрированны'),
      document.querySelectorAll('input').forEach((el) => {
        el.value = '';
      })
    } 


  } catch (error) {
    alert('что-то не так с сервером')
  }
}