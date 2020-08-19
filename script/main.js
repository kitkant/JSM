let numberPhone = prompt(' Введите номер.\n Например: +71234567890')

const phone = document.querySelector('.phone')

function formattedPhone(numberPhone) {
    const reCheck = /^\+\d{11}$/
    const re = /^(\+\d)(\d{3})(\d{3})(\d{2})(\d{2})$/
    reCheck.test(numberPhone) ?  numberPhone = numberPhone.replace(re, '$1 ($2) $3-$4-$5') : numberPhone = formattedPhone(prompt(' Введите номер.\n Например: +71234567890'))
    phone.textContent = numberPhone
    return numberPhone
}
numberPhone = formattedPhone(numberPhone)
AOS.init();
// console.log(formattedPhone('+71234567899'));
// +80714217499
// +71234567890






