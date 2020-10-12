alert("Esta es una alerta de lo que veras");

var nombre = "Carlos Ruiz";
var edad = 25;

var concatenacion = nombre + " " +edad +" años"; 

var datosPersonales = document.getElementById("datosPersonales");
datosPersonales.innerHTML = `
    <h2>Caja de datos</h2>
    <h3>Mi nombre es ${nombre}</h3>
    <h3>Tengo ${edad} años</h3>`;

if(edad >= 30){
    datosPersonales.innerHTML += "<h4>Ya eres un SEÑOR</h4>";
}else{
    datosPersonales.innerHTML += "<h4>Aun eres un CHAVITO</h4>";
}

for(i=0; i <= 7; i++){
    //bloque de instrucciones hasta que tope con 16
    datosPersonales.innerHTML += "<h6>Numero: "+i;
}

function MuestraMiMascota (nombre, raza, edad){
    var mascota = document.getElementById("mascota");
    mascota.innerHTML = `
    <h2>Datos de la mascota</h2>
    <h3>Su nombre es ${nombre}</h3>
    <h3>Es de raza ${raza}</h3>
    <h3>Tiene ${edad} años</h3>`;
}

MuestraMiMascota("Tobby", "Pitbull", 2);

var animales = [Perro, Conejo, Gato];
document.write('<h1>Lista de animales</h1>');

animales.forEach((nombre) => {
    document.write(nombre + '<br/>');
});