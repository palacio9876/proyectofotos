const fulimgBox= document.getElementById("fulimgBox"),
fulimg= document.getElementById("fulimg");

function openFulimg(reference){
    fulimgBox.style.display="flex";
    fulimg.src= reference;
}

function closeImg(){
    fulimgBox.style.display = "none";
}
function guardar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let genero = document.getElementById("genero").value;
    let edad = document.getElementById("age").value;
    let clave = document.getElementById("clave").value;

    let dataUser = { 'name': nombre,'apellido':apellido, 'email': email, 'age': edad ,'genero':genero, 'clave':clave};
    localStorage.setItem("data", JSON.stringify(dataUser));
}

function mostrarDatos() {
    let datosUsuario = JSON.parse(localStorage.getItem("data"));
    console.log( datosUsuario);
}