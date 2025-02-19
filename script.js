document.addEventListener("DOMContentLoaded",function() { 
    let titulo = document.getElementById("titulo");
    let texto = "Olá, eu sou o Luís Moreira";
    let index = 0;

        function escreverTexto(){
            if (index < texto.length) {
                titulo.innerHTML += texto.charAt(index);
                index++;
                setTimeout(escreverTexto, 60);
            }
        }

        titulo.innerHTML = ""; // usado para limpar texto antes de iniciar
        escreverTexto();
    });