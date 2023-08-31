/* function limpaForm(){
    document.getElementById('nome').value = "";
    document.getElementById('cep').value = "";
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('email').value = "";
    document.getElementById('nome').focus();
} */

function limpaForm() {
    if (cep == 13046-510) {
        alert("CEP invalido")

        document.getElementById('nome').value = "";
        document.getElementById('cep').value = "";
        document.getElementById('rua').value = "";
        document.getElementById('bairro').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('uf').value = "";
        document.getElementById('email').value = "";
        document.getElementById('cep').focus();
    } else {
        alert ("você esta cadastrado")
    }
}