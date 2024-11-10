import TableComponent, { createTheme } from "react-data-table-component";
import "./TableData.css";
import React, { useState } from "react";

const TableData = ({ columnsName, data, actions }) => {
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
        fontFamily: '"Roboto", sans-serif',
        fontWeight: "500",
      },
    },
    rows: {
      style: {
        minHeight: "3.5rem",
        fontFamily: '"Roboto", sans-serif',
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
