let button = document.querySelector('button');

function calcular(){
    let disciplina = document.querySelector('select').value;
    let nota1 = document.querySelector('#nota1').value;
    let nota2 = document.querySelector('#nota2').value;
    let nota3 = document.querySelector('#nota3').value;
    let nota4 = document.querySelector('#nota4').value;
    let  soma = parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4);

    Swal.fire(disciplina + 'média:' + soma/4);

}

button.addEventListener('click', calcular);


