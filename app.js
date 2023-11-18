//indice; condicional; incremento o decremento

// for (let index = 0; index < 5; index++) {
//     if (index == 3) {
//         continue;
//     }
    
//     debugger;
// }

// console.log('Terminó');


//Funciones
//paramtro es una variable para darle una función
function suma() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    // Verificar si los valores son números válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        let suma = parseInt(numero1) + parseInt(numero2);
        console.log(suma);

        let span = document.querySelector("#resultado");
        span.innerHTML = suma;
    } else {
        console.error("Ingrese valores numéricos válidos");
    }
}

function resta() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    // Verificar si los valores son números válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        let suma = parseInt(numero1) - parseInt(numero2);
        console.log(suma);

        let span = document.querySelector("#resultado");
        span.innerHTML = suma;
    } else {
        console.error("Ingrese valores numéricos válidos");
    }
}

function multiplicar() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    // Verificar si los valores son números válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        let suma = parseInt(numero1) * parseInt(numero2);
        console.log(suma);

        let span = document.querySelector("#resultado");
        span.innerHTML = suma;
    } else {
        console.error("Ingrese valores numéricos válidos");
    }
}

function dividir() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    // Verificar si los valores son números válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        let suma = parseInt(numero1) / parseInt(numero2);
        console.log(suma);

        let span = document.querySelector("#resultado");
        span.innerHTML = suma;
    } else {
        console.error("Ingrese valores numéricos válidos");
    }
}


// Funciones (Inicialización de para metros)

// function suma(numero1, numero2) {
//     resultado = (numero1, numero2);
//     console.log(resultado);
//     return a+b+c;
// }


// const numero = [5,6,7];

// let resultadodefuncion = suma(...numero);
// console.log(resultadodefuncion)

// function callback(a,b, saludo()=>{console.log('Hola imanol')}){

// }

// let holaArrow = () => console.log('Hola')

// function functionsaludar(nombre){
//     console.log("Hola")
// };

// functionsaludar('Imanol');

// let hola = function(nombre){
//     console.log ('Hola' + nombre + "Mundo Anonimo")
// };
// hola('Alex');

// Operador Ternario "?"

//Eventos en el mouse




let boton = document.querySelector('.botonClick');

boton.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe nuevamente
    console.log('Dimos click en el botón');
    let mensaje = document.querySelector('#resultado');

    mensaje.textContent = 'Dimos click en el botón';

    // Alternar la clase 'Azul' en el botón
    boton.classList.toggle('Azul');
});





let boton2 = document.querySelector('#Agregar');


// boton2.addEventListener('onclick', function(){
    
// })

boton.addEventListener('mouseover', function(){
    console.log('Estamos sobre el boton')
    let mensaje = document.querySelector('#resultado');
    mensaje.textContent = 'Estamos sobre el boton';
})

boton.addEventListener('mouseout', function(){
    console.log('Estamos fuera del boton')
    let mensaje = document.querySelector('#resultado');
    mensaje.textContent = 'Estamos fuera del boton';
})

//Eventos del teclado

window.addEventListener('keydown', (e) =>{
    console.log('Pulsó una tecla');
    console.log(String.fromCharCode(e.keyCode));
    let mensaje = document.querySelector('#resultado');
    mensaje.textContent = 'Pulsó una tecla';
})

window.addEventListener('keypress', (e) =>{
    console.log('Presionó una tecla');
    let mensaje = document.querySelector('#resultado');
    mensaje.textContent = 'Presionó una tecla';

})

window.addEventListener('keyup', (e) =>{
    console.log('Dejo de presionar una tecla');
    let mensaje = document.querySelector('#resultado');
    mensaje.textContent = 'Dejo de presionar una tecla';
})

window.addEventListener('load', (e) =>{
    console.log('Cargando...');
    let mensaje = document.querySelector('#resultado');
    mensaje.textContent = 'Cargando...';
})


// function myfunction(){
//     let x = document.getElementById("BotonClick").addEventListener("click", displayDate);

//     x[0].style.BackgrundColor = "text-primary";

// }

