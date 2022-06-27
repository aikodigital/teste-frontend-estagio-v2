import React, { useState } from 'react'
import { Modal, Box, Typography, Button, TableHead, TableRow, TableCell, Table, TableBody, TableContainer, Paper } from '@mui/material';
import styles from './positionHistory.module.css'

const PositionHistory = ({equip, close}) => {
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
                    <Typography className={styles.title} variant="h6" component="h1">Histórico de Posições</Typography>
                    <Typography variant="h6" component="h2" className={styles.name}>Modelo:{equip.model}</Typography>
                    <Typography variant="h6" component="h2" className={styles.name}>Nome:{equip.name}</Typography>
                    <Paper sx={{ width: '100%'}}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Data</TableCell>
                                    <TableCell>Hora</TableCell>
                                    <TableCell>Position</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {equip.positionHistory.map((position) => {
                                    return(
                                        <TableRow>
                                            <TableCell>
                                                {position[0].split('T')[0]}
                                            </TableCell>
                                            <TableCell>
                                                {position[0].split('T')[1].split('.')[0]}
                                            </TableCell>
                                            <TableCell>
                                                lat: {position[1]}
                                                <br></br>
                                                lon: {position[2]}
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

export default PositionHistory;