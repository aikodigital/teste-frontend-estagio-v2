import { useState } from 'react';

import styles from './styles.module.scss';

import AikoImg from '../../img/aiko.png';

import { BsSquare, BsCheckSquare } from 'react-icons/bs';

import { useEquipment } from '../../hooks/equipment';

interface HeaderProps {
    filterOption: string;
    handleFilterOption(option: string): void;
}

export function Header({
    filterOption,
    handleFilterOption
}: HeaderProps){
    const [controlFilter, setControlFilter] = useState('');
    const { filterEquipments } = useEquipment();

    function handleFilter(option: string){
        if(controlFilter === '' || controlFilter !== option) {
            setControlFilter(option);
            handleFilterOption(option);
            filterEquipments(option);
        } else {
            setControlFilter('');
            handleFilterOption(option);
            filterEquipments('');
        }
    }

    return (
        <header
            className={styles.header}
        >
            <div
                className={styles.content}
            >
                <img src={AikoImg} alt="Imagem do logo da Aiko" />
                
                <ul>
                    <li><a href="https://aiko.digital/home/">Página Inicial</a></li>
                    <li><a href="https://jobs.quickin.io/aiko/jobs">Trabalhe Conosco</a></li>
                    <li><a href="https://aiko.digital/blog/">Blog</a></li>
                    <li><a href="https://aiko.digital/contato/">Contato </a></li>
                </ul>
            </div>

            <section
                className={styles.filter}
            >
                <h3>Filtrar equipamentos por modelo</h3>

                <ul>
                    <li
                        onClick={() => handleFilter('Caminhão de carga')}
                    >
                        {
                            filterOption === 'Caminhão de carga' ?
                            <>
                                <BsCheckSquare 
                                    size={12}
                                    color={'#00D900'}
                                />
                                <p style={{ color: '#00D900' }}>Caminhão de carga</p>    
                            </>
                            :
                            <>
                                <BsSquare 
                                    size={12}
                                />
                                <p >Caminhão de carga</p>    
                            </>
                        }
                    </li>
                    <li
                        onClick={() => handleFilter('Harvester')}
                    >
                        {
                            filterOption === 'Harvester' ?
                            <>
                                <BsCheckSquare 
                                    size={12}
                                    color={'#00D900'}
                                />
                                <p style={{ color: '#00D900' }}>Harvester</p>    
                            </>
                            :
                            <>
                                <BsSquare 
                                    size={12}
                                />
                                <p>Harvester</p>    
                            </>
                        }
                    </li>
                    <li
                        onClick={() => handleFilter('Garra traçadora')}
                    >
                        {
                            filterOption === 'Garra traçadora' ?
                            <>
                                <BsCheckSquare 
                                    size={12}
                                    color={'#00D900'}
                                />
                                <p style={{ color: '#00D900' }}>Garra traçadora</p>    
                            </>
                            :
                            <>
                                <BsSquare 
                                    size={12}
                                />
                                <p>Garra traçadora</p>    
                            </>
                        }
                    </li>
                </ul>
            </section>
        </header>
    )
}