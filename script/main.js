document.addEventListener('DOMContentLoaded', function () {
   let elems = document.querySelectorAll('.datepicker');
   let instances = M.Datepicker.init(elems, {
      "format": "dd-mm-yyyy"
   });
});

document.querySelectorAll('.modal-show').forEach(function (e) {
   e.onclick = showModal;
});

function showModal() {
   let modalId = this.dataset.modal;
   document.querySelector(modalId).classList.remove('hide');
   document.onkeydown = function (e) {
      // закрываем окно кнопкой Esc
      if (e.keyCode == 27) closeModal();
   }
}

document.querySelectorAll('.modal-wrap').forEach(function (e) {
   // закрываем окно по клику на серой области
   e.onclick = closeModal;
});

document.querySelectorAll('.modal-project-close').forEach(function (e) {
   // закрываем окно кнопкой закрыть
   e.onclick = closeModal;
});

function closeModal() {
  
   document.querySelectorAll('.modal-wrap').forEach(function (e) {
      e.classList.add('hide');
   });
   document.onkeydown = null;
}

document.querySelector('#login .modal-project').onclick = function(e) {
   e.stopPropagation();
}

document.querySelector('#signup .modal-project').onclick = function(e) {
   e.stopPropagation();
}


document.querySelector('.read-rules').onclick = function () {
   document.querySelector('.form-slider').style.marginLeft = '-370px';
}

document.querySelectorAll('.read-rules-back').forEach(function(e) {
   e.onclick = function () {
      document.querySelector('.form-slider').style.marginLeft = '0';
   }
});

document.querySelector('.checkbox-rules').onclick = function() {
   if (this.checked) {
      document.querySelector('#signup-submit').classList.remove('disabled');
   }
   else {
      document.querySelector('#signup-submit').classList.add('disabled');
   }
      
}


