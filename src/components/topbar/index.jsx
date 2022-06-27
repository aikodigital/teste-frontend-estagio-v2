import React,{useState} from 'react'
import styles from './topbar.module.css'
import SearchIcon from '@mui/icons-material/Search';
import equipmentArr from '../../data/dataTratement';

const TopBar = ({getNameSearch}) => {
    const [searchValue, setSearchValue] = useState('')

    return(
        <div className={styles.topbar}>
            <img src="./assets/aiko.png" alt="Logo Aiko" />
            <select onChange={(e)=>{setSearchValue(e.target.value)}}>
                <option value={''}>Selecione um Modelo</option>
                {equipmentArr.map((equip)=>(
                    <option value={equip.name}>{equip.name}</option>
                ))}
            </select>
            <button onClick={()=>{getNameSearch(searchValue)}}><SearchIcon sx={{color: 'white'}}/></button>
        </div>
    )
}

export default TopBar;