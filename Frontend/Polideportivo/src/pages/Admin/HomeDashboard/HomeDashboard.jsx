import HeaderAdmin from "../../../components/Admin/Header/HeaderAdmin.jsx";
import UcaLogo from "../../../assets/images/UCA.png";
import './HomeDashboard.css'

const HomeDashboard = ()=>{
    return (
        <section className={'content'}>
            <HeaderAdmin/>
            <main className={'container'}>
                <div className={'main-content'}>
                    <div className={'container flex'}>
                        <img className={'logo-uca'} src={UcaLogo} alt={'Logo Uca'}/>
                        <h1 className={'title-uca'}>Universidad Centroamericana José Simón Cañas</h1>
                    </div>

                    <div className={'data-from-db matches'}>
                        <h2>Partidos transcurriendo</h2>
                    </div>
                    <div className={'data-from-db trainings'}>
                        <h2>Entrenamientos transcurriendo</h2>
                    </div>

                </div>
            </main>
        </section>
    );
}

export default HomeDashboard;