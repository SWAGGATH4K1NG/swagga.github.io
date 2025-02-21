document.addEventListener("DOMContentLoaded",function() {
    document.querySelectorAll('.fade-in').forEach((element) => {
        element.classList.add('show');
    let titulo = document.getElementById("titulo");
    let texto = "Hello, i am Luís Moreira";
    let index = 0;
    

        function escreverTexto(){
            if (index < texto.length) {
                titulo.innerHTML += texto.charAt(index);
                index++;
                setTimeout(escreverTexto, 60);
            }
        }

        titulo.innerHTML = ""; // USED TO CLEAR THE TEXT BEFORE STARTS
        escreverTexto();
    });
});
// THIS IS FOR THE TERMINAL

// THIS IS THE END OF THE TERMINAL




// PLUGIN OF THE LIGHT AND DARK MODE
document.getElementById("toggle-theme").addEventListener("click", function(){
    document.body.classList.toggle("light-mode");
});

document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    this.classList.toggle("active");
});

document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    // Change the lamp icon
    let lampIcon = this.querySelector("i");
    if (document.body.classList.contains("light-mode")) {
        lampIcon.classList.remove("fa-lightbulb");
        lampIcon.classList.add("fa-moon"); // MOON ICON CHANGE TO LIGHT
    } else {
        lampIcon.classList.remove("fa-moon");
        lampIcon.classList.add("fa-lightbulb"); // ICON CHANGE TO DARK
    }
});
// PLUGIN OF THE LIGHT AND DARK MODE




// PLUGIN TO SAY MESSAGE SEND
let consoleInput = document.getElementById("console-input");
consoleInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        let command = this.value.toLowerCase();
        let response = "> Command not known";

        switch (command) {
            case "!aboutme":
                response = "> Junior programming student and tech enthusiast.";
                break;
            case "!github":
                response = "> My github https://github.com/SWAGGATH4K1NG";
                break;
            case "!help":
                response = "> Use the following commands [!aboutme, !github, !help]";
                break;
                case "!cls":
                let terminal = document.getElementById("terminal");
                terminal.querySelectorAll("p:not(.console-text)").forEach(p => p.remove());
                response = ""
                 break;

            
        }

        let terminal = document.getElementById("terminal");

        // Cria um novo elemento para mostrar o comando digitado
        let typingEffect = document.createElement("p");
        typingEffect.textContent = "> " + command;
        typingEffect.classList.add("typing");

        terminal.appendChild(typingEffect);

        // Remove a classe typing após um tempo (para dar efeito de digitação)
        setTimeout(() => {
            typingEffect.classList.remove("typing");
        }, 800);

        // Cria um novo elemento para mostrar a resposta
        setTimeout(() => {
            let consoleResponse = document.createElement("p");
            consoleResponse.textContent = response;
            terminal.appendChild(consoleResponse);
        }, 1000);

        this.value = "";
    }
});


// PLUGIN FOR WRITE ON THE CONSOLE 


// PRE LOADER
window.onload = function() {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
    }, 2000);
};



// PRE LOADER