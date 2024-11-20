import {Link} from 'react-router-dom'
import './NavAccess.css'

const NavAccess = () => {
    return (
        <div className={'tab-conteiner'}>
            <button className='tab-button'><Link to="/register">Crear Cuenta </Link></button>
            <button className='tab-button active'><Link to="/login">Iniciar Sesión </Link></button>
        </div>
    )
}
export default NavAccess