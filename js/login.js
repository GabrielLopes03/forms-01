function verifica() {
    /* Pegando os valores do email e senha */
    let email = document.querySelector("#username").value;
    let senha = document.getElementById('password').value;

    if (email == "" || senha == "") {
        alert("Preencha todos os campos")
        document.querySelector("#username").focus()
    } else {
        pesquisa(email, senha)
    }
}

function pesquisa(email, senha) {

    if (email == "gsbriel.a.lopes@gmail.com" && senha == 12345678) {

        window.open("index.html")
    }
}