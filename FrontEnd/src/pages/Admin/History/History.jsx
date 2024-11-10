import "./History.css";
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import TableData from "../../../components/Admin/TableData/TableData.jsx";

const History = () => {
  const headersColumns = [
    { name: "Fecha", selector: (row) => row.fecha, sortable: true },
    { name: "Deporte", selector: (row) => row.deporte, sortable: true },
    { name: "Universidad 1", selector: (row) => row.universidad_1 },
    { name: "Universidad 2", selector: (row) => row.universidad_2 },
    { name: "Ganador", selector: (row) => row.ganador },
  ];

  const dataFromDB = [
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
  ];

  const actionsForTable = ["update", "delete", "visibility"];

  return (
    <section className="admin-history-container">
      <NavAdmin />
      <Header message={"Visualiza tus eventos deportivos finalizados"} />
      <main className="admin-history-main-content">
        <TableData
          columnsName={headersColumns}
          data={dataFromDB}
          actions={actionsForTable}
        />
      </main>
      <Footer />
    </section>
  );
};

export default History;
