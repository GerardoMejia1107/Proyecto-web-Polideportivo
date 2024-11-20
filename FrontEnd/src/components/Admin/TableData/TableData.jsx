import React, {useState, useEffect} from "react";
import TableComponent, {createTheme} from "react-data-table-component";
import "./TableData.css";
import useDelete from "../../../hooks/useDelete";
import {SPORT_FRM, TRAIN_FRM, UNIV_FRM} from "../../../config/forms.js";
import UniversityForm from "../Forms/UniversityForm/UniversityForm.jsx";
import SportForm from "../Forms/SportForm/SportForm.jsx";
import Modal from "../Forms/ModalForm/Modal.jsx";
import {HIST_MATCHES_TBL, NEW_MATCHES_TBL, SPORTS_TBL, TRAINS_TBL, UNIV_TBL} from "../../../config/tables.js";
import TrainingForm from "../Forms/TrainForm/TrainingForm.jsx";
import usePut from "../../../hooks/usePut.js";

const TableData = ({
                       columnsName,
                       data,
                       actions,
                       title,
                       urls,
                       tableName,
                       refreshData,
                   }) => {
    // Para manejar los datos de la tabla
    const [tableData, setTableData] = useState(data || []);

    // Hook para manejar la eliminación del registro en la base de datos
    const {handleDelete, loading, error} = useDelete();

    const {
        handlePut,
        loading: putLoading,
        error: putError,
    } = usePut();

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
        let deleteUrl = "";
        switch (tableName) {
            case UNIV_TBL:
                deleteUrl = `${urls.universityURLS.delete}/${id}`;
                break;

            case SPORTS_TBL:
                deleteUrl = `${urls.sportURLS.delete}/${id}`;
                break;

            case TRAINS_TBL:
                deleteUrl = `${urls.trainURLS.delete}/${id}`;
                break;
        }

        if (await handleDelete(deleteUrl)) {
            // Actualiza y solicita al padre que recargue los datos
            refreshData();
        }
    };

    const updateRow = (id) => {

        {
            setIdSelected(id);
            if (tableName === UNIV_TBL) {
                openModal(UNIV_FRM);
            }
            if (tableName === SPORTS_TBL) {
                openModal(SPORT_FRM);
            }
            if (tableName === TRAINS_TBL) {
                openModal(TRAIN_FRM);
            }
        }
    }

    const updateVisibility = async (id, currentVisibility) => {
        let updateUrl = "";
        let switchedVisibility;

        switchedVisibility = !currentVisibility;

        switch (tableName) {
            case TRAINS_TBL:
                updateUrl = `${urls.trainURLS.update}/${id}`;

                await handlePut(updateUrl, {visibility: switchedVisibility});
                break;

            case NEW_MATCHES_TBL:

                break;

            case HIST_MATCHES_TBL:
                break;
        }
        refreshData()
    }


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
                                updateRow(row._id)
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
                    {
                        actions.includes("visibility") && (
                            <button
                                title="Visibilidad"
                                className="visibility-button table-action-btn"
                                onClick={async () => {
                                    await updateVisibility(row._id, row.visibility);
                                }}
                            >
                                <i className={row.visibility ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                            </button>
                        )
                    }

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
            {error && <p style={{color: "red"}}>Error: {error}</p>}
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

            {
                // Modal que muestra como contenido el formulario correspondiente
            }
            <Modal show={isModalOpen} onClose={closeModal}>
                {activeForm === SPORT_FRM && (
                    <SportForm
                        onClose={closeModal}
                        id={idSelected}
                        refresh={() => {
                            refreshData();
                        }}
                    />
                )}

                {activeForm === UNIV_FRM && (
                    <UniversityForm
                        onClose={closeModal}
                        id={idSelected}
                        refresh={() => {
                            refreshData();
                        }}
                    />
                )}

                {activeForm === TRAIN_FRM && (
                    <TrainingForm
                        onClose={closeModal}
                        show={true}
                        id={idSelected}
                        refresh={() => {
                            refreshData();
                        }}
                    />
                )}
            </Modal>
        </>
    );
};

export default TableData;


