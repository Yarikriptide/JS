function formattedPhone(phone) {
  const cleanedPhone = phone.replace(/\D/g, ''); 
  let formatted = '';

  if (cleanedPhone.length === 10) {
    formatted = `+7 (${cleanedPhone.slice(0, 3)}) ${cleanedPhone.slice(3, 6)}-${cleanedPhone.slice(6, 8)}-${cleanedPhone.slice(8)}`;
  } else if (cleanedPhone.length === 11 && (cleanedPhone.startsWith('8') || cleanedPhone.startsWith('7'))) {
    formatted = `+7 (${cleanedPhone.slice(1, 4)}) ${cleanedPhone.slice(4, 7)}-${cleanedPhone.slice(7, 9)}-${cleanedPhone.slice(9)}`;
  } else {
    return 'Неверный формат номера телефона';
  }

  return formatted;
}

const formatButton = document.getElementById('formatButton');
const inputPhone = document.getElementById('phone');
const result = document.getElementById('result');

formatButton.addEventListener('click', () => {
  const phoneNumber = inputPhone.value;
  if (phoneNumber) {
    const formatted = formattedPhone(phoneNumber);
    result.textContent = formatted;
  } else {
    result.textContent = 'Вы не ввели номер телефона.';
  }
});
