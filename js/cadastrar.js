let email = document.getElementById('email');
let senha = document.getElementById('senha');


//
document.getElementById('botaoLogin')
    .addEventListener('click', (e) => {
        e.preventDefault();
        window.open("../login.html");
        window.close();

    }
    );
document.getElementById('boataoCad')
    .addEventListener('click', (e) => {
        e.preventDefault();
        if (email.value !== " " || senha.value !== " ") {
            cadastro()
        } else {
            alert("Preencha o email e a senha")
            email.focus()
        }

    }
    );

/* Criando CRUD no Storage */

// Create - Cadastrar
function cadastro() {

    let email = document.getElementById('email');
    let senha = document.getElementById('senha');

    let usuarios = new Array();

    //Verificando se existe USUSARIO no Storage
    if (localStorage.hasOwnProperty('usuarios')) {
        //Recuperando os Valores da chave Usuarios
        //Convertendo a chave USUARIOS em objto
        usuarios = JSON.parse(localStorage.getElementById('usuarios'));

    }

    //Adicionar um novo usuario no sistema
    usuarios.push({ email, senha });

    //convertendo para String 
    usuarios.setItem('usuarios', JSON.stringify(usuarios));

    alert("Usuario Cadastrado com sucesso!")
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
    document.getElementById('email').focus();
}
