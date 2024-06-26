let repeatcheck = "";
function buttonClick(element) {
let form1 = document.getElementById('loginid');
let form2 = document.getElementById('passwordid');
let form3 = document.getElementById('emailid');
let login = form1.value;
let password = form2.value;
let email = form3.value;
console.log(login);
console.log(password);
console.log(email);
if (email.length == 0 || password.length == 0 || login.length == 0) {
alert('Заполните все поля')
}
else if ((password.length > 15 || password.length < 4) && (login.length > 15 || login.length < 3)) {
  alert('Неверный формат имени и пароля')
}
else if (login.length > 15 || login.length < 3) {
alert('Неверный формат имени')
}
else if (password.length > 15 || password.length < 4) {
alert('Неверный формат пароля')
}
else if (login=='kks' && password == 'Yaprorok2001') {
  alert('Вам звонок');
  window.location = 'https://www.youtube.com/shorts/VA9m69tjpaQ';
}
else if (repeatcheck=="repeat"){
 
}
else {
  const registration_form = document.querySelector('.title_red');
  registration_form.insertAdjacentHTML(
    "afterend",
    '<div class="registration_done"><h5>Регистрация успешна<br><a href = "museum.html" class= "registration_done-link" > Вернуться на главную</a ></h5 > </div >'
  );
  repeatcheck = "repeat";
};
};




