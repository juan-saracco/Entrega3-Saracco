//accesos al DOM
const cargarNota = document.querySelector("#cargarNota");
const enviarNota = document.querySelector("#enviarNota");
const nota0 = document.querySelector(".valorPrimerNota");
const nota1 = document.querySelector(".valorSegundaNota");
const nota2 = document.querySelector(".valorTercerNota");
const promedio = document.querySelector(".promedio")
const calcular = document.querySelector("#calcular")
const vaciarArr = document.querySelector("#vaciarArr")
const titulo = document.querySelector("#tituloDinamico")
const nombre = document.querySelector("#nombreDinamico")
const input = document.querySelector("#inputDinamico")
const enviarNombre = document.querySelector("#enviarNombre")
const recuperar = document.querySelector("#recuperar")

let nombreApellido
let notaFinal = 0
let calculo = 0;

//creo mi array notas
const notas = []

//creo la funcion para pushear al array notas
function pushearNotas(nota){
    notas.push(nota.value)
}

//creo la funcion para limpiar el input
function limpiar(borrar) {
    borrar.value = ""
}

//funcion para borrar el array
function limpiarPantalla(){
        nota0.innerText = ""
        notas.pop()
        nota1.innerText = ""
        notas.pop()
        nota2.innerText = ""
        notas.pop()
        promedio.innerText = ''

}

//eventos
enviarNota.addEventListener('click',()=>{
        pushearNotas(cargarNota)
        sessionStorage.setItem('notas', notas)
        limpiar(cargarNota)
        console.log(notas);
        nota0.innerText = notas[0]
        primerNota =parseInt(notas[0])
        nota1.innerText = notas[1]
        segundaNota = parseInt(notas[1])
        nota2.innerText = notas[2]
        tercerNota = parseInt(notas[2])
        
});

calcular.addEventListener('click',()=>{

    notaFinal = (primerNota + segundaNota + tercerNota) / 3
    promedio.innerText = Math.floor(notaFinal)
})

vaciarArr.addEventListener('click', ()=>{
    limpiarPantalla()
})

enviarNombre.addEventListener('click', ()=>{
    nombreApellido = input.value
    console.log(nombreApellido);
    titulo.innerText = 'Bienvenido alumno ' + input.value
    nombre.innerText =  input.value
    sessionStorage.setItem('nombre', nombreApellido)
    limpiar(input)
})

let notasFinales = sessionStorage.getItem('notas')
sessionStorage.getItem(notasFinales)
console.log(notasFinales);





    









