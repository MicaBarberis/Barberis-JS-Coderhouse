// DESAFIO COMPLEMENTARIO Nº 1 //
/* Es una adivinanza, el ganador obtendrá un premio, y el que pierda, tendra otra oportunidad */

let nombreUsuario = prompt("Ingrese su nombre");
if (nombreUsuario == "") {
    alert("No ingresaste tu nombre");
}
while (nombreUsuario == "")
    nombreUsuario = prompt("Ingrese su nombre");

if (nombreUsuario === nombreUsuario) {
    alert("Hola " + nombreUsuario + " ¿listo para jugar?")
    opcion = prompt("1. SI     2. NO")
}
let cerrar = "no"
while (opcion !== "no") {
    let adivinanza = prompt("Vuelo de noche, duermo de día y nunca verás plumas en mis alas. ¿Qué animal soy?");

    if (adivinanza === "murcielago") {
        alert("FELICIDADES, has ganado un premio")
        break
    }

    if (adivinanza !== "murcielago") {
        alert("PERDISTE, no ganaste nada D:, pero tienes otra chance :D")
        let adivinanza = prompt("Si me miras del revés, me verás como animal, pero si tú al derecho me miras, yo seré un vegetal. ¿Qué comida soy?");
        if (adivinanza === "arroz"){
            alert("FELICIDADES, has ganado un premio")
            break
        }
    }
}

