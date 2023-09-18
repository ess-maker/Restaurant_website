import { benfites } from "../../content"
import "../../scss/pages/_benfites.scss"

const Benfits = () => {
  return (
    <div className="Benfits_container">
        {benfites.map((benfite , index) => (
            <div key={index} className="benfite_element">
                <img src={benfite.img} alt="benfite_img" />
                <h1>{benfite.titel}</h1>
                <p>{benfite.discrption}</p>
            </div>
        ))}
    </div>
  )
}

export default Benfits