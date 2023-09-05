/* Criando evento botão */
document.getElementById('botaoEntrar')
        .addEventListener ('click',(e) =>{
            e.preventDefault();
        })

function verificar(){
    //Pegando o s valores do input email e senha
    let email = document.getElementById('username').value;
    let senha = document.getElementById('password').value;

    if(email == "" || senha == ""){
        alert("Obrigatorio o preenchimento de todos os campos")
        document.getElementById('username').focus();
    } else{
        consultar(email,senha);
    };

};

function consultar(email,senha){
    let usuarios = new Array();//Aqui estamos definindo uma matriz

    //Verificando se a chave usurios existe no local
    if(localStorage.hasOwmProperty('usuarios')){
        //Recuperar os valores da propriedades usuarios do localStorge
        //Convertendo o USUARIO para objeto

        usuarios = JSON.parse(localStorage.get('usuarios'))

    }

    for(let i = 0;i<usuarios.length;i++){

        if(usuarios[i].email == email && usuario[i].senha == senha){
            window.open("../assets/index.html")
            window.close();
            break;
        }

    }
}
alert("email ou senha inválido");
document.getElementById('username').focus()