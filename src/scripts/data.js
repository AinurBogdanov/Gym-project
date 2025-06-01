export let user = JSON.parse(localStorage.getItem('userAuth')) || {auth: false, phone: ''};

export const order = JSON.parse(localStorage.getItem('order')) || {name: ''};