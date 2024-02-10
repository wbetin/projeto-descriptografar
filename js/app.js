function ocultaDiv() {
    var dadosTextArea = document.getElementById("textArea").value;
    var dadosImagem = document.getElementById("informacao");
    var dadosCriptografados = document.getElementById("resultado__criptografado");
    var botaoCopiar = document.getElementById("copiar");

    if (dadosTextArea.trim() !== "") {
        dadosImagem.style.display = "none";
        dadosCriptografados.style.display = "block";
        botaoCopiar.style.display = "block";
    } else {
        dadosImagem.style.display = "block";
        dadosCriptografados.style.display = "none";
        botaoCopiar.style.display = "block";
    }
    document.getElementById("resultado__criptografado").innerHTML = dadosTextArea;
}

function criptografarMensagem() {
    let mensagemOriginal = document.getElementById("textArea").value;
    let mensagemCifrada = criptografar(mensagemOriginal);
    document.getElementById("resultado__criptografado").innerHTML = mensagemCifrada;
    limparTextArea();
}

function descriptografarMensagem() {
    let mensagemOriginal = document.getElementById("textArea").value;
    let mensagemDecifrada = descriptografar(mensagemOriginal);
    document.getElementById("resultado__criptografado").innerHTML = mensagemDecifrada;
    limparTextArea();
}

function criptografar(mensagem) {
    let mensagemCifrada = "";
    for (let i = 0; i < mensagem.length; i++) {
        let caractere = mensagem[i];
        if (caractere === "e") {
            mensagemCifrada += "enter";
        } else if (caractere === "i") {
            mensagemCifrada += "imes";
        } else if (caractere === "a" && i <= mensagem.length - 1 && mensagem[i + 1] !== "i") {
            mensagemCifrada += "ai";
        } else if (caractere === "o") {
            mensagemCifrada += "ober";
        } else if (caractere === "u") {
            mensagemCifrada += "ufat";
        } else {
            mensagemCifrada += caractere;
        }
    }
    return mensagemCifrada;
}

function descriptografar(mensagemCifrada) {
    let mensagemDecifrada = "";
    let i = 0;
    while (i < mensagemCifrada.length) {
        if (mensagemCifrada.substring(i, i + 5) === "enter") {
            mensagemDecifrada += "e";
            i += 5;
        } else if (mensagemCifrada.substring(i, i + 4) === "imes") {
            mensagemDecifrada += "i";
            i += 4;
        } else if (mensagemCifrada.substring(i, i + 2) === "ai") {
            mensagemDecifrada += "a";
            i += 2;
        } else if (mensagemCifrada.substring(i, i + 4) === "ober") {
            mensagemDecifrada += "o";
            i += 4;
        } else if (mensagemCifrada.substring(i, i + 4) === "ufat") {
            mensagemDecifrada += "u";
            i += 4;
        } else {
            mensagemDecifrada += mensagemCifrada[i];
            i++;
        }
    }
    return mensagemDecifrada;
}

function copiarDados() {
    let dadosDescriptografados = document.getElementById("resultado__criptografado");
    let range = document.createRange();
    range.selectNode(dadosDescriptografados);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }
  
  function limparCarmpo(){
    chute = document.querySelector('input');
    chute.value = '';
}

  function limparTextArea(){
    let dadosTextArea = document.getElementById("textArea"); 
    dadosTextArea.value = '';
  }

  function exibirBotao() {
    var botaoCopiar = document.getElementsByClassName("botao-2");
    botaoCopiar.style.display = "block";
  }