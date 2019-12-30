document.addEventListener('DOMContentLoaded', function () {
   let elems = document.querySelectorAll('.datepicker');
   let instances = M.Datepicker.init(elems, {
      "format": "dd-mm-yyyy"
   });
});

let userEmail = getCookie('email');
console.log(userEmail);
ajax('core/get_user_data.php', 'POST', getUserData, { "email": userEmail });

function getCookie(cname) {
   let name = cname + "=";
   let decodedCookie = decodeURIComponent(document.cookie);
   let ca = decodedCookie.split(';');
   for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
         c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
      }
   }
   return "";
}

function getUserData(result) {
   result = JSON.parse(result);

   document.querySelector('#signup-name').value = result.name;
   document.querySelector('#signup-pass').value = result.password;
   document.querySelector('#signup-birthday').value = result.birthday;
   // document.querySelector('input[name=sex]:checked').value = result.sex;

   /* let sex = document.getElementsByName('sex').forEach(function (e) {
      console.log('work');
      let userSex;
      if (sex[e].checked) {
         userSex = sex[e].checked;
      }
      return userSex;
   }); */
   M.updateTextFields();
}

document.querySelector('#signup-submit').onclick = function (e) {
   e.preventDefault();
   let updateData = {
      "email": userEmail,
      "name": document.querySelector('#signup-name').value,
      "pass": document.querySelector('#signup-pass').value,
      "birthday": document.querySelector('#signup-birthday').value,
      /* "sex": document.querySelectorAll('.sex').forEach(function (e) {
         console.log('work');
         let sex;
         if (sex[e].checked) {
            sex = sex[e].checked;
         }
         return sex;
      }) */
   }
   ajax('core/update_user_data.php', 'POST', updateUserData, updateData);
}

function updateUserData(result) {
   console.log(result);
   if (result == 1) M.toast({ html: 'Изменения сохранены' });
   else M.toast({ html: 'Ошибка обновления' });
}