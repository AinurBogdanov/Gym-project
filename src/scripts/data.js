console.log('geting user')

export let user = JSON.parse(localStorage.getItem('userAuth')) || {auth: false, phone_number: ''};

export const order = JSON.parse(localStorage.getItem('order')) || {name: ''};