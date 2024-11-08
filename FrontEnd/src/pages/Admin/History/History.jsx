import HeaderAdmin from "../../../components/Admin/HeaderAdmin/HeaderAdmin.jsx";
import './History.css';

const History = () => {
    const matches = [
        { teamA: 'Equipo A', scoreA: 3, teamB: 'Equipo B', scoreB: 1, date: '03/11/2024', time: '14:00' },
        { teamA: 'Equipo C', scoreA: 2, teamB: 'Equipo D', scoreB: 2, date: '02/11/2024', time: '16:00' },
        { teamA: 'Equipo E', scoreA: 1, teamB: 'Equipo F', scoreB: 3, date: '01/11/2024', time: '10:00' },
    ];

    return (
        <section className="content">
            <HeaderAdmin />
            <h2 className="history-title">Historial de Partidos</h2>
            <div className="table-container">
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Equipo A</th>
                            <th>Resultado</th>
                            <th>Equipo B</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches.map((match, index) => (
                            <tr key={index}>
                                <td>{match.teamA}</td>
                                <td className="score">
                                    <span className="scoreA">{match.scoreA}</span> - <span className="scoreB">{match.scoreB}</span>
                                </td>
                                <td>{match.teamB}</td>
                                <td>{match.date}</td>
                                <td>{match.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default History;
