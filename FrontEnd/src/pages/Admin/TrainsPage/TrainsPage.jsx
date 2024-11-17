import './TrainsPage.css';
import React, { useState } from 'react';
import NavAdmin from '../../../components/Admin/NavAdmin/NavAdmin.jsx';
import Header from '../../../components/Common/Header/Header.jsx';
import TableData from '../../../components/Admin/TableData/TableData.jsx';
import TrainingForm from '../../../components/Admin/Forms/TrainForm/TrainingForm.jsx';


const TrainsPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); 

  const headersColumns = [
    { name: 'Fecha', selector: (row) => row.fecha, sortable: true },
    { name: 'Hora', selector: (row) => row.hora },
    { name: 'Deporte', selector: (row) => row.deporte, sortable: true },
    { name: 'Lugar', selector: (row) => row.lugar },

    { name: 'Estado', selector: (row) => row.estado },
  ];

  const data = [
    {
      fecha: '2024-11-11',
      hora: '10:00 AM',
      deporte: 'Fútbol',
      lugar: 'Universidad Central',
      estado: 'Programado',
    },
    {
      fecha: '2024-11-12',
      hora: '2:00 PM',
      deporte: 'Baloncesto',
      lugar: 'Universidad del Norte',
      estado: 'Finalizado',
    },
    {
      fecha: '2024-11-13',
      hora: '4:30 PM',
      deporte: 'Vóleibol',
      lugar: 'Instituto Superior Deportivo',
      estado: 'En Progreso',
    },
    {
      fecha: '2024-11-14',
      hora: '1:00 PM',
      deporte: 'Tenis',
      lugar: 'Universidad Sur',
      estado: 'Programado',
    },
    {
      fecha: '2024-11-15',
      hora: '3:15 PM',
      deporte: 'Natación',
      lugar: 'Escuela Nacional de Deportes',
      estado: 'Cancelado',
    },
  ];

  const actionsForTable = ['update', 'delete', 'visibility'];

  return (
    <section className={'admin-trainings-page-container'}>
      <NavAdmin />
      <Header message={'Visualiza tus eventos deportivos transcurriendo'} />
      <main className={'admin-trainings-view-content'}>
        <div className='add-btn-doc-container'>
          <button className='add-btn-doc' onClick={openModal}>
            <i className='fa-solid fa-file-circle-plus'></i>
          </button>
        </div>
        <TrainingForm show={isModalOpen} onClose={closeModal} />
        <TableData
          data={data}
          columnsName={headersColumns}
          actions={actionsForTable}
        />
      </main>
    </section>
  );
};

export default TrainsPage;
