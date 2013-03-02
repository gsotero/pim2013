// JavaScript Document

//Esta função funciona como se fosse ".replace" porém removendo todos os caracteres passados por parametros para que seja removido, 
//ao invez do ".replace" cujo só remove 1 caracter
String.prototype.replaceAll = function (token, newToken, ignoreCase) {
    var str, i = -1, _token;
    if ((str = this.toString()) && typeof token === "string") {
        _token = ignoreCase === true ? token.toLowerCase() : undefined;
        while ((i = (
            _token !== undefined ?
                str.toLowerCase().indexOf(
                            _token,
                            i >= 0 ? i + newToken.length : 0
                ) : str.indexOf(
                            token,
                            i >= 0 ? i + newToken.length : 0
                )
        )) !== -1) {
            str = str.substring(0, i)
                    .concat(newToken)
                    .concat(str.substring(i + token.length));
        }
    }
    return str;
};

// Seta mascada de moédas.
function MascaraMoeda(objTextBox, SeparadorMilesimo, SeparadorDecimal, e) {
    somente_numero_moeda(objTextBox);
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    //var whichCode = (window.Event) ? e.which : e.keyCode;

    if (navigator.appName == 'Microsoft Internet Explorer') {
        var whichCode = e.keyCode;
    } else if (navigator.appName == 'Netscape') {
        var whichCode = e.which;
    }

    if (whichCode == 13) return true;
    key = String.fromCharCode(whichCode); // Valor para o código da Chave
    if (strCheck.indexOf(key) == -1) return false; // Chave inválida
    len = objTextBox.value.length;

    if (len > 11) return;


    for (i = 0; i < len; i++)
        if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) break;
    aux = '';
    for (; i < len; i++)
        if (strCheck.indexOf(objTextBox.value.charAt(i)) != -1) aux += objTextBox.value.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) objTextBox.value = '';
    if (len == 1) objTextBox.value = '0' + SeparadorDecimal + '0' + aux;
    if (len == 2) objTextBox.value = '0' + SeparadorDecimal + aux;
    if (len > 2) {
        aux2 = '';
        for (j = 0, i = len - 3; i >= 0; i--) {
            if (j == 3) {
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--)
            objTextBox.value += aux2.charAt(i);
        objTextBox.value += SeparadorDecimal + aux.substr(len - 2, len);
    }
    return false;
}

function MascaraPorcentagemString(value) {

    var valueString = new String();
    var real;
    real = "";
    var contador; //contador de pontos

    valueString = value.toString();

    if (value.length >= 6) {
        return "999,99";
    }

    contador = 0;

    if (value.length == 1) value = "0" + value;
    if (value.length == 2) value = "0" + value;

    for (interador = value.length - 1; interador >= 0; interador--) {


        real = value.charAt(interador) + real;

        if (interador == value.length - 2)
            real = ',' + real;


        if (interador < valueString.length - 2) {
            contador++;
            if (contador == 3 && interador != 0) {
                real = '.' + real;
                contador = 0;
            }
        }
    }
    return real;
}

//adiciona mascara na hora
function MascaraHora(hora) {
    somente_numero(hora)

    if (mascaraInteiro(hora) == false) {
        event.returnValue = false;
    }
    return formataCampo(hora, '00:00', event);
}

function MascaraDia(dia) {
    somente_numero(dia)

    if (mascaraInteiro(dia) == false) {
        event.returnValue = false;
    }
    return formataCampo(dia, '00', event);
}

//adiciona mascara de cnpj
function MascaraCNPJ(cnpj) {
    somente_numero(cnpj)

    if (mascaraInteiro(cnpj) == false) {
        event.returnValue = false;
    }
    return formataCampo(cnpj, '00.000.000/0000-00', event);
}

//adiciona mascara de cep 
function MascaraCep(cep) {
    somente_numero(cep)

    if (mascaraInteiro(cep) == false) {
        event.returnValue = false;
    }
    return formataCampo(cep, '00.000-000', event);
}

function somente_numero(campo) {

    var digits = "0123456789"
    var campo_temp = campo.value;
    var caractere
    for (var i = 0; i <= campo.value.length; i++) {
        if (i + 1 != null) {
            caractere = campo.value.substring(i, i + 1);
        }
        else { caractere = campo.value.substring(i); }
        if (digits.indexOf(caractere) == -1) {
            campo_temp = campo_temp.replace(caractere, "");
        }
    }
    campo.value = campo_temp;
}
function somente_numero_moeda(campo) {

    var digits = "0123456789.,"
    var campo_temp = campo.value;
    var caractere
    for (var i = 0; i <= campo.value.length; i++) {
        if (i + 1 != null) {
            caractere = campo.value.substring(i, i + 1);
        }
        else { caractere = campo.value.substring(i); }
        if (digits.indexOf(caractere) == -1) {
            campo_temp = campo_temp.replace(caractere, "");
        }
    }
    campo.value = campo_temp;
}

//adiciona mascara de inscrição estadual 
function MascaraInscricaoEstadual(inscricao) {
    somente_numero(inscricao)

    if (mascaraInteiro(inscricao) == false) {
        event.returnValue = false;
    }
    return formataCampo(inscricao, '0000.0000.0000.0000', event);
}

//adiciona mascara de inscrição municipal 
function MascaraInscricaoMunicipal(inscricao) {
    somente_numero(inscricao)

    if (mascaraInteiro(inscricao) == false) {
        event.returnValue = false;
    }
    return formataCampo(inscricao, '000000-0', event);
}

//adiciona mascara de data 
function MascaraData(data) {
    somente_numero(data)

    if (mascaraInteiro(data) == false) {
        event.returnValue = false;
    }
    return formataCampo(data, '00/00/0000', event);
}

//adiciona mascara ao telefone 
function MascaraTelefone(tel) {
    somente_numero(tel);
    if (mascaraInteiro(tel) == false) {
        event.returnValue = false;
    }

    var valor = tel.value.toString();

    if (valor == "") {
        return;
    }

    valor = valor.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');

    if (valor.length > 10) {
        return formataCampo(tel, '(00) 00000-0000', event);
    }
    return formataCampo(tel, '(00) 0000-0000', event);
}


//adiciona mascara ao ramal 
function MascaraRamal(tel) {
    somente_numero(tel)

    if (mascaraInteiro(tel) == false) {
        event.returnValue = false;
    }
    return formataCampo(tel, '0000', event);
}

//adiciona mascara ao CPF 
function MascaraCPF(cpf) {
    somente_numero(cpf)

    if (mascaraInteiro(cpf) == false) {
        event.returnValue = false;
    }
    return formataCampo(cpf, '000.000.000-00', event);
}


//valida telefone 
function ValidaTelefone(tel) {
    exp = /\(\d{2}\)\ \d{4}\-\d{4}/
    if (!exp.test(tel.value))
        alert('Número de Telefone Inválido!');
}

//valida hora
function ValidaHora(hora) {
    hrs = (hora.value.substring(0, 2));
    min = (hora.value.substring(3, 5));
    if ((hrs < 00) || (hrs > 23) || (min < 00) || (min > 59)) {
        //        alert("Hora inválida!");
        hora.focus();
    }
}

function ValidaDia(dia) {
    if ((dia.value <= 00) || (dia.value >= 32))
        alert('Dia Inválido!');
}

//valida celular
function ValidaCelular(tel) {
    exp = /\(\d{2}\)\ \d{4}\-\d{4}/
    if (!exp.test(tel.value))
        alert('Número de Celular Inválido!');
}

//valida CEP 
function ValidaCep(cep) {
    exp = /\d{2}\.\d{3}\-\d{3}/
    if (!exp.test(cep.value))
        alert('Número de Cep Inválido!');
}

//valida data 
function ValidaData(data) {
    exp = /\d{2}\/\d{2}\/\d{4}/
    if (!exp.test(data.value))
        alert('Data Inválida!');
}

//valida o CPF digitado 
function ValidarCPF(Objcpf) {
    var cpf = Objcpf.value;
    exp = /\.|\-/g
    cpf = cpf.toString().replace(exp, "");
    var digitoDigitado = eval(cpf.charAt(9) + cpf.charAt(10));
    var soma1 = 0, soma2 = 0;
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
        alert('CPF Inválido!');
}

//valida numero inteiro com mascara 
function mascaraInteiro() {
    if (event.keyCode < 48 || event.keyCode > 57) {
        event.returnValue = false;
        return false;
    }
    return true;
}



//valida o CNPJ digitado 
function ValidarCNPJ(ObjCnpj) {
    var cnpj = ObjCnpj.value;
    var valida = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
    var dig1 = new Number;
    var dig2 = new Number;

    exp = /\.|\-|\//g
    cnpj = cnpj.toString().replace(exp, "");
    var digito = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

    for (i = 0; i < valida.length; i++) {
        dig1 += (i > 0 ? (cnpj.charAt(i - 1) * valida[i]) : 0);
        dig2 += cnpj.charAt(i) * valida[i];
    }
    dig1 = (((dig1 % 11) < 2) ? 0 : (11 - (dig1 % 11)));
    dig2 = (((dig2 % 11) < 2) ? 0 : (11 - (dig2 % 11)));

    if (((dig1 * 10) + dig2) != digito)
        alert('CNPJ Inválido!');

}

//formata de forma generica os campos 
function formataCampo(campo, Mascara, evento) {
    var boleanoMascara;

    var Digitato = evento.keyCode;
    exp = /\-|\.|\/|\(|\)|\:| /g
    campoSoNumeros = campo.value.toString().replace(exp, "");

    var posicaoCampo = 0;
    var NovoValorCampo = "";
    var TamanhoMascara = campoSoNumeros.length; ;

    if (Digitato != 8) { // backspace  
        for (i = 0; i <= TamanhoMascara; i++) {
            boleanoMascara = ((Mascara.charAt(i) == "-") || (Mascara.charAt(i) == ".")
                                                                || (Mascara.charAt(i) == "/") || (Mascara.charAt(i) == ":"))
            boleanoMascara = boleanoMascara || ((Mascara.charAt(i) == "(")
                                                                || (Mascara.charAt(i) == ")") || (Mascara.charAt(i) == " "))
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

