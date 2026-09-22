let senha = document.getElementById("senha");
let icone = document.querySelector(".img-olho");

function mostrar_senha() {
    if (senha.type !== "text") {
        senha.type = "text";
        console.log(senha.type);
    }else {
        senha.type = "password";
       
    }
}