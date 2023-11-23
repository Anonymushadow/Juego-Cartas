export const crearTarjetas = (datos) => {
    let cartas = [];
    
    datos.foreach(dato => {
        let carta = `<div class="card">
            <div class="card__image__container">
                <img src="${dato.imagenes[0]}" draggable="false">
            </div>
            <div class="card__info__container">
                <h3 class="card__name">${dato.nombre}</h3>
                <p class="card__description">${dato.descripcion}</p>
                <i class="card__life__icon"></i><p class="card__life__data">${dato.vidaPromedio}</p>
                <i class="card__attack__icon"></i><p class="card__attack__data">${dato.ataquePromedio}</p>
            </div>
        </div`;
        cartas.push(carta);
    });

    return cartas;
}