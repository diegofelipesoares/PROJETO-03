const form = document.getElementById("form-deposito");

function validaNome(nomeCompleto) { //função valida nome, com parametro nomeCompleto
    const nomeComoArray = nomeCompleto.split(" "); //divide o conteúdo de nome completo 
    return nomeComoArray.length >= 2; // retorna true / false

}

form.addEventListener("submit", function(e){ //funão com parametro "e" para 
    let formEValido = false   ;
    e.preventDefault(); // não atualizar a página

        //cria constante para capturar a informação do form.
    const nomeBeneficiario = document.getElementById("nome-beneficiario");
    const numeroContaBeneficiario = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta ${numeroContaBeneficiario.value}`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) { 
        //pergunta se o valor retornado de valiadaNome é falso
       alert(mensagemSucesso)
       // se for falso, dispara o texto acima de alerta
       // vamos agora limpar os campos em caso de sucesso.
       nomeBeneficiario.value = " ";
       numeroContaBeneficiario.value = " ";
       valorDeposito.value = " ";

    }else{
        alert("O nome não está completo")
    
    }
})
console.log(form);
