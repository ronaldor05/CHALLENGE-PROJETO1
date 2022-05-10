
const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada
}
    function btnDesencriptar(){
        const textodesEncriptado = desencriptar(inputTexto.value)
        mensagem.value = textodesEncriptado
    }
        
    function desencriptar(stringdesEncriptada){
        let matrizCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
        stringdesEncriptada = stringdesEncriptada.toLowerCase();
    
        for(let i=0;i<matrizCodigo.length;i++){
            if(stringdesEncriptada.includes(matrizCodigo[i][0])){
                stringdesEncriptada = stringdesEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }
    return stringdesEncriptada
}
