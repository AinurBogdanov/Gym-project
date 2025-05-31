export let user = JSON.parse(localStorage.getItem('userAuth')) || {auth: false, phone: '+79049009090'};

export const order = JSON.parse(localStorage.getItem('order')) || {name: ''};