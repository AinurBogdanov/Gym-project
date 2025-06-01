import { user } from "../data";
import { isPasswordVal } from "../common/validation"
import { isNumberVal } from "../common/validation"

if (document.querySelector('html.sign-up')) { 
  document.getElementById('regForm').addEventListener('submit',regUser);
}

let isValid = true;

async function regUser(e) {
  if(user.auth === true) {
    alert('Профиль активен')
    return
  }
  e.preventDefault();
  
  const formData = new FormData(this);

  const data = {};

  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

   if (!isPasswordVal(data.password)) {
    document.getElementById('passwordError').innerText = "*пароль должен быть от 4 до 10 цифр";
    isValid = false;
  } else {
    isValid = true;
    document.getElementById('passwordError').innerText = "";
  }

  const isNumVal = isNumberVal(data.phone_number);

  if (!isNumVal) {
     isValid = false;
    document.getElementById('phoneError').innerText = "*не валидный номер"
  } else {
    isValid = true;
    document.getElementById('phoneError').innerText = ""
  }


   if (!/^[A-Za-zА-Яа-яЁё]+$/.test(data.name) || /\s/.test(data.name)) {
   isValid = false;
   document.getElementById('nameError').innerText = "*имя должно содержать только буквы без цифр и пробелов"
 } else { 
  isValid = true;
  document.getElementById('nameError').innerText = '';
 }

 data.phone_number = data.phone_number.replace(/ /g, "");

  if (!isValid) {
    return
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
    } else if (response.status === 400){
      alert(`ошибка: 400: ${JSON.stringify(result)}`);
    }


  } catch (error) {
    alert('что-то не так с сервером')
  }
}
