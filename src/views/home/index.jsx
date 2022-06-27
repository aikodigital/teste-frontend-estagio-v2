import React, { useState } from 'react'
import TopBar from '../../components/topbar';
import styles from './home.module.css'
import Map from './../../components/map/index';

const Home = () => {
    const [nameSearch, setNameSearch] = useState('')

    const getNameSearch = (topBarNameSearch) =>{
        setNameSearch(topBarNameSearch)
        console.log(topBarNameSearch)
    }

    return (
        <div>
            <TopBar getNameSearch={getNameSearch}/>
            <div className={styles.map}>
                <Map key={nameSearch} nameSearch={nameSearch}/>
            </div>
        </div>
    );
}

export default Home;