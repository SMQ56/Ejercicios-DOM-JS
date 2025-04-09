/* 
2.1 Inserta dinamicamente en un html un div vacio con javascript.

2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
*/

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div = document.createElement("div");

div.textContent = "";

document.body.appendChild(div);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement("div");

const p = document.createElement("p");

document.body.appendChild(divP);

divP.appendChild(p);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div6P = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const p6 = document.createElement("p");
  div6P.appendChild(p6);
}

document.body.appendChild(div6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const div1 = document.createElement("div");

const p1 = document.createElement("p");

p1.textContent = "Soy dinámico!";

document.body.appendChild(div1);

div1.appendChild(p1);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");

h2.innerHTML = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const ul = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  const app = apps[i];
  const li = document.createElement("li");
  li.innerHTML = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elements = document.querySelectorAll(".fn-remove-me");

elements.forEach((elment) => {
  elment.remove();
});

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const parrafo = document.createElement("p");
parrafo.textContent = "Voy en medio!";

const divM = document.querySelector("div");

divM.parentNode.insertBefore(parrafo, divM);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divInserts = document.querySelectorAll(".fn-insert-here");

divInserts.forEach((divInsert) => {
  const P = document.createElement("p");
  P.innerHTML = "Voy dentro!";
  divInsert.appendChild(P);
});
