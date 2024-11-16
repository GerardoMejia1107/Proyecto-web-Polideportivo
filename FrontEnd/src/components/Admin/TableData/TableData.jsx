import React, { useState, useEffect } from "react";
import TableComponent, { createTheme } from "react-data-table-component";
import "./TableData.css";
import useDelete from "../../../hooks/useDelete";
import { SPORT_FORM, U_FORM } from "../../../config/forms.js";
import UniversityForm from "../Forms/University/UniversityForm.jsx";
import SportForm from "../Forms/Sport/SportForm.jsx";
import Modal from "../Forms/ModalForm/Modal.jsx";
import { outcome } from "../../../utils/sweetAlert.js";

const TableData = ({ columnsName, data, actions, title, urls, tableName, refreshData }) => {
    // Para manejar los datos de la tabla
    const [tableData, setTableData] = useState(data || []);

    // Hook para manejar la eliminación del registro en la base de datos
    const { handleDelete, loading, error } = useDelete();

    // useState para manejar el id del DOC seleccionado y trabajar con este ya sea para Actualizar o Eliminar
    const [idSelected, setIdSelected] = useState(null);

    // useStates para manejar qué formularios se abren y están activos
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeForm, setActiveForm] = useState(null);

    const openModal = (form) => {
        setActiveForm(form);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setActiveForm(null);
    };

    // Sincronizar `data` con `tableData` cada vez que cambie
    useEffect(() => {
        setTableData(data || []);
    }, [data]);

    // Función para manejar la eliminación
    const deleteRow = async (id) => {
        const deleteUrl =
            tableName === "universities"
                ? `${urls.universityURLS.delete}/${id}`
                : `${urls.sportURLS.delete}/${id}`;

        const isDeleted = await handleDelete(deleteUrl);

        if (isDeleted) {
            // Actualiza los datos localmente o solicita al padre que recargue los datos
            setTableData((prevData) => prevData.filter((row) => row._id !== id));
            if (refreshData) refreshData(); // Notifica al padre si `refreshData` está definido
        }
    };


    // Array que combina las columnas que se tendrán en la tabla
    const columns = [
        ...columnsName,
        {
            name: "Acciones",
            cell: (row) => (
                <div className="action-buttons-container">
                    {actions.includes("update") && (
                        <button
                            title="Editar"
                            className="update-button table-action-btn"
                            onClick={() => {
                                openModal(SPORT_FORM);
                                setIdSelected(row._id);
                            }}
                        >
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    )}
                    {actions.includes("delete") && (
                        <button
                            title="Eliminar"
                            className="delete-button table-action-btn"
                            onClick={() => deleteRow(row._id)} // Manejar eliminación
                        >
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    )}
                </div>
            ),
        },
    ];

    // Estilos personalizados para la librería de la Tabla que se esta usando
    const customStyles = {
        headCells: {
            style: {
                backgroundColor: "#003c71",
                color: "#ffffff",
                fontFamily: '"Roboto", sans-serif',
                fontWeight: "600",
                textAlign: "center",
                borderBottom: "2px solid #f0f0f0",
            },
        },
        rows: {
            style: {
                minHeight: "3.5rem",
                fontFamily: '"Roboto", sans-serif',
                "&:nth-of-type(odd)": {
                    backgroundColor: "#f7faff",
                },
                "&:hover": {
                    backgroundColor: "#e1f0ff",
                },
            },
        },
        cells: {
            style: {
                borderRight: "1px solid #e0e0e0",
                padding: "10px",
                textAlign: "center",
            },
        },
    };

    // Tema personalizado para la librería de la Tabla que se esta utilizando
    createTheme("theme", {
        background: {
            default: "#F5F7F8",
        },
    });

    return (
        <>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {loading && <p>Eliminando...</p>}

            <TableComponent
                title={title}
                customStyles={customStyles}
                columns={columns}
                data={tableData}
                pagination
                pointerOnHover
                highlightOnHover
                theme={"theme"}
            />

            {// Modal que muestra como contenido el formulario correspondiente
            }
            <Modal show={isModalOpen} onClose={closeModal}>
                {activeForm === SPORT_FORM && (
                    <SportForm onClose={closeModal} id={idSelected} />
                )}
            </Modal>
        </>
    );
};

export default TableData;
