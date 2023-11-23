export class Personaje {
  constructor(
    nombre,
    vidaPromedio,
    ataquePromedio,
    descripcion,
    imagenes,
    habilidades,
    unica,
    color
  ) {
    this.nombre = nombre;
    this.vidaPromedio = vidaPromedio;
    this.ataquePromedio = ataquePromedio;
    this.descripcion = descripcion;
    this.imagenes = imagenes;
    this.habilidades = habilidades;
    this.unica = unica;
    this.color = color
  }

  seleccion(personaje) {
    alert(`Has elegido a ${this.personaje}`);
    const audio = new Audio(`../sounds/${personaje}__Selection__Audio.mp3`);

    audio.play();
  }
}
