import TableComponent, { createTheme } from "react-data-table-component";
import "./TableData.css";
import React, { useState } from "react";
import styled from "styled-components";

const TableData = ({ columnsName, data, actions, title }) => {
  const [visibilityToggled, setVisibilityToggled] = useState({});

  const [tableData, setTableData] = useState(data || []);

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
              onClick={() => handleUpdate(row)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          )}
          {actions.includes("delete") && (
            <button
              title={"Eliminar"}
              className="delete-button table-action-btn"
              onClick={() => handleDelete(row.id)}
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
                  visibilityToggled[row.id]
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

  const handleDelete = (id) => {
    const updatedData = tableData.filter((row) => row.id !== id);
    setTableData(updatedData);
  };

  const handleUpdate = (row) => {
    const updatedRow = { ...row, ganador: "Updated" };
    const updatedData = tableData.map((item) =>
      item.id === row.id ? updatedRow : item
    );
    setTableData(updatedData);
  };

  const handleVisibility = (row) => {
    setVisibilityToggled((prev) => ({ ...prev, [row.id]: !prev[row.id] }));
  };

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#003c71", // Darker background for the header
        color: "#ffffff", // White text for contrast
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "600",
        textAlign: "center",
        borderBottom: "2px solid #f0f0f0", // Línea inferior de los encabezados
      },
    },
    rows: {
      style: {
        minHeight: "3.5rem",
        fontFamily: '"Roboto", sans-serif',
        "&:nth-of-type(odd)": {
          backgroundColor: "#f7faff", // Color de fondo alterno para filas impares
        },
        "&:hover": {
          backgroundColor: "#e1f0ff", // Color de fondo al pasar el cursor
        },
      },
    },
    cells: {
      style: {
        borderRight: "1px solid #e0e0e0", // Bordes entre celdas
        padding: "10px", // Espaciado interno de las celdas
        textAlign: "center", // Alineación del texto
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
