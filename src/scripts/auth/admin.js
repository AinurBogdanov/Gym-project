async function regUser(data) {
   const response = await fetch("http://localhost:8000/user/registration", {
    method: "POST",
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  return response
}
const data = {
  password: "123456",
  phone_number: "+79041892739",
  name: "Swwww"
}



console.log(regUser(data))