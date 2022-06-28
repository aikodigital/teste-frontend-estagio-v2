var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function (){
    var equipamentos = document.querySelectorAll(".equipment");

    if (this.value.length > 0){
        for (var i = 0; i < equipamentos.length; i++){
            var equipamento = equipamentos[i];
            var tdName = equipamento.querySelector(".info-model");
            var nome = tdName.textContent;
            var expressao = new RegExp(this.value, "i")
            if (expressao.test(nome)) {
                equipamento.classList.remove("hidden");
            } else {
                equipamento.classList.add("hidden");
            }
        }
    } else {
        for (var i = 0; i < equipamentos.length; i++){
            var equipamento = equipamentos[i];
            var tdName = equipamento.querySelector(".info-model");
            equipamento.classList.remove("hidden");
        }
    }
    
});