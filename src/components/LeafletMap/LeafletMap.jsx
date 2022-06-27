
import { useEffect } from "react"
import { createLegend, createPolyline, handleSetActualMarks, handleSetHistoryMarks } from "../../utils/map"
import * as L from "leaflet"


const LeafletMap = ({ models, equipments, positionHistory, getAllActual }) => {
    const modelColors = ["#8168f3", "#d84a93", "#32a2d6"]

    useEffect(() => {
        let myMap = L.map('mapid', {
            zoom: 13
        })
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(myMap)

        if(getAllActual) {
            createLegend(myMap, models, modelColors)
            handleSetActualMarks(equipments, models, modelColors, positionHistory, myMap)
        } else {
            const coordArr = Array.from(positionHistory[0].map(position => [position.lat, position.lon]))
            handleSetHistoryMarks(myMap, positionHistory[0], modelColors[0])
            createPolyline(myMap, coordArr)
        }

        // clear at unmount
        return () => {
            myMap.remove()
            myMap = null
        }

    }, [])

    return <div id="mapid"></div>
}

export default LeafletMap