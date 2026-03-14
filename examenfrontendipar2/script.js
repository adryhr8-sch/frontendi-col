class Película {
  constructor(título, género, año) {
    this.título = título;
    this.género = género;
    this.año = año;
  }

  descripción() {
    return `${this.título} es una producción del género ${this.género} estrenada en ${this.año}`;
  }
}

var películas = [
  new Película("Stranger Things", "Ciencia Ficción", "2016"),
  new Película("Wednesday", "Misterio", "2022"),
  new Película("Squid Game", "Suspenso", "2021"),
  new Película("The Crown", "Drama", "2016"),
  new Película("The Witcher", "Fantasía", "2019"),
  new Película("Money Heist", "Crimen", "2017"),
  new Película("Black Mirror", "Ciencia Ficción", "2011"),
  new Película("Narcos", "Crimen", "2015"),
  new Película("The Umbrella Academy", "Superhéroes", "2019"),
  new Película("Dark", "Ciencia Ficción", "2017"),
  new Película("The Mandalorian", "Ciencia Ficción", "2019"),
  new Película("The Queen's Gambit", "Drama", "2020"),
  new Película("The Boys", "Superhéroes", "2019"),
  new Película("The Handmaid's Tale", "Distopía", "2017"),
  new Película("The Expanse", "Ciencia Ficción", "2015"),
  new Película("The Marvelous Mrs. Maisel", "Comedia", "2017"),
  new Película("The Haunting of Hill House", "Terror", "2018"),
  new Película("The Good Place", "Comedia", "2016"),
  new Película("The Leftovers", "Drama", "2014"),
  new Película("The Wire", "Crimen", "2002"),
];

const cat = document.getElementById("catalogo");

cat.style.display = "none";

for (let p of películas) {
  let card = document.createElement("div");
  card.classList.add("card");

  let header = document.createElement("h2");
  header.textContent = p.título;
  let gen = document.createElement("p");
  gen.textContent = p.género;
  let a = document.createElement("p");
  a.textContent = p.año;

  let btn_detalle = document.createElement("button");
  btn_detalle.classList.add("btn-detalle");
  btn_detalle.textContent = "Ver detalle";
  btn_detalle.addEventListener("click", () => alert(p.descripción()));

  let btn_fave = document.createElement("button");
  btn_fave.textContent = "Agregar a favoritos";
  btn_fave.addEventListener("click", function () {
    alert("Agregada a favoritos");
    this.disabled = true;
    this.style.pointerEvents = "none";
    card.style.backgroundColor = "#ffff00";
  });

  card.appendChild(header);
  card.appendChild(gen);
  card.appendChild(a);
  card.appendChild(btn_detalle);
  card.appendChild(btn_fave);

  cat.appendChild(card);
}

document.getElementById("btn-cat").addEventListener("click", function () {
  if (cat.hasAttribute("style")) {
    cat.removeAttribute("style");
  } else {
    cat.style.display = "none";
  }
});
