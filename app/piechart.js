import equipmentHis from "../data/equipmentStateHistory.json" assert { type: "json" };

window.dados = function dados() {
  var operando = 0;
  operando = parseInt(operando);

  var parado = 0;
  parado = parseInt(parado);

  var manutencao = 0;
  manutencao = parseInt(manutencao);

  for (var a = 0; a < 9; a++) {
    var lenght = Object.keys(equipmentHis[a]["states"]).length;
    var lenght = parseInt(lenght);
    var lenght = lenght - 1;

    var equipState = equipmentHis[a]["states"][lenght]["equipmentStateId"];

    if (equipState == "0808344c-454b-4c36-89e8-d7687e692d57") {
      operando++;
    }

    if (equipState == "baff9783-84e8-4e01-874b-6fd743b875ad") {
      parado++;
    }

    if (equipState == "03b2d446-e3ba-4c82-8dc2-a5611fea6e1f") {
      manutencao++;
    }

    window.operando = operando;
    window.parado = parado;
    window.manutencao = manutencao;
  }
};

dados();

window.drawChart = function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["Operando", operando],
    ["Manutençâo", manutencao],
    ["Parado", parado],
  ]);

  var options = {
    title: "Estado atual dos equipamentos",
    is3D: true,
    slices: { 1: { offset: 0.2 } },
    fontSize: 20,
    legend: { position: "top", textStyle: { color: "black", fontSize: 16 } },
    pieStartAngle: 100,
    backgroundColor: "#F2EFE9",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
};

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
