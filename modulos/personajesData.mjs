import { Personaje } from "./Personaje.mjs";

export const generarDatosPersonajes = ()=> {
    let personajes = [];

    let Drakkon = new Personaje(
        "Lord Drakon",
        50,
        9,
        "Lord Drakkon, un villano formidable de los Power Rangers, emerge como una versión siniestra del icónico Ranger Verde, Tommy Oliver. Con una armadura oscura y una sed insaciable de poder",
        [
          "./images/Power Rangers/Lord Drakkon.jpg",
          "./images/Power Rangers/Lord Drakkon 2.jpg",
          "./images/Power Rangers/Lord Drakkon 3.jpg",
        ],
        [
          "Aumento: cada 2 turnos aumenta su ataque en +2",
          "Robo: tiene un 10% de  probabilida de quitarte 2 de vida y se lo suma como ataque",
        ],
        "Absorcion de poder: Toma la unica de cualquier personaje al azar y la intensifica",
        ["Cada vez que aumenta su ataque disminuye su vida en -1"]
      );

      let Shredder = new Personaje(
        "Shredder",
        50,
        9,
        "es un maestro ninja despiadado con habilidades marciales sin igual. Conocido también como Oroku Saki, lidera el temible Clan del Pie y posee una obsesión por el dominio total de Nueva York. Su astucia estratégica y su destreza en combate lo convierten en un enemigo formidable",
        [
          "./images/Power Rangers/Lord Drakkon.jpg",
          "./images/Power Rangers/Lord Drakkon 2.jpg",
          "./images/Power Rangers/Lord Drakkon 3.jpg",
        ],
        [
          "Aumento: cada 2 turnos aumenta su ataque en +2",
          "Robo: tiene un 10% de  probabilida de quitarte 2 de vida y se lo suma como ataque",
        ],
        "Absorcion de poder: Toma la unica de cualquier personaje al azar y la intensifica",
        ["Cada vez que aumenta su ataque disminuye su vida en -1"]
      );

    personajes.push(Drakkon);
}