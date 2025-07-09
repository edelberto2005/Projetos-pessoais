function equacao(){
    var visor = document.getElementById('valor')
    var expressao = visor.value.replace(/x/g, '*')

    var resultado = eval(expressao)

    visor.value = resultado
}
function display(value){
    var interface = document.getElementById('valor')

    interface.value += value
}

function apagartudo(){
    var interface = document.getElementById('valor')

    interface.value = ''
}

function apagar(){
    var interface = document.getElementById('valor')
    interface.value = interface.value.slice(0, -1)
}