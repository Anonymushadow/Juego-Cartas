import { Personaje } from "./modulos/Personaje.mjs";
import { crearTarjetas } from "./modulos/crearTarjetas.mjs";
import { generarDatosPersonajes } from "./modulos/personajesData.mjs";

window.addEventListener("load", () => {
  //Genero los datos
  let personajes = generarDatosPersonajes();
  //creo las tarjetas
  let tarjetas = crearTarjetas(personajes);
  //renderizo las tarjetas en la pantalla
  renderizarTarjetas(tarjetas);

  renderizarInicio();
});
