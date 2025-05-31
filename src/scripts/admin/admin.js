
export const admin = JSON.parse(localStorage.getItem('admin')) || {isAdmin: false};

// const data = {'name': 'admin1', 'password': 'admin_1_password'};
//форма получение данных

document.getElementById('adminForm').addEventListener('submit', regAdmin)

async function regAdmin(event) {
  if (admin.isAdmin === true) {
    alert('Панель админа активна')
    return
  }
  event.preventDefault();

  const formData = new FormData(this);

  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

   console.log(data)
   const response = await fetch("http://localhost:8000/admin/verify", {
    method: "POST",
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  const result = await response.json();
  if (result.success === true) {
    admin.isAdmin = true;
    localStorage.setItem('admin', JSON.stringify(admin))
    alert("панель админа активна ")
  }
}



// console.log(regUser(data))