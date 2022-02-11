const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const el = window.document.querySelectorAll(".lista li");
  el.forEach((item) => {
    item.remove();
  });

  const lista = window.document.getElementById("listi")
  console.log(lista)

  cosasQueAprendimos.forEach((item) => {
    let nuevoLi = window.document.createElement("li");
    nuevoLi.className = item.class;
    nuevoLi.textContent = item.tema;
    console.log(nuevoLi);
    lista.appendChild(nuevoLi)
  });

}

main();
