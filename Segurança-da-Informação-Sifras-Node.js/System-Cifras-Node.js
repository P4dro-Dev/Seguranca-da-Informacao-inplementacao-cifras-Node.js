// cifra_cesar.js

function codificar(deslocamento, texto) {
    let resultado = "";
    
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        
        // Verifica se é uma letra maiúscula
        if (char.match(/[A-Z]/)) {
            let codigo = texto.charCodeAt(i);
            // A = 65, Z = 90
            let novoCodigo = ((codigo - 65 + deslocamento) % 26) + 65;
            resultado += String.fromCharCode(novoCodigo);
        } 
        // Verifica se é uma letra minúscula
        else if (char.match(/[a-z]/)) {
            let codigo = texto.charCodeAt(i);
            // a = 97, z = 122
            let novoCodigo = ((codigo - 97 + deslocamento) % 26) + 97;
            resultado += String.fromCharCode(novoCodigo);
        } 
        // Mantém outros caracteres sem alteração
        else {
            resultado += char;
        }
    }
    
    return resultado;
}

function decodificar(deslocamento, texto) {
    // Decodificar é o mesmo que codificar com o deslocamento negativo
    return codificar(-deslocamento, texto);
}

const mensagemOriginal = "Hello, World!";
const deslocamento = 3;

const mensagemCodificada = codificar(deslocamento, mensagemOriginal);
console.log("Mensagem codificada:", mensagemCodificada);

const mensagemDecodificada = decodificar(deslocamento, mensagemCodificada);
console.log("Mensagem decodificada:", mensagemDecodificada);