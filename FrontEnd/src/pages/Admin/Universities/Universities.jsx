import './Universities.css';
import NavAdmin from '../../../components/Admin/NavAdmin/NavAdmin.jsx';
import Header from '../../../components/Common/Header/Header.jsx';
import TableData from '../../../components/Admin/TableData/TableData.jsx';
import Footer from '../../../components/Common/Footer/Footer.jsx';
import UniversityForm from '../../../components/Admin/Forms/University/UniversityForm.jsx';
import SportForm from '../../../components/Admin/Forms/Sport/SportForm.jsx';
import Modal from '../../../components/Admin/Forms/ModalForm/Modal.jsx';
import React, { useState } from 'react';

const Universities = () => {
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

  const headersColumns = [
    { name: 'Nombre', selector: (row) => row.nombre, sortable: true },
    {
      cell: (row) => (
          <div
              style={{
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
              }}
          >
            {row.nombre}
          </div>
      ),
    },
    {
      name: 'Ubicacion',
      selector: (row) => row.ubicacion,
      cell: (row) => (
          <div
              style={{
                lineHeight: '2.0',
                textAlign: 'start',
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                wordBreak: 'break-word',
              }}
          >
            {row.ubicacion}
          </div>
      ),
    },
  ];

  const data = [
    { id: 1, nombre: 'Biblioteca Central', ubicacion: 'Av. Universidad 123, Ciudad Universitaria' },
    { id: 2, nombre: 'Laboratorio de Física', ubicacion: 'Edificio A, Piso 2' },
    { id: 3, nombre: 'Cafetería Principal', ubicacion: 'Plaza Central, frente al Auditorio' },
    { id: 4, nombre: 'Gimnasio Universitario', ubicacion: 'Calle Deportes, junto al Estadio' },
    { id: 5, nombre: 'Centro de Informática', ubicacion: 'Edificio B, Planta Baja' },
  ];

  const actionsForTable = ['update', 'delete'];

  const sportsData = [
    { id: 1, deporte: 'Fútbol 11' },
    { id: 2, deporte: 'Baloncesto' },
    { id: 3, deporte: 'Voleibol' },
    { id: 4, deporte: 'Natación' },
    { id: 5, deporte: 'Atletismo' },
  ];

  const sportsColumns = [
    { name: 'Deporte', selector: (row) => row.deporte, sortable: true },
  ];

  return (
      <section className='admin-universities-page-container'>
        <NavAdmin />
        <Header message={'Agrega universidades que estan participando en tu torneo'} />
        <main className='admin-universities-view-content'>
          <section className='universities-table-section'>
            <button onClick={() => openModal('form1')} className='add-btn-doc add-btn-doc-universities'>
              <i className='fa-solid fa-file-circle-plus'></i>
            </button>
            <TableData
                title={<h3 className='table-title'>Universidades involucradas en tu torneo</h3>}
                columnsName={headersColumns}
                data={data}
                actions={actionsForTable}
            />
          </section>
          <section className='sports-table-section'>
            <button onClick={() => openModal('form2')} className='add-btn-doc add-btn-doc-sports'>
              <i className='fa-solid fa-file-circle-plus'></i>
            </button>
            <TableData
                title={<h3 className='table-title'>Deportes en los que tu universidad esta involucrada</h3>}
                columnsName={sportsColumns}
                data={sportsData}
                actions={actionsForTable}
            />
          </section>
          <Modal show={isModalOpen} onClose={closeModal}>
            {activeForm === 'form1' && <UniversityForm onCancel={closeModal} />}
            {activeForm === 'form2' && <SportForm onCancel={closeModal} />}
          </Modal>
        </main>
        <Footer />
      </section>
  );
};

export default Universities;
