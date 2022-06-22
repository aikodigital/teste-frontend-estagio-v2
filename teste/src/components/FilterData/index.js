import { useState, useEffect } from "react";
import axios from "axios";

    
const HandleSearch = (event) => {
    const [allData, setAllData] = useState('')
    const [filteredData, setFilteredData] = useState(allData)
    
    let value = event.target.value.toLowerCase()
    let result = []
    result = allData.filter((data) => {
        return data.title.search(value) !== -1;
    })

    setFilteredData(result);

    useEffect(() => {
        axios('../../assets/data/equipmentState.json')
            .then(response => {
                console.log(response.data)
                setAllData(response.data)
                setFilteredData(response.data)
            })
            .catch(error => {
                console.log("Erro para consumir data"+ error)
            })
    },  [])
}

export default HandleSearch;