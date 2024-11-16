import TableComponent, {createTheme} from "react-data-table-component";
import "./TableData.css";
import React, {useState} from "react";
import useDelete from "../../../hooks/useDelete";

const TableData = ({columnsName, data, actions, title, urls, tableName, status}) => {
    const [visibilityToggled, setVisibilityToggled] = useState({});
    const [tableData, setTableData] = useState(data || []);
    const {handleDelete, loading, error} = useDelete();

    const columns = [
        ...columnsName,
        {
            name: "Acciones",
            cell: (row) => (
                <div className="action-buttons-container">
                    {actions.includes("update") && (
                        <button
                            title={"Editar"}
                            className="update-button table-action-btn"
                            onClick={() => {
                                console.log("Editar:", row._id);
                                // Add your update logic here
                            }}
                        >
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    )}
                    {actions.includes("delete") && (
                        <button
                            title={"Eliminar"}
                            className="delete-button table-action-btn"
                            onClick={async () => {
                                if (tableName === 'universities') {
                                    if (await handleDelete(`${urls.universitiesUrl}/${row._id}`)) {
                                        status(true);
                                    }

                                }
                                if (tableName === 'sports') {

                                    if (handleDelete(`${urls.sportsUrl}/${row._id}`)) {
                                        status(true);
                                    }
                                }
                            }}
                        >
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    )}
                    {actions.includes("visibility") && (
                        <button
                            title={"Visibilidad"}
                            className="visibility-button table-action-btn"
                            onClick={() => handleVisibility(row)}
                        >
                            <i
                                className={
                                    visibilityToggled[row._id]
                                        ? "fa-solid fa-eye-slash"
                                        : "fa-solid fa-eye"
                                }
                            ></i>
                        </button>
                    )}
                </div>
            ),
        },
    ];

    const handleVisibility = (row) => {
        setVisibilityToggled((prev) => ({...prev, [row._id]: !prev[row._id]}));
    };

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: "#003c71", // Darker background for the header
                color: "#ffffff", // White text for contrast
                fontFamily: '"Roboto", sans-serif',
                fontWeight: "600",
                textAlign: "center",
                borderBottom: "2px solid #f0f0f0", // Header bottom border
            },
        },
        rows: {
            style: {
                minHeight: "3.5rem",
                fontFamily: '"Roboto", sans-serif',
                "&:nth-of-type(odd)": {
                    backgroundColor: "#f7faff", // Alternate row background color
                },
                "&:hover": {
                    backgroundColor: "#e1f0ff", // Hover background color
                },
            },
        },
        cells: {
            style: {
                borderRight: "1px solid #e0e0e0", // Borders between cells
                padding: "10px", // Cell padding
                textAlign: "center", // Text alignment
            },
        },
    };

    createTheme("theme", {
        background: {
            default: "#F5F7F8",
        },
    });

    return (
        <>
            {error && <p style={{color: "red"}}>Error: {error}</p>}
            {loading && <p>Loading...</p>}
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
        </>
    );
};

export default TableData;
