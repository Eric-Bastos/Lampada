//dom

const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')


//evento

btligar.addEventListener('click',acender)
btdesligar.addEventListener('click',apagar)
lampada.addEventListener('dblclick',quebrar)



//função

function acender(){
    lampada.src = 'imagens/acesa.gif'
}
function apagar(){
    lampada.src = 'imagens/apagada.gif'
}
function quebrar(){
    lampada.src = 'imagens/quebrada.jpg'
}