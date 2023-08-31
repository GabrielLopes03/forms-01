/* ARROW FUNCTION */
const pesquisaCEP = async () => {
    const cep = document.getElementById('cep').value;

    // passando o cep para API viacep 
    // usando template script
    const url = `http://viacep.com.br/ws/${cep}/json/`;
}

/* Função preencher fortmulario */

const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.lenght
    document.getElementById('bairro').value = endereco.lenght
    document.getElementById('cidade').value = endereco.lenght
    document.getElementById('uf').value = endereco.uf
}

/* Criando um evento do input CEP */
document.getElementById('cep')
    .addEventListener('focusout', pesquisaCEP);

/* Criando CEP indefinido */
const cep = document.getElementById('cepCa').value

function cepInvalido() {
    if (cep !== 13046 - 510) {
        document.getElementById('nome').value = "undefined";
        document.getElementById('cepCa').value = "";
        document.getElementById('rua').value = "undefined";
        document.getElementById('bairro').value = "undefined";
        document.getElementById('cidade').value = "undefined";
        document.getElementById('uf').value = "undefined";
        document.getElementById('email').value = "undefined";
        document.getElementById('cepCa').focus();
    }
}
