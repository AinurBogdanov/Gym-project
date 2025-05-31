
const data = {'name': 'admin1', 'password': 'admin_1_password'};

async function regAdmin(data) {
   const response = await fetch("http://localhost:8000/admin/verify", {
    method: "POST",
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  return response
}

regAdmin(data);


// console.log(regUser(data))