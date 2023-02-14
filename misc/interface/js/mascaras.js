//valida o CPF digitado
function ValidarCPF(Objcpf) {
        var cpf = Objcpf.value;
        exp = /\.|\-/g
        cpf = cpf.toString().replace(exp, "");
        var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
        var soma1 = 0,
                soma2 = 0;
        var vlr = 11;

        for (i = 0; i < 9; i++) {
                soma1 += eval(cpf.charAt(i) * (vlr - 1));
                soma2 += eval(cpf.charAt(i) * vlr);
                vlr--;
        }
        soma1 = (((soma1 * 10) % 11) == 10 ? 0 : ((soma1 * 10) % 11));
        soma2 = (((soma2 + (2 * soma1)) * 10) % 11);

        var digitoGerado = (soma1 * 10) + soma2;
        if (digitoGerado != digitoDigitado)
                alert('CPF Invalido!');
}

function validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') {
                alert('CPF Inválido!');
                return false;
        }
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
                cpf == "00000000000" ||
                cpf == "11111111111" ||
                cpf == "22222222222" ||
                cpf == "33333333333" ||
                cpf == "44444444444" ||
                cpf == "55555555555" ||
                cpf == "66666666666" ||
                cpf == "77777777777" ||
                cpf == "88888888888" ||
                cpf == "99999999999") {
                alert('CPF Invalido!');
                return false;
        }
        // Valida 1o digito	
        add = 0;
        for (i = 0; i < 9; i++)
                add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
                rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
                return false;
        // Valida 2o digito	
        add = 0;
        for (i = 0; i < 10; i++)
                add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
                rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
                return false;
        return true;
}

//valida telefone
function ValidaTelefone(tel) {
        exp = /\(\d{2}\)\ \d{4}\-\d{4}/
        if (!exp.test(tel.value))
                alert('Numero de Telefone Invalido!');
}

//adiciona mascara ao CPF
function MascaraCNPJ(CNPJ) {
        if (mascaraInteiro(CNPJ) == false) {
                event.returnValue = false;
        }
        return formataCampo(CNPJ, '00.000.000/0000-00', event);
}

function MascaraCPF(CPF) {
        if (mascaraInteiro(CPF) == false) {
                event.returnValue = false;
        }
        return formataCampo(CPF, '000.000.000-00', event);
}


//adiciona mascara ao telefone
function MascaraFone(tel) {
        if (mascaraInteiro(tel) == false) {
                event.returnValue = false;
        }
        return formataCampo(tel, '(00)00000-0000', event);
}

//valida numero inteiro com mascara
function mascaraInteiro() {
        if (event.keyCode < 48 || event.keyCode > 57) {
                event.returnValue = false;
                return false;
        }
        return true;
}

//formata de forma generica os campos
function formataCampo(campo, Mascara, evento) {
        var boleanoMascara;

        var Digitato = evento.keyCode;
        exp = /\-|\.|\/|\(|\)| /g
        campoSoNumeros = campo.value.toString().replace(exp, "");

        var posicaoCampo = 0;
        var NovoValorCampo = "";
        var TamanhoMascara = campoSoNumeros.length;;

        if (Digitato != 8) { // backspace 
                for (i = 0; i <= TamanhoMascara; i++) {
                        boleanoMascara = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".") ||
                                (Mascara.charAt(i) == "/"))
                        boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(") ||
                                (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "))
                        if (boleanoMascara) {
                                NovoValorCampo += Mascara.charAt(i);
                                TamanhoMascara++;
                        } else {
                                NovoValorCampo += campoSoNumeros.charAt(posicaoCampo);
                                posicaoCampo++;
                        }
                }
                campo.value = NovoValorCampo;
                return true;
        } else {
                return true;
        }
}

function validarCNPJ(cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
                return false;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
                cnpj == "11111111111111" ||
                cnpj == "22222222222222" ||
                cnpj == "33333333333333" ||
                cnpj == "44444444444444" ||
                cnpj == "55555555555555" ||
                cnpj == "66666666666666" ||
                cnpj == "77777777777777" ||
                cnpj == "88888888888888" ||
                cnpj == "99999999999999")
                return false;

        // Valida DVs
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                        pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
                return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                        pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
                return false;

        return true;

}