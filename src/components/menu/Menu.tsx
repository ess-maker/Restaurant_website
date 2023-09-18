import "../../scss/pages/_menu.scss";
import assest from '../../assets/imges';

const Menu = () => {

  return (
    <div className="menu_container">
      <h1 className="menu_title">Our Menu</h1>
      <p className="menu_description">
        This is a section of your menu. Give your section a brief description
      </p>
      <img src={assest.plant} alt="plant" className="menu_plant" />
      
    </div>
  );
};

export default Menu;