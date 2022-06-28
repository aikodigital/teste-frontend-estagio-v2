import { useState, useEffect } from "react";

import ReactModal from "react-modal";

import { GrFormClose } from 'react-icons/gr';

import styles from './styles.module.scss';
import { modalStyles, closeIcon } from "./styles";

import { useEquipment } from '../../hooks/equipment';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function Modal({
    isOpen,
    onRequestClose,
}: ModalProps){
    const [loading, setLoading] = useState(true);

    const { desiredEquipmentHistoryList } = useEquipment();

    useEffect(() => {
        if(desiredEquipmentHistoryList.length !== 0){
            setLoading(false);
        }
    }, [desiredEquipmentHistoryList]);

    if(loading) {
        return (
            <ReactModal
                isOpen={isOpen}
            ></ReactModal>
        );
    } else {
        return (
            <ReactModal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                style={modalStyles}
            >
                <div
                    style={closeIcon}
                    onClick={onRequestClose}
                >
                    <GrFormClose 
                        size={40}
                    />
                </div>

                <h1
                    className={styles.title}
                >Histórico do equipamento {desiredEquipmentHistoryList[0].name}</h1>

                <table
                    className={styles.table}
                >
                    <thead>
                        <tr
                            className={styles.table_head}
                        >
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        desiredEquipmentHistoryList.map((element) => {
                            return (
                                <tr
                                    key={element.id}
                                >
                                    <td>
                                        {element.date}
                                    </td>
                                    <td>
                                        {element.time}
                                    </td>
                                    <td
                                        style={{
                                            color: `${element.color}`,
                                            fontWeight:700,
                                            textTransform: "uppercase"
                                        }}
                                    >
                                        {element.state}
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </ReactModal>
        )
    }
}