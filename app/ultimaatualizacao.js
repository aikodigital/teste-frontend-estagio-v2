import estado from "../data/equipmentStateHistory.json" assert { type: "json" };

window.penultimoEstado = function penultimoEstado() {
  var lenght = Object.keys(estado[a]["states"]).length;
  var lenght = parseInt(lenght);
  var penultimoEst = `${estado[a]["states"][lenght - 2]["equipmentStateId"]}`;

  if (penultimoEst == "0808344c-454b-4c36-89e8-d7687e692d57") {
    penultimoEst = '<span style="color: green;">Operando</span>';
  }
  if (penultimoEst == "baff9783-84e8-4e01-874b-6fd743b875ad") {
    penultimoEst = '<span style="color: rgb(158, 158, 3);">Parado</span>';
  }
  if (penultimoEst == "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f") {
    penultimoEst = '<span style="color: red;">Manutenção</span>';
  }

  document.getElementById("ultimaAtualizacao").innerHTML = penultimoEst;
  var leng = parseInt(lenght);
  document.getElementById("totalmudancas").innerHTML = leng;
};
