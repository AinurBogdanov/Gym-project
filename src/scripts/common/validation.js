export function isNumberVal(phone_number) {
  const phone =  phone_number.replace(/\s+/g, ""); 
  const onlyDigits = phone.replace(/\D/g, '');

 return phone.startsWith('+7') && /^\d{11}$/.test(onlyDigits) 
}

export function isPasswordVal(password) {
  const length = password.length
  if(length >= 4 && length <= 10 ) {
    return true 
  }
  return false
}