import { user } from "../data";
import { isNumberVal } from "../common/validation";
import { isPasswordVal } from "../common/validation";

// 12345678
// +79049009090

document.getElementById('enterForm').addEventListener('submit',authUser)


async function authUser(e) {
   if(user.auth) {
     alert('аккаунт активирован');
     return
   }
  e.preventDefault();
  
  const formData = new FormData(this);

  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  if(!isNumberVal(data.phone_number)) {
    document.querySelector('.number-error').textContent = '*невалидный номер'
    return
  }
  
  if (!isPasswordVal(data.password)) {
    document.querySelector('.password-error').textContent = '*невалидный пароль'
    return
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
      user.phone_number = data.phone_number;
      localStorage.setItem('userAuth',JSON.stringify(user))

      alert('вы вошли в аккаунт'),
      document.querySelectorAll('input').forEach((el) => {
        el.value = '';
      })
    } else {
    }
  } catch (error) {
    alert('что-то пошло не так')
    console.log(error)
  }
}



