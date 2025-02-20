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
document.getElementById("console-input").addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        let command = this.value.toLocaleLowerCase();
        let response = "> Command not founded!";

        if (command ==="!aboutme") response = "> Junior programming student and tech enthusiast.";
        if (command ==="!github") response = "> My github https://github.com/SWAGGATH4K1NG";
        if (command ==="!help") response = "> Use the following commands [!about me, !github]"

        let consoleText = document.createElement("p");
        consoleText.textContent = `> ${command}`;
        document.getElementById("terminal").appendChild(consoleText);

        let consoleResponse = document.createElement("p");
        consoleResponse.textContent = response;
        document.getElementById("terminal").appendChild(consoleResponse);

        this.value = ""; // Cleans the input

    }

});
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
document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Mensagem Enviada!");
 });

 //PLUGIN TO SAY MESSAGE SENDED

