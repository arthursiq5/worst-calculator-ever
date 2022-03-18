const buttons = document.querySelectorAll('.key li');
const input = document.querySelector('.input-valor');
const operador = document.querySelectorAll('.operador');

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    let btnVal = this.innerHTML;
    let inputVal = input.innerHTML;

    if (btnVal === 'c') {
      input.innerHTML = '';
    } else if (btnVal === '=') {
      let equacao = inputVal;

      if (equacao) {
        try {
          input.innerHTML = eval(equacao);
        } catch (e) {
          alert('Erro na expressão');
        }
      }
    } else {
      input.innerHTML += btnVal;
    }
  });
});
