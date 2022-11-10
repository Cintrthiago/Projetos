var formulario = document.querySelector("form");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  let urlForm = "https://pokeapi.co/api/v2/pokemon/";

  let name = document.getElementById("name");

  urlForm = urlForm + this.name.value;

  urlForm = urlForm.toLocaleLowerCase();

  let answer = document.getElementById("content");

  let imagem = document.getElementById("imgPokemon");

  let html = "";

  fetch(urlForm)
    .then((answer) => answer.json())
    .then(function (data) {
      console.log(data);
      html = "Nome: " + maiuscula(data.name) + "<br>";
      html = html + "type: " + maiuscula(data.types[0].type.name);
      answer.innerHTML = html;

      imagem.innerHTML =
        "<img src='" +
        data.sprites.front_shiny +
        "'><img src='" +
        data.sprites.back_shiny +
        "'>";
    })
    .catch(function (err) {
      console.log(err);
    });
});

function maiuscula(val) {
  return val[0].toUpperCase() + val.substr(1);
}
