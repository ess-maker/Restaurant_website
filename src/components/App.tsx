import Category from "./category/Category";
import Diet from "./diet/Diet";
import Hero from "./herosection/Hero";
import Benfits from "./ladingpages/Benfits";
import Cook from "./ladingpages/Cook";
import Listmenu from "./menu/Listmenu";
import Menu from "./menu/Menu";
import Reservition from "./order/Reservtion"
function App() {
  return (
    <div className="app">
      <div className="app_one">
        <Hero />
        <Diet />
      </div>
      <div className="app_two">
        <Menu />
        <Listmenu />
      </div>
      <div className="app_three">
        <Cook />
      </div>
      <div className="app_there">
        <Benfits />
      </div>
      <div className="app_five">
      <Reservition />
      </div>
      <div className="app_six">
      <Category />
      </div>
    </div>
  )
}

export default App