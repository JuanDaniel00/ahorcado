// Hacer el juego ahorcado, donde se pueda seleccionar una de las 3 categorias que hay, y despues una de las 3 dificultades que hay, cada categoria es unica con sus palabras, y cada dificultad tiene sus cosas (vidas, las letras no se bloquean y se pueden volver a seleccionar pero le quitaran una vida al usuario, etc).
// El juego debe tener un contador de vidas, y un contador de intentos, y un contador de palabras acertadas, y un contador de palabras falladas.
// El juego debe tener un boton de reiniciar, y un boton de salir.

// 1. Seleccionar una de las 3 categorias

// 2. Seleccionar una de las 3 dificultades

let categorias = [
    {
        nombre: "Videojuegos",
        palabras: ["Mario", "Zelda", "Pokemon", "Sonic", "Fortnite", "Minecraft", "League of Legends", "Valorant", "Among Us", "Genshin Impact", "Overwatch", "Apex Legends", "Call of Duty", "FIFA", "NBA", "Madden", "Rocket League", "Halo", "GTA", "Red Dead Redemption", "Assassins Creed", "Cyberpunk", "The Witcher", "God of War", "Uncharted", "The Last of Us", "Spiderman", "Ratchet and Clank", "Crash Bandicoot", "Resident Evil", "Final Fantasy", "Kingdom Hearts", "Metal Gear Solid", "Street Fighter", "Tekken", "Mortal Kombat", "Super Smash"]
    },
    {
        nombre: "Lenguajes de programacion",
        palabras: ["Python", "Java", "C", "Javascript", "Typescript", "HTML", "CSS", "PHP", "Ruby", "Swift", "Kotlin", "Rust", "Go", "Scala", "Perl", "Lua", "R", "Matlab", "SQL", "NoSQL", "MongoDB", "Firebase", "PostgreSQL", "MySQL", "MariaDB", "SQLite", "Oracle", "SQL Server"]
    },
    {
        nombre: "Componentes Pc",
        palabras: ["Procesador", "Tarjeta Grafica", "Tarjeta Madre", "Memoria Ram", "Disco Duro", "Fuente de Poder", "Gabinete", "Ventilador", "Disipador", "SSD", "HDD", "GPU", "CPU", "RAM", "USB", "HDMI", "VGA", "DVI", "DisplayPort", "Ethernet", "Wifi", "Bluetooth", "USB-C", "Thunderbolt", "PCI", "PCIe", "SATA", "NVMe"]
    }
]


// 3.1. Seleccionar una palabra aleatoria de la categoria seleccionada

// 3.2. Mostrar la palabra en pantalla con guiones bajos en lugar de las letras

// 3.3. Mostrar las vidas en pantalla

// 3.4. Mostrar las letras que se han seleccionado

// 3.5. Mostrar las letras que se han fallado

// 3.6. Mostrar las letras que se han acertado

// 3.7. Seleccionar una letra

// 3.8. Verificar si la letra seleccionada esta en la palabra

// 3.9. Si la letra esta en la palabra, mostrar la letra en lugar de los guiones bajos

// 3.10. Si la letra no esta en la palabra, quitar una vida

// 3.11. Verificar si el usuario ha ganado

// 3.12. Verificar si el usuario ha perdido

// 3.13. Mostrar un mensaje si el usuario ha ganado

// 3.14. Mostrar un mensaje si el usuario ha perdido


// 4. Reiniciar el juego


// xxxxxxxxx-

// Contadores de juego
let vidas = 0;
let intentos = 0;
let palabrasAcertadas = 0;
let palabrasFalladas = 0;

// Seleccionar categoría y dificultad
let categoriaSeleccionada;
let dificultadSeleccionada;

// Palabra actual y palabra oculta
let palabraSecreta;
let palabraOculta;

// Elementos del DOM
const palabraElemento = document.querySelector('.divContPalabraMostrar');
const vidasElemento = document.querySelector('.divContAhorcadoImg');
const modalDificultad = document.getElementById('modalDificultad');
const modalJuego = document.getElementById('modalJuego');
const modalCategorias = document.getElementById('modalCategorias');

// Botones de letras
const botonesLetras = document.querySelectorAll('.delete-button');

// Reiniciar juego
function reiniciarJuego() {
    // Restablecer contadores
    vidas = 5;
    intentos = 0;
    palabrasAcertadas = 0;
    palabrasFalladas = 0;
    
    // Ocultar modal
    modalJuego.classList.remove('show');
    modalJuego.style.display = 'none';
    modalDificultad.classList.remove('show');
    modalDificultad.style.display = 'none';
    modalCategorias.classList.remove('show');
    modalCategorias.style.display = 'none';

    // Limpiar palabra oculta y palabra actual
    palabraOculta = '';
    palabraSecreta = '';

    // Limpiar contenedor de palabra
    palabraElemento.innerHTML = '';

    // Habilitar botones de letras
    botonesLetras.forEach(button => {
        button.disabled = false;
    });
}

// Función para seleccionar una palabra al azar de la categoría y dificultad seleccionadas
function seleccionarPalabra() {
    const palabrasCategoria = categorias.find(cat => cat.nombre === categoriaSeleccionada).palabras;
    palabraSecreta = palabrasCategoria[Math.floor(Math.random() * palabrasCategoria.length)].toUpperCase();
    palabraOculta = '_'.repeat(palabraSecreta.length);
}

// Función para mostrar la palabra oculta
function mostrarPalabraOculta() {
    palabraElemento.innerHTML = '';
    palabraOculta.split('').forEach(letra => {
        const span = document.createElement('span');
        span.textContent = letra;
        palabraElemento.appendChild(span);
    });
}

// Función para comprobar si la letra seleccionada está en la palabra secreta
function comprobarLetra(letra) {
    if (palabraSecreta.includes(letra)) {
        // Actualizar palabra oculta con letras acertadas
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (palabraSecreta[i] === letra) {
                palabraOculta = palabraOculta.substr(0, i) + letra + palabraOculta.substr(i + 1);
            }
        }

        mostrarPalabraOculta();
        palabrasAcertadas++;
        document.getElementById('palabrasAcertadas').textContent = palabrasAcertadas;
    } else {
        // Restar una vida
        vidas--;
        vidasElemento.innerHTML = `<img src="./img/vidas/${vidas}.png" alt="Vidas">`;
        if (vidas === 0) {
            // Si se quedó sin vidas, el juego termina
            palabrasFalladas++;
            document.getElementById('palabrasFalladas').textContent = palabrasFalladas;
            document.getElementById('mensaje').textContent = '¡Has perdido! La palabra era: ' + palabraSecreta;
            document.getElementById('modalJuego').classList.add('show');
            document.getElementById('modalJuego').style.display = 'block';
            desactivarBotones();
        }
    }
    
    intentos++;
    document.getElementById('intentos').textContent = intentos;
}

// Función para desactivar botones de letras
function desactivarBotones() {
    botonesLetras.forEach(button => {
        button.disabled = true;
    });
}

// Evento clic para los botones de letras
botonesLetras.forEach(button => {
    button.addEventListener('click', function() {
        comprobarLetra(button.textContent.toUpperCase());
        button.disabled = true;
    });
});

// Evento clic para el botón de reiniciar
document.getElementById('buttonReiniciar').addEventListener('click', function() {
    reiniciarJuego();
});

// Evento clic para el botón de salir
document.getElementById('buttonSalir').addEventListener('click', function() {
    reiniciarJuego();
});

// Evento clic para las categorías
document.querySelectorAll('.package2').forEach(item => {
    item.addEventListener('click', event => {
        categoriaSeleccionada = item.parentElement.parentElement.querySelector('.titleCard').textContent.trim();
        modalDificultad.classList.add('show');
        modalDificultad.style.display = 'block';
    });
});

// Evento clic para las dificultades
document.querySelectorAll('.btndiff').forEach(item => {
    item.addEventListener('click', event => {
        dificultadSeleccionada = item.textContent.trim();
        // Extraer la palabra
        seleccionarPalabra();
        // Ocultar el modal de dificultad y mostrar el juego
        modalDificultad.classList.remove('show');
        modalDificultad.style.display = 'none';
        modalJuego.classList.add('show');
        modalJuego.style.display = 'block';
        // Mostrar la palabra oculta
        mostrarPalabraOculta();
    });
});
