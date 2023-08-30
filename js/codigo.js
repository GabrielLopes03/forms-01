

function cad() {



    const nome = document.getElementById('nome').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const email = document.getElementById('email').value;

    if (nome !== '' && cep !== '' && rua !== '' && bairro !== '' && cidade !== ''
        && uf !== '' && email !== '') {
        alert("Você esta cadastrado")
    } else {
        alert("Por favor preencha todos os campos")
    }


}

