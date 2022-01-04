const search = document.querySelector('.search'),
      btn    = document.querySelector('.btn'),
      input  = document.querySelector('.input');

      btn.addEventListener('click', () => {
            search.classList.add('active')
            input.focus()
      })