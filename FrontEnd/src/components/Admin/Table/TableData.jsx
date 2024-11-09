import TableComponent, {createTheme} from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.min.css";

const TableData = () => {
    const columns = [
        {name: "Deporte", selector: (row) => row.deporte, sortable: true,},
        {name: "Universidad 1", selector: (row) => row.universidad_1},
        {name: "Universidad 2", selector: (row) => row.universidad_2},
        {name: "Marcador Universidad 1", selector: (row) => row.marcador_1},
        {name: "Marcador Universidad 2", selector: (row) => row.marcador_2},
        {name: "Ganador", selector: (row) => row.ganador},
    ];

    const data = [
        {
            id: 1,
            deporte: "Fútbol 11",
            universidad_1: "UCA",
            universidad_2: "UES",
            marcador_1: 2,
            marcador_2: 1,
            ganador: "UCA",
        },
        {
            id: 2,
            deporte: "Baloncesto",
            universidad_1: "UTEC",
            universidad_2: "UNIVO",
            marcador_1: 76,
            marcador_2: 85,
            ganador: "UNIVO",
        },
        {
            id: 3,
            deporte: "Voleibol",
            universidad_1: "UFG",
            universidad_2: "UDB",
            marcador_1: 3,
            marcador_2: 0,
            ganador: "UFG",
        },
        {
            id: 4,
            deporte: "Fútbol Sala",
            universidad_1: "UNICAES",
            universidad_2: "USAM",
            marcador_1: 4,
            marcador_2: 4,
            ganador: "Empate",
        },
        {
            id: 5,
            deporte: "Baloncesto",
            universidad_1: "UES",
            universidad_2: "UJMD",
            marcador_1: 68,
            marcador_2: 72,
            ganador: "UJMD",
        },
    ];


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
    })


    return (
        <>
            <TableComponent  //Los estilos customizados
                customStyles={customStyles}
                            columns={columns} //las columnas
                            data={data} //el array de objetos al inicio
                            pagination
                            pointerOnHover
                            highlightOnHover
                theme={'theme'}

            />
        </>
    );
};

export default TableData;
