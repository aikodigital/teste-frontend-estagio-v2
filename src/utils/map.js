import * as L from "leaflet"

export const createLegend = (map, models, modelColors) => {
    const legend = L.control({ position: "topleft" })

    legend.onAdd = function () {
        let div = L.DomUtil.create('div')
        let labels = ['<strong>Modelos</strong>']

        models.forEach((model, idx) => {
            div.innerHTML += labels.push('<i class="square" style="background:' + modelColors[idx] + '"></i> ' + model.name)
        })

        div.innerHTML = labels.join('<br>')
        div.classList.add("leafletLegend")

        return div
    }

    legend.addTo(map)
}

export const handleSetActualMarks = (equipments, models, modelColors, positionHistory, map) => {

    equipments.forEach(equipment => {
        const name = `<h5>${equipment.name}</h5>`
        const modelIdx = models.findIndex(model => model.id === equipment.equipmentModelId)
        const coordinates = ((positionHistory.find(historyObj => historyObj.equipmentId === equipment.id)).positions).at(-1)

        createMark(map, name, [coordinates.lat, coordinates.lon], modelColors[modelIdx === -1 ? 0 : modelIdx])
    })
}


export const handleSetHistoryMarks = (map, positionHistory, color) => {

    positionHistory.forEach((position, idx) => {
        const colorHandle = idx === 0 ?
            "grey" : idx === positionHistory.length - 1 ?
                "green" : color

        const details = `<h5>
                Posição ${idx + 1}${positionHistory.length - 1 === idx ? `, atual.` : ''}
                </br>${new Date(position.date).toLocaleString('pt-BR', { timeZone: 'UTC', hour12: false })}
            </h5>`
            
        const coordinates = [position.lat, position.lon]

        createMark(map, details, coordinates, colorHandle)
    })
}

export const createPolyline = (map, coordinatesArr) => {
    new L.polyline(coordinatesArr).addTo(map)
}

const createMark = (map, details, coordinates, color) => {

    let marker = L.circleMarker(coordinates, {
        stroke: true,
        radius: 10,
        color,
        fillOpacity: 0.5,
        interactive: true
    }).addTo(map)

    let popup = L.popup().setContent(`${details}`)
    marker.bindPopup(popup).openPopup()
    map.setView(coordinates, 14)
}
