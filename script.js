function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

 /*alterar do modo claro para o escuro    
    if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add ('light')
    }
 */
    // pegar a tag img 
    const img= document.querySelector ("#profile img")

    // substituir a imagem
    if (html.classList.contains('light')) {
    //se estiver em light mode, adicionar a imagem light
    img.setAttribute('src', "./assets/avatar-light.png")

    }else {
    //se estiver sem light mode, manter a imagem padrão
    img.setAttribute("src", "./assets/avatar.png")
    }


    
    
    if (html.classList.contains('light')){
        img.setAttribute("alt", "Imagem de Mayk Brito sorrindo com óculos escuros e sem barba")

    } else {
    img.setAttribute ("alt", "Imagem de Mayk Brito sorrindo de óculos de grau e cavanhaque")    
    }
    
    
    


}