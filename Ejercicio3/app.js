// 1.1 Basandote en el array siguiente, crea una lista ul > li  dinámicamente en el html que imprima cada uno de los paises.

const Countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");

Countries.forEach((county) => {
  const li = document.createElement("li");

  li.innerHTML = county;

  ul.appendChild(li);
});

document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeMe = document.querySelectorAll(".fn-remove-me");

removeMe.forEach((removeM) => {
  removeM.remove();
});

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const ul1 = document.createElement("ul");

const divCars = document.querySelector('[data-function="printHere"]');

cars.forEach((car) => {
  const li = document.createElement("li");
  li.innerHTML = car;
  ul1.appendChild(li);
});

divCars.appendChild(ul1);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const divCountries = document.createElement("div");
divCountries.id = "countries-container";

for (const county of countries) {
  const div = document.createElement("div");

  const h4 = document.createElement("h4");

  const img = document.createElement("img");

  const eliminar = document.createElement("button");

  eliminar.innerText = "Eliminar";

  h4.innerHTML = county.title;

  img.src = county.imgUrl;
  img.alt = county.title;

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(eliminar);

  eliminar.addEventListener("click", () => {
    div.remove();
  });

  divCountries.appendChild(div);
}
document.body.appendChild(divCountries);

// 1.5

const removeLast = document.createElement("button");

removeLast.textContent = "Eliminar último país";

document.body.appendChild(removeLast);

removeLast.addEventListener("click", () => {
  const lastDiv = divCountries.lastElementChild;
  if (lastDiv) {
    lastDiv.remove();
  }
});
