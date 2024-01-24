import './NavBarVertical.css'

import iconYoga from '../../assets/iconYoga.svg'
import iconCycling from '../../assets/iconCycling.svg'
import iconBodybuilding from '../../assets/iconBodybuilding.svg'
import iconSwin from '../../assets/iconSwin.svg'


function NavBarVertical() {
  return (

    <div className='NavBarVertical'>
        <div className="container-icone-navbar">
            <img src={iconYoga} alt="Icone Yoga" className="iconNavbarVertical" />
            <img src={iconSwin} alt="Icone Natation" className="iconNavbarVertical" />
            <img src={iconCycling} alt="Icone Cyclisme" className="iconNavbarVertical" />
            <img src={iconBodybuilding} alt="Icone Musculation" className="iconNavbarVertical" />
        </div>
        <small className='mention-copiryght'>Copiryght, SportSee 2020</small>
    </div>
  )
}
export default NavBarVertical