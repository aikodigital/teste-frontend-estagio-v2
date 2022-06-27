import equipment from "../data/equipment.json" assert { type: "json" };
import estadoAtual from "../data/equipmentState.json" assert { type: "json" };

window.maisInfo01 = function maisInfo01() {
  window.a = 0;
  localStorage.setItem("index", a);
  document.getElementById("imge").innerHTML =
    '<img id="imagem" src="Imagens/carreta.png" alt="">';
  document.getElementById("dadosEquip").innerHTML = `${equipment[a]["name"]}`;
  document.getElementById(
    "estadoAtual"
  ).innerHTML = `<SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN>`;
  document.getElementById("infoBox").classList.remove("sumir");
  document.getElementById("titulo2").classList.add("sumir");
};

window.maisInfo02 = function maisInfo02() {
  window.a = 1;
  localStorage.setItem("index", a);
  document.getElementById("imge").innerHTML =
    '<img id="imagem" src="Imagens/carreta.png" alt="">';
  document.getElementById("dadosEquip").innerHTML = `${equipment[a]["name"]}`;
  document.getElementById(
    "estadoAtual"
  ).innerHTML = `<SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN>`;
  document.getElementById("infoBox").classList.remove("sumir");
  document.getElementById("titulo2").classList.add("sumir");
};

window.maisInfo03 = function maisInfo03() {
  window.a = 2;
  localStorage.setItem("index", a);
  document.getElementById("imge").innerHTML =
    '<img id="imagem" src="Imagens/carreta.png" alt="">';
  document.getElementById("dadosEquip").innerHTML = `${equipment[a]["name"]}`;
  document.getElementById(
    "estadoAtual"
  ).innerHTML = `<SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN>`;
  document.getElementById("infoBox").classList.remove("sumir");
  document.getElementById("titulo2").classList.add("sumir");
};

window.maisInfo04 = function maisInfo04() {
  window.a = 3;
  localStorage.setItem("index", a);
  document.getElementById("imge").innerHTML =
    '<img id="imagem" src="Imagens/carreta.png" alt="">';
  document.getElementById("dadosEquip").innerHTML = `${equipment[a]["name"]}`;
  document.getElementById(
    "estadoAtual"
  ).innerHTML = `<SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN>`;
  document.getElementById("infoBox").classList.remove("sumir");
  document.getElementById("titulo2").classList.add("sumir");
};

window.maisInfo05 = function maisInfo05() {
  window.a = 4;
  localStorage.setItem("index", a);
  document.getElementById("imge").innerHTML =
    '<img id="imagem" src="Imagens/colhetores.png" alt="">';
  document.getElementById("dadosEquip").innerHTML = `${equipment[a]["name"]}`;
  document.getElementById(
    "estadoAtual"
  ).innerHTML = `<SPAN style="color: ${estadoAtual[2]["color"]};">${estadoAtual[2]["name"]}</SPAN>`;
  document.getElementById("infoBox").classList.remove("sumir");
  document.getElementById("titulo2").classList.add("sumir");
};

window.maisInfo06 = function maisInfo06() {
  window.a = 5;
  localStorage.setItem("index", a);
  document.getElementById("imge").innerHTML =
    '<img id="imagem" src="Imagens/colhetores.png" alt="">';
  document.getElementById("dadosEquip").innerHTML = `${equipment[a]["name"]}`;
  document.getElementById(
    "estadoAtual"
  ).innerHTML = `<SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN>`;
  document.getElementById("infoBox").classList.remove("sumir");
  document.getElementById("titulo2").classList.add("sumir");
};

window.maisInfo07 = function maisInfo07() {
  window.a = 6;
  localStorage.setItem("index", a);
  document.getElementById("imge").innerHTML =
    '<img id="imagem" src="Imagens/T250D.png" alt="">';
  document.getElementById("dadosEquip").innerHTML = `${equipment[a]["name"]}`;
  document.getElementById(
    "estadoAtual"
  ).innerHTML = `<SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN>`;
  document.getElementById("infoBox").classList.remove("sumir");
  document.getElementById("titulo2").classList.add("sumir");
};

window.maisInfo08 = function maisInfo08() {
  window.a = 7;
  localStorage.setItem("index", a);
  document.getElementById("imge").innerHTML =
    '<img id="imagem" src="Imagens/T250D.png" alt="">';
  document.getElementById("dadosEquip").innerHTML = `${equipment[a]["name"]}`;
  document.getElementById(
    "estadoAtual"
  ).innerHTML = `<SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN>`;
  document.getElementById("infoBox").classList.remove("sumir");
  document.getElementById("titulo2").classList.add("sumir");
};

window.maisInfo09 = function maisInfo09() {
  window.a = 8;
  localStorage.setItem("index", a);
  document.getElementById("imge").innerHTML =
    '<img id="imagem" src="Imagens/T250D.png" alt="">';
  document.getElementById("dadosEquip").innerHTML = `${equipment[a]["name"]}`;
  document.getElementById(
    "estadoAtual"
  ).innerHTML = `<SPAN style="color: ${estadoAtual[0]["color"]};">${estadoAtual[0]["name"]}</SPAN>`;
  document.getElementById("infoBox").classList.remove("sumir");
  document.getElementById("titulo2").classList.add("sumir");
};
