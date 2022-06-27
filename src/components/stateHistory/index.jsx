import React, { useState } from 'react'
import { Modal, Box, Typography, Button, TableHead, TableRow, TableCell, Table, TableBody, TableContainer, Paper } from '@mui/material';
import styles from './stateHistory.module.css'

const StateHistory = ({equip, close}) => {
    const [open, setOpen] = useState(true)
    return(
        <div>
            {open&&(
                <Modal
                    open={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                <Box className={styles.box}>
                    <Typography className={styles.title} variant="h6" component="h1">Histórico de Estados</Typography>
                    <Typography variant="h6" component="h2" className={styles.name}>Modelo:{equip.model}</Typography>
                    <Typography variant="h6" component="h2" className={styles.name}>Nome:{equip.name}</Typography>
                    <Paper sx={{ width: '100%'}}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Hora</TableCell>
                                    <TableCell>Estado</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {equip.stateHistory.map((state) => {
                                    return(
                                        <TableRow>
                                            <TableCell>
                                                {state[2].split('T')[0]}
                                            </TableCell>
                                            <TableCell>
                                                {state[2].split('T')[1].split('.')[0]}
                                            </TableCell>
                                            <TableCell style={{color:state[1]}}>
                                                {state[0]}
                                            </TableCell>
                                        </TableRow> 
                                    )
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    <Button variant={'outlined'} onClick={() =>{setOpen(false);close(equip.id)}}>Fechar</Button>
                </Box>
                </Modal>
            )}
        </div>
    )
}

export default StateHistory;