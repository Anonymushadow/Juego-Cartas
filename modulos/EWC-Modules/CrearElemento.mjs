export const crearElemento = (elemento, clases, TXTcontent, innerContent, imgSRC)=> {
    const element = document.createElement(elemento);

    if (clases) {
        clases.forEach(clase => {
            element.classList.add(clase.trim());
            
        });
    }

    if(TXTcontent){
        element.textContent = TXTcontent;
    }

    
    if(innerContent){
        innerContent.forEach(content=> {
            element.innerHTML += content;
        })
    }

    if(imgSRC){
        element.src = imgSRC;
    }

    return element;
}