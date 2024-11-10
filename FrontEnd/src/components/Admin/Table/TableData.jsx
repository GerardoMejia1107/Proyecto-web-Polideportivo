import TableComponent, { createTheme } from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";
import './TableData.css'
import React, { useState } from 'react';

const TableData = () => {
    const [visibilityToggled, setVisibilityToggled] = useState({});
    const [tableData, setTableData] = useState([
        {
            id: 1,
            deporte: "Fútbol 11",
            universidad_1: "UCA",
            universidad_2: "UES",
            marcador_1: 2,
            marcador_2: 1,
            ganador: "UCA",
            fecha: "2024-10-01",
        },
        {
            id: 2,
            deporte: "Baloncesto",
            universidad_1: "UTEC",
            universidad_2: "UNIVO",
            marcador_1: 76,
            marcador_2: 85,
            ganador: "UNIVO",
            fecha: "2024-10-05",
        },
        {
            id: 3,
            deporte: "Voleibol",
            universidad_1: "UFG",
            universidad_2: "UDB",
            marcador_1: 3,
            marcador_2: 0,
            ganador: "UFG",
            fecha: "2024-10-08",
        },
        {
            id: 4,
            deporte: "Fútbol Sala",
            universidad_1: "UNICAES",
            universidad_2: "USAM",
            marcador_1: 4,
            marcador_2: 4,
            ganador: "Empate",
            fecha: "2024-10-12",
        },
        {
            id: 5,
            deporte: "Baloncesto",
            universidad_1: "UES",
            universidad_2: "UJMD",
            marcador_1: 68,
            marcador_2: 72,
            ganador: "UJMD",
            fecha: "2024-10-15",
        },
    ]);

    const columns = [
        { name: "Fecha", selector: (row) => row.fecha, sortable: true },
        { name: "Deporte", selector: (row) => row.deporte, sortable: true },
        { name: "Universidad 1", selector: (row) => row.universidad_1 },
        { name: "Universidad 2", selector: (row) => row.universidad_2 },
        { name: "Ganador", selector: (row) => row.ganador },
        {
            name: "Acciones",
            cell: (row) => (
                <div className="action-buttons-container">
                    <button  title={'Editar'} className="update-button table-action-btn" onClick={() => handleUpdate(row)}><i
                        className="fa-solid fa-pen-to-square"></i></button>
                    <button  title={'Eliminar'} className="delete-button table-action-btn" onClick={() => handleDelete(row.id)}><i
                        className="fa-solid fa-trash"></i></button>
                    <button
                         title={'Visibilidad'} className="visibility-button table-action-btn"
                        onClick={() => handleVisibility(row)}
                    >
                        <i className={visibilityToggled[row.id] ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
                    </button>
                </div>

            )
        }
    ];

    const handleDelete = (id) => {
        const updatedData = tableData.filter(row => row.id !== id);
        setTableData(updatedData);
    };

    const handleUpdate = (row) => {
        const updatedRow = {...row, ganador: "Updated"}; // Example update logic
        const updatedData = tableData.map(item => item.id === row.id ? updatedRow : item);
        setTableData(updatedData);
    };

    const handleVisibility = (row) => {
        setVisibilityToggled(prev => ({ ...prev, [row.id]: !prev[row.id] }));
    };

    const customStyles = {
        headCells: {
            style: {
                fontFamily: '"Roboto", sans-serif',
                fontWeight: '500',
            },
        },
        rows: {
            style: {
                minHeight: '3.5rem',
                fontFamily: '"Roboto", sans-serif',
            },
        },
    };

    createTheme('theme', {
        background: {
            default: '#f8f6f3',
        },
    });

    return (
        <>
            <TableComponent
                customStyles={customStyles}
                columns={columns}
                data={tableData}
                pagination
                pointerOnHover
                highlightOnHover
                theme={'theme'}
            />
        </>
    );
};

export default TableData;