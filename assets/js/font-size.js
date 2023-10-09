let font_size = 1
function aumentarFonte(){
    let docHTML = document.getElementsByTagName("html")
    docHTML[0].style = "font-size: "+font_size+"rem"
    font_size += 1
}
function diminuirFonte(){
    let docHTML = document.getElementsByTagName("html")
    docHTML[0].style = "font: "+font_size+"rem"
    font_size -= 1
}