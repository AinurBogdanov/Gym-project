import { user } from "../data";

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
    
    if (result.success === true ) {
      user.auth = true;
      localStorage.setItem('userAuth',JSON.stringify(user))

      alert('вы вошли в аккаунт'),
      document.querySelectorAll('input').forEach((el) => {
        el.value = '';
      })
    } else {
      alert('неверные данные')
      console.log(result.Reason)
    }
  } catch (error) {
    alert('что-то пошло не так')
    console.log(error)
  }
}



