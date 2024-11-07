import React, {useState} from 'react';
import DataTable from 'react-data-table-component';
import {Modal, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TableData.css'

const TableData = () => {
    //Este es un array de objetos, esta estático solamente para ver como se visualiza la información en la Tabla
    const data = [
        {
            id: 1,
            deporte: 'Fútbol 11',
            fecha: '15/09/2024',
            hora: '10:00',
            universidad_1: 'UES',
            universidad_2: 'UCA',
            estado: 'No empezado'
        },
        {
            id: 2,
            deporte: 'Baloncesto',
            fecha: '18/09/2024',
            hora: '14:00',
            universidad_1: 'UTEC',
            universidad_2: 'UDB',
            estado: 'En progreso'
        },
        {
            id: 3,
            deporte: 'Voleibol',
            fecha: '20/09/2024',
            hora: '16:30',
            universidad_1: 'UFG',
            universidad_2: 'UEES',
            estado: 'Finalizado'
        },
        {
            id: 4,
            deporte: 'Fútbol Sala',
            fecha: '22/09/2024',
            hora: '09:00',
            universidad_1: 'UNICAES',
            universidad_2: 'UNIVO',
            estado: 'No empezado'
        },
        {
            id: 5,
            deporte: 'Baloncesto',
            fecha: '25/09/2024',
            hora: '11:00',
            universidad_1: 'UNAB',
            universidad_2: 'USAM',
            estado: 'En progreso'
        },
        {
            id: 6,
            deporte: 'Voleibol',
            fecha: '27/09/2024',
            hora: '13:00',
            universidad_1: 'UJMD',
            universidad_2: 'UNASA',
            estado: 'Finalizado'
        },
        {
            id: 7,
            deporte: 'Fútbol 11',
            fecha: '30/09/2024',
            hora: '15:00',
            universidad_1: 'UES',
            universidad_2: 'UDB',
            estado: 'No empezado'
        },
        {
            id: 8,
            deporte: 'Fútbol Sala',
            fecha: '02/10/2024',
            hora: '17:00',
            universidad_1: 'UCA',
            universidad_2: 'UTEC',
            estado: 'En progreso'
        },
        {
            id: 9,
            deporte: 'Baloncesto',
            fecha: '05/10/2024',
            hora: '19:00',
            universidad_1: 'UFG',
            universidad_2: 'UNIVO',
            estado: 'Finalizado'
        },
        {
            id: 10,
            deporte: 'Voleibol',
            fecha: '07/10/2024',
            hora: '08:00',
            universidad_1: 'UNICAES',
            universidad_2: 'UEES',
            estado: 'No empezado'
        },
    ];

    //Esta es una propiedad de la libreria de la Tabla, es para customizarla (estilos)
    const customStyles = {
        header: {
            style: {
                display: 'none',
            },
        },
        headCells: {
            style: {
                fontSize: '1.2rem',
                fontFamily: '"Roboto", sans-serif',
            }
        },

        rows: {
            style: {
                fontSize: '1rem'
            }
        }
    };


    const [showModal, setShowModal] = useState(false); //Mostrar el modal
    const [selectedRow, setSelectedRow] = useState(null); //Saber si se ha seleccionada una fila

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setShowModal(true);
    };

    const handleEdit = () => {
        console.log('Editar:', selectedRow);
        // Lógica para editar
        setShowModal(false);
    };

    const handleDelete = () => {
        console.log('Eliminar:', selectedRow);
        // Lógica para eliminar
        setShowModal(false);
    };

    const columns = [
        {name: 'Deporte', selector: row => row.deporte, sortable: true},
        {name: 'Fecha', selector: row => row.fecha, sortable: true},
        {name: 'Hora', selector: row => row.hora, sortable: true},
        {name: 'Universidad_1', selector: row => row.universidad_1, sortable: true},
        {name: 'Universidad_2', selector: row => row.universidad_2, sortable: true},
        {name: 'Estado', selector: row => row.estado, sortable: true},
    ];

    return (
        <section className={'content'}>
            <div className={'add-btn-container'}>
                <button className={'add-btn'} title={'Nuevo partido'}><i className="fa-solid fa-circle-plus add"></i>
                </button>
            </div>
            <DataTable
                title="Partidos planificados" //Titulo de la tabla - lo he ocultado
                customStyles={customStyles} //Los estilos customizados
                columns={columns} //las columnas
                data={data} //el array de objetos al inicio
                pagination
                onRowClicked={handleRowClick} //acciones al momento que se seleccione una fila
                pointerOnHover
                highlightOnHover
            />

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Acciones</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Seleccione una acción para {selectedRow?.nombre}:</p>
                    <Button variant="primary" onClick={handleEdit} style={{marginRight: '10px'}}>
                        Editar
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default TableData;
