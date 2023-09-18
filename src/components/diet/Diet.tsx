import assest from "../../assets/imges"
import "../../scss/pages/_diet.scss"

const diet = () => {
  return (
    <section className='diet_container'>
        <div className='diet-one'>
            <img src={assest.pichamel} alt="pichamel" className="pichamel" />
            <h1 className="diet-titel">Start to plan your diet today</h1>
            <p className="diet-discrption">Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Neque congue arcu</p>
        </div>
        <div className='diet-two'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            <img src={assest.glasses} alt="glasses" className="glasses" />
        </div>

    </section>
  )
}

export default diet