function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var color = document.body.style
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12) {
    img.src = './img/fotomanha.png'
    img.alt = `Foto do Dia`
    color.background = `#f8e369`
} else if (hora >= 12 && hora < 18){
    img.src = './img/fototarde.png'
    img.alt = `Foto do Tarde`
    color.background = `#8a6029`
} else {
    img.src = './img/fotonoite.png'
    img.alt = `Foto do Norte`
    color.background = `#1f1f1f`
}
}