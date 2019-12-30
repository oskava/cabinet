document.querySelector('#signup-submit').onclick = function (e) {
   e.preventDefault();
   let name = document.querySelector('#signup-name').value;
   let pass = document.querySelector('#signup-pass').value;
   let email = document.querySelector('#signup-email').value;
   let birthday = document.querySelector('#signup-birthday').value;
   let sex = document.querySelectorAll('.sex');
   for (let i = 0; i < sex.length; i++) {
      if (sex[i].checked) {
          sex = sex[i].value;
          break;
      }
  }

   let data = {
      "name": name,
      "pass": pass,
      "email": email,
      "birthday": birthday,
      "sex": sex,
   }

   ajax('core/signup.php', 'POST', signup, data);

   function signup(result) {
      console.log(result);
      if (result == 2) {
         M.toast({html: 'Заполните поля'});
      }
      else if (result == 1) {
         M.toast({html: 'Вы зарегистрировались'});
         closeModal();
      }
      else {
         M.toast({html: 'Ошибка, повторите регистрацию позже'});
      }
   }
}


document.querySelector('#login-submit').onclick = function (e) {
   e.preventDefault();
   let pass = document.querySelector('#login-pass').value;
   let email = document.querySelector('#login-email').value;
   let data = {
      "email": email,
      "pass": pass
   }

   ajax('core/login.php', 'POST', login, data);

   function login(result) {
      if (result == 2) {
         M.toast({html: 'Заполните поля'});
      }
      else if (result == 0) {
         M.toast({html: 'Пользователь не найден'});
      }
      else {
         console.log(result);
         result = JSON.parse(result);
         let d = new Date();
         d.setTime(d.getTime() + (10 * 60 * 1000));
         let expires = d.toUTCString();
         document.cookie = `email=${result.email}; expires=${expires}; path=/`;
         location.href = "cabinet.php";
      }
   }
}

