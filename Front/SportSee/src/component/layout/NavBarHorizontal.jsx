import { NavLink } from 'react-router-dom';

import './NavBarHorizontal.css'

import logo from '../../assets/logo.svg'
import nameSite from '../../assets/nameSite.svg'

function NavBarHorizontal() {
  return (
    <div className='NavBarHorizontal'>
        <div className="container-logo">
            <img  className='logo'src={logo} alt="logo de Sport See" />
            <img  className='nameSite'src={nameSite} alt="nom du site web : Sport See" />
        </div>
        <a>Accueil</a>
        <a>Profil</a>
        <a>Réglage</a>
        <a>Communauté</a>
    </div>
  )
}
export default NavBarHorizontal