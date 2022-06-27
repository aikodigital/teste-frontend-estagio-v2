window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  botaosubir();
}

function botaosubir() {
  if (scrollY > 400) {
    botaoUp.classList.add("show");
    textbox.classList.add("slide");
  } else {
    botaoUp.classList.remove("show");
    textbox.classList.remove("slide");
  }
}

window.esconderTabela = function esconderTabela() {
  document.getElementById(
    "historico"
  ).innerHTML = `<h1 id="titulo" class="sumir">Histórico do estado do equipamento selecionado (Ultimos 10)</h1>
  <div id="aki"></div>
  <div id="center"><a href="index2.html"><button id="historicocompleto">Mostrar histórico completo deste equipamento </button></a></div>`;

  document.getElementById("historico").classList.add("sumir");
};
