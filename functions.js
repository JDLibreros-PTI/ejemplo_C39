function saludar(){
    console.log("Hola Mundo");
    alert("Hola Mundo");
}

function mostrarHoraAlerta() {
    // 1. Crear un objeto de fecha actual
    const ahora = new Date();
    
    // 2. Extraer horas, minutos y segundos
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    
    // 3. Formatear para que tengan dos dígitos (ej. 05 en lugar de 5)
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    
    // 4. Crear la cadena de texto de la hora
    const horaActual = horas + ":" + minutos + ":" + segundos;
    
    // 5. Mostrar la alerta
    alert("La hora actual es: " + horaActual);
}
