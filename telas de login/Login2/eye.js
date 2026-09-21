let senha = document.getElementaryById("senha");
let icone = document.getElementsByClassName("olho");

function mostrar_senha() {
    if (senha.type != "text") {
        senha.type = "text";
        console.log(senha.type)
    }
    else {
        senha.type = "password";
    }
}