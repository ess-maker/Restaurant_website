import assest from "../../assets/imges"
import "../../scss/pages/_cook.scss"

const Cook = () => {
  return (
    <div className="cook_container" >
        <img src={assest.chef} alt="chef" />
        <img src={assest.tree} alt="tree" className="treeplan" />
        <img src={assest.tree} alt="tree" className="treeplantwo" />
        <div className="cook_content">
            <h1 className="cook_titel">Excellent <span className="uniq">cook</span></h1>
            <p  className="cook_discrption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
        </div>
    </div>
  )
}

export default Cook