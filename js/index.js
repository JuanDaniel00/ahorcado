// Seleccionar la categoria y añadir la lista de palabras que se usaran mas adelante respecto a la categoria seleccionada

let palabras = [];
let palabra = '';
let vidas = 0;
let palabraMostrar = '';
let categoria = '';
let dificultad = '';

document.querySelectorAll('.package2').forEach(item => {
    item.addEventListener('click', event => {
        categoria = item.value;
        palabras = [];
        if (categoria == 'games') {
            palabras = ['minecraft', 'fortnite', 'amongus', 'valorant', 'gta', 'fifa', 'callofduty', 'leagueoflegends', 'overwatch', 'apexlegends', 'roblox', 'terraria', 'pubg', 'rocketleague', 'csgo', 'dota2', 'fallguys', 'zelda', 'pokemon', 'mario', 'sonic', 'halo', 'godofwar', 'uncharted', 'residentevil', 'doom'];
        } else if (categoria == 'programacion') {
            palabras = ['javascript', 'python', 'java', 'php', 'ruby', 'swift', 'kotlin', 'typescript', 'sql', 'go', 'r', 'rust', 'dart', 'perl', 'lua', 'scala', 'haskell', 'cobol', 'fortran', 'pascal', 'lisp'];
        } else if (categoria == 'componentes') {
            palabras = ['motherboard', 'cpu', 'gpu', 'ram', 'ssd', 'hdd', 'psu', 'case', 'cooler', 'modem', 'ethernet'];
        }
        console.log(palabras)
    });
});

// Seleccionar la dificultad y depedendiendo la dificultad se elige una palabra mas corta o mas larga de la lista de palabras de la categoria seleccionada anteriormentes

document.querySelectorAll('.btndiff').forEach(item => {
    item.addEventListener('click', event => {
        palabra = '';
        vidas = 0;
        palabraMostrar = '';
        dificultad = item.value;
        if (dificultad == 'facil') {
            let palabrasCortas = palabras.filter(palabra => palabra.length <= 4);
            palabra = palabrasCortas[Math.floor(Math.random() * palabrasCortas.length)];
            vidas = 10;
            document.querySelector('.titleVidas').innerHTML = `Vidas: ${vidas}`;
            for (let i = 0; i < palabra.length; i++) {
                palabraMostrar = Array(palabra.length).fill('_');
            }
            document.querySelector('.divContPalabraMostrar').innerHTML = palabraMostrar;
        } else if (dificultad == 'medio') {
            let palabrasMedias = palabras.filter(palabra => palabra.length >= 6 && palabra.length <= 8);
            palabra = palabrasMedias[Math.floor(Math.random() * palabrasMedias.length)];
            vidas = 7;
            document.querySelector('.titleVidas').innerHTML = `Vidas: ${vidas}`;
            for (let i = 0; i < palabra.length; i++) {
                palabraMostrar = Array(palabra.length).fill('_');
            }
            document.querySelector('.divContPalabraMostrar').innerHTML = palabraMostrar;
        } else if (dificultad == 'dificil') {
            let palabrasLargas = palabras.filter(palabra => palabra.length >= 10);
            palabra = palabrasLargas[Math.floor(Math.random() * palabrasLargas.length)];
            vidas = 4;
            document.querySelector('.titleVidas').innerHTML = `Vidas: ${vidas}`;
            for (let i = 0; i < palabra.length; i++) {
                palabraMostrar = Array(palabra.length).fill('_');
            }
            document.querySelector('.divContPalabraMostrar').innerHTML = palabraMostrar;
        }
        console.log(palabra)
    });
});


document.querySelectorAll('.btnLetra').forEach(btn => {
    btn.addEventListener('click', event => {
        let letra = event.target.value;
        console.log(letra);

        // Comprobar si la letra esta en la palabra
        if (palabra.includes(letra)) {
            // Si esta en la palabra, mostrar la letra en la palabra a mostrar
            for (let i = 0; i < palabra.length; i++) {
                if (palabra[i] === letra) {
                    palabraMostrar[i] = letra;
                }
            }
            document.querySelector('.divContPalabraMostrar').innerHTML = palabraMostrar.join(' ');
        } else {
            // Si no esta en la palabra, quitar una vida
            vidas--;
            document.querySelector('.titleVidas').innerHTML = `Vidas: ${vidas}`;
        }

        if (dificultad !== 'dificil') {
            btn.disabled = true;
            btn.style.backgroundColor = 'red';
            btn.style.cursor = 'not-allowed';
        } else if (dificultad === 'dificil') {
            if (btn.disabled === true) {
                vidas--;
                document.querySelector('.titleVidas').innerHTML = `Vidas: ${vidas}`;
            }
        }

        if (dificultad === 'facil') {
            switch (vidas) {
                case 9:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado1.jpg";
                    break;
                case 8:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado2.jpg";
                    break;
                case 7:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado3.jpg";
                    break;
                case 6:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado4.jpg";
                    break;
                case 5:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado5.jpg";
                    break;
                case 4:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado6.jpg";
                    break;
                case 3:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado7.jpg";
                    break;
                case 2:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado8.jpg";
                    break;
                case 1:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado9.jpg";
                    break;
                case 0:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcadofin.jpg";
                    break;
            };
        } else if (dificultad === 'medio') {
            switch (vidas) {
                case 6:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado1.jpg";
                    break;
                case 5:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado2.jpg";
                    break;
                case 4:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado3.jpg";
                    break;
                case 3:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado4.jpg";
                    break;
                case 2:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado5.jpg";
                    break;
                case 1:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado8.jpg";
                    break;
                case 0:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcadofin.jpg";
                    break;
            };
        } else if (dificultad === 'dificil') {
            switch (vidas) {
                case 3:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado1.jpg";
                    break;
                case 2:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado6.jpg";
                    break;
                case 1:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcado8.jpg";
                    break;
                case 0:
                    document.querySelector('.ahorcadoImg').src = "./img/ahorcadofin.jpg";
                    break;
            };
        }

        // Comprobar si la palabraMostrar es igual a la palabra
        if (palabraMostrar.join('') === palabra) {
            Swal.fire({
                icon: "success",
                title: "Nice!!!!",
                text: "Ganaste :)",
                showConfirmButton: false
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else if (vidas === 0) {  // Comprobar si las vidas son 0
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Pediste :(",
                showConfirmButton: false
            });
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        }
    });
});