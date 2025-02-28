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


const pageanimate = [
    "Welcome to my Portefolio",
    "Web Dev and Mobile"
];

let index = 0;
const titleElement = document.getElementById("pageanimate");

function changepageanimate() {
    index = (index + 1) % pageanimate.length;
    titleElement.textContent = pageanimate[index]; 
    titleElement.classList.add('show'); 
}

setInterval(changepageanimate, 3000);



// THIS IS FOR LOADING SKILL BARS
function animateSkills() {
    let skills = document.querySelectorAll(".fill");

    skills.forEach(skill => {
        let fillValue = skill.style.width;
        skill.style.width = "0%";
        setTimeout(() => {
            skill.style.width = fillValue;
        }, 200);
    });
}

function checkSkillsVisibility() {
    let section = document.querySelector("#skills");
    let sectionPosition = section.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight) {
        animateSkills();
        window.removeEventListener("scroll", checkSkillsVisibility);
    }
}


window.addEventListener("scroll", checkSkillsVisibility);
// THIS IS FOR LOADING SKILL BAR







// THIS IS FOR THE GLITCH BUTTON
document.getElementById("glitch-toggle").addEventListener("click", function() {
    document.body.classList.toggle("glitch-mode");
});
// THIS IS FOR THE GLITCH BUTTON

// PLUGIN OF THE LIGHT AND DARK MODE
document.addEventListener("DOMContentLoaded", function () {
    let lampIcon = document.getElementById("lamp-icon");

    
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        lampIcon.style.color = "yellow";
    } else {
        document.body.classList.remove("light-mode");
        lampIcon.style.color = "gray"; 
    }

 
    lampIcon.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            lampIcon.style.color = "yellow"; 
            localStorage.setItem("theme", "light"); 
        } else {
            lampIcon.style.color = "gray";
            localStorage.setItem("theme", "dark");
        }
    });
});
// PLUGIN OF THE LIGHT AND DARK MODE




// PLUGIN FOR WRITE ON THE CONSOLE 
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
                response = "> Use the following commands [!aboutme, !github , !cls]";
                break;
                case "!cls":
                let terminal = document.getElementById("terminal");
                terminal.querySelectorAll("p:not(.console-text)").forEach(p => p.remove());
                response = ""
                 break;

            
        }

        let terminal = document.getElementById("terminal");

        let typingEffect = document.createElement("p");
        typingEffect.textContent = "> " + command;
        typingEffect.classList.add("typing");

        terminal.appendChild(typingEffect);

        setTimeout(() => {
            typingEffect.classList.remove("typing");
        }, 800);

       
        setTimeout(() => {
            let consoleResponse = document.createElement("p");
            consoleResponse.textContent = response;
            terminal.appendChild(consoleResponse);
        }, 1000);

        this.value = "";
    }
});
// PLUGIN FOR WRITE ON THE CONSOLE 


// NOTIFICATIONS
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let popup = document.getElementById("contact-popup");
    popup.classList.remove("hidden");
    popup.classList.add("show");

    ["name", "email", "message"].forEach(id => document.getElementById(id).value = "");

    setTimeout(() => {
        popup.classList.remove("show");
        popup.classList.add("hidden");
    }, 3000);
});
// NOTIFICATIONS MESSAGE SEND 


// NOTIFICATIONS

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll(".page-animate").forEach((el) => {
            el.classList.add("show");
        });
    });
// NOTIFICATIONS  