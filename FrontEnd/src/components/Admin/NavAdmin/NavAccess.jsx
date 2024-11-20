import {Link} from 'react-router-dom'
import './NavAccess.css'

const NavAccess = () => {
    return (
        <div className={'menu-example'}>
            <button><Link to="/register">Crear Cuenta </Link></button>
            <button><Link to="/login">Iniciar Sesión </Link></button>
        </div>
    )
}
export default NavAccess