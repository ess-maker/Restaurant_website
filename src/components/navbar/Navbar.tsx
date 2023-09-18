import assest from "../../assets/imges"

import "../../scss/pages/_navbar.scss";

const Navbar = () => {
   return (
    <div className="navbar">
      <div className="navbar_logo">
        <img className="logo" src={assest.logo} alt="logo" />
        <img className="menu" src={assest.NaviOpen} alt="menu" />
      </div>
      <div className="navbar_contact">
        <p className="number">+86 852 346 000</p>
        <p className="reservations">Reservations</p>
      </div>
    </div>
  )
}

export default Navbar