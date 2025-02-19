document.addEventListener("DOMContentLoaded",function() {
    document.querySelectorAll('.fade-in').forEach((element) => {
        element.classList.add('show');
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
});

document.getElementById("console-input").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        let command = this.value.toLocaleLowerCase();
        let response = "> Command not founded!";

        if (command ==="!about me") response = "> Junior programming student and tech enthusiast.";
        if (command ==="!github") response = "> My github https://github.com/SWAGGATH4K1NG";
        if (command ==="!help") response = "> Use the following commands [!about me, ! github]"

        let consoleText = document.createElement("p");
        consoleText.textContent = `> ${command}`;
        document.getElementById("terminal").appendChild(consoleText);

        let consoleResponse = document.createElement("p");
        consoleResponse.textContent = response;
        document.getElementById("terminal").appendChild(consoleResponse);

        this.value = ""; // Cleans the input

    }

});

document.getElementById("toggle-theme").addEventListener("click", function(){
    document.body.classList.toggle("light-mode");
});