import "./History.css";
import NavAdmin from "../../../components/Admin/NavAdmin/NavAdmin.jsx";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";
import TableData from "../../../components/Admin/Table/TableData.jsx";


const History = () => {
  return (
    <section className="admin-history-container">
      <NavAdmin />
      <Header message={"Visualiza tus eventos deportivos finalizados"} />
      <main className="admin-history-main-content">

              <TableData />

      </main>
      <Footer />
    </section>
  );
};

export default History;
