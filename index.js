function procurar() {
    var lat = document.getElementById("latitude").value;
    var lon = document.getElementById("longitude").value;
    var modelo = document.getElementById("modelo").value;
    
    var map = L.map('mapa').setView([lat, lon], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    if((modelo == "CA-0001") | (modelo == "CA-0002") | (modelo == "CA-0003") | (modelo == "CA-0004")) {
        L.marker([lat, lon]).addTo(map)
        .bindPopup('Seu Caminhão de carga está aqui.')
        .openPopup();
    } else if ((modelo == "HV-1001") | (modelo == "HV-1002")){
        L.marker([lat, lon]).addTo(map)
        .bindPopup('Sua Harvester está aqui.')
        .openPopup();
    } else if((modelo == "GT-2001") | (modelo == "GT-2002") | (modelo == "GT-2003")){
        L.marker([lat, lon]).addTo(map)
        .bindPopup('Sua Garra traçadora está aqui.')
        .openPopup();
    } else {
        L.marker([lat, lon]).addTo(map)
        .bindPopup('Esse modelo não existe em nossa base de dados.')
        .openPopup();
    }

    lat = "";
    document.getElementById("latitude").value = lat;

    lon = "";
    document.getElementById("longitude").value = lon;

    modelo = ""
    document.getElementById("modelo").value = modelo;
}
