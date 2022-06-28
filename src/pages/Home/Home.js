import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import equipment from '../../data/equipment.json';
import equipmentModel from '../../data/equipmentModel.json';
import './Home.css';

export const Home = () => {
    const [equipments, setEquipments] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    // Modelo para receber requisição do backend
    useEffect(() => {
        const loadData = async () => {
            const results = equipment;
            setEquipments(results);
        }
        loadData()
    }, [search])


    return (
        <div className='contentHome'>
            <div className='search'>
                <label>Procurar:</label>
                <input type='text' placeholder='ex. CA-0001' onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <div className='divCard'>
                {equipments.filter((val) => {
                    if (search === "") {
                        return val
                    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                        return val
                    }
                }).map((equipment, index) => (
                    <div className='card' equipment={equipment} key={index} onClick={() => {
                        navigate(`/view/${equipment.id}`)
                    }}>
                        <h2 >{equipment.name}</h2>
                        {equipmentModel.map((equip, index) => {
                            if (equip.id === equipment.equipmentModelId) {
                                return <p key={index}>{equip.name}</p>
                            }
                        }
                        )}
                    </div>
                ))}
            </div>
        </div >
    )
}
