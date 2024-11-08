import NavVar from "../../../components/Common/NavVar/NavVar.jsx";
import Header from "../../../components/Common/Header/Header.jsx";
import Footer from "../../../components/Common/Footer/Footer.jsx";

const History = ()=>{
    return (
        <div className={'history-container'}>
            <NavVar/>
            <Header message={'Mantente informado de partidos anteriores y de otras temporadas'}/>
            <main className={'content-from-main'}>

            </main>
            <Footer/>
        </div>
    )
}

export default History