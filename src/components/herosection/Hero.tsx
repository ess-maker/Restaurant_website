import assest from "../../assets/imges"
import "../../scss/pages/_hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero_part_one">
            <div className="hero_content">
            <h1 className="hero_titel">Healthy Eating <span className="uniq">is important </span> part of lifestyle</h1>
            <p className="hero_discrption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            <img src={assest.scroll} alt="scroll" className="hero_Scroll" />
            </div>
        </div>
        <div className="hero_imges">
            <img className="hero_img" src={assest.Image} alt="hero-img" />
            <div className="hero_spices">
                <img src={assest.spices1} alt="spices1" />
                <img src={assest.spices2} alt="spices2" />
                <img src={assest.spices3} alt="spices3" />
            </div>
        </div>
    </div>
  )
}

export default Hero