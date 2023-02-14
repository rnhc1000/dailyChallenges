function valirdarDados(){
    if(document.getElementById('iNomeTitular').value == ''){
        alert("Preencha o nome do Titular igual ao impresso no Cartão");
        return false;
    }
    if(document.getElementById('cc-exp').value == ''){
         alert("Preencha a Data de Expiração no formato MM/AA");
        return false;
    }
    if(document.getElementById('cc-number').value == ''){
         alert("Preencha o Número do Cartão");
        return false;
    }
    if(document.getElementById('cc-number').value == ''){
         alert("Preencha o Número do Cartão");
        return false;
    }
    if(document.getElementById('cc-cvc').value == ''){
         alert("Preencha o Código de Segurança");
        return false;
    }
    
    document.checkout.submit();
}

