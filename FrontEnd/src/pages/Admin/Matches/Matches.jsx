import React, { useState } from 'react';
import './Matches.css';
import NavAdmin from '../../../components/Admin/NavAdmin/NavAdmin.jsx';
import Header from '../../../components/Common/Header/Header.jsx';
import Footer from '../../../components/Common/Footer/Footer.jsx';
import TableData from '../../../components/Admin/TableData/TableData.jsx';
import MatchForm from '../../../components/Admin/Forms/Match/MatchForm.jsx';

const Matches = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); 

  const headersColumns = [
    { name: 'Fecha', selector: (row) => row.fecha, sortable: true },
    { name: 'Deporte', selector: (row) => row.deporte, sortable: true },
    { name: 'Universidad 1', selector: (row) => row.universidad_1 },
    {
      name: 'Marcador Universidad 1',
      selector: (row) => row.marcador_universidad_1,
    },
    { name: 'Universidad 2', selector: (row) => row.universidad_2 },
    {
      name: 'Marcador Universidad 2',
      selector: (row) => row.marcador_universidad_2,
    },
    { name: 'Estado', selector: (row) => row.estado },
  ];

  const dataFromDB = [
    {
      id: 1,
      fecha: '2024-11-01',
      deporte: 'Fútbol 11',
      universidad_1: 'UCA',
      marcador_universidad_1: 3,
      universidad_2: 'UES',
      marcador_universidad_2: 2,
      estado: 'Finalizado',
    },
    {
      id: 2,
      fecha: '2024-11-03',
      deporte: 'Baloncesto',
      universidad_1: 'UTEC',
      marcador_universidad_1: 85,
      universidad_2: 'UNIVO',
      marcador_universidad_2: 78,
      estado: 'Finalizado',
    },
    {
      id: 3,
      fecha: '2024-11-05',
      deporte: 'Voleibol',
      universidad_1: 'UFG',
      marcador_universidad_1: 3,
      universidad_2: 'UDB',
      marcador_universidad_2: 1,
      estado: 'Finalizado',
    },
    {
      id: 4,
      fecha: '2024-11-08',
      deporte: 'Fútbol Sala',
      universidad_1: 'UNICAES',
      marcador_universidad_1: 4,
      universidad_2: 'USAM',
      marcador_universidad_2: 4,
      estado: 'Empate',
    },
    {
      id: 5,
      fecha: '2024-11-10',
      deporte: 'Baloncesto',
      universidad_1: 'UES',
      marcador_universidad_1: 68,
      universidad_2: 'UJMD',
      marcador_universidad_2: 72,
      estado: 'Finalizado',
    },
  ];

  const actionsForTable = ['update', 'delete', 'visibility'];

  return (
    <section className='admin-matches-page-container'>
      <NavAdmin />
      <Header message={'Crea y consulta los partidos de tu institución'} />
      <main className={'admin-matches-view-content'}>
        <div className='add-btn-doc-container'>
          <button className='add-btn-doc'onClick={openModal} >
            <i className='fa-solid fa-file-circle-plus'></i>
          </button>
        </div>
        <MatchForm show={isModalOpen} onClose={closeModal} />
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

export default Matches;
