import assest from "../../assets/imges"
import { categorys } from "../../content"
import "../../scss/pages/_category.scss"

const Category = () => {
  return (
    <div className="Category_container">
        <h1 className="Category_titel">Calories Energy Balance</h1>
        <p className="Category_discrption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div className="holder ">
            {categorys.map((category , index) => (
                <div key={index} className="Category_element">
                    <img src={category.img} alt="" className="category_img" />
                    <div className="content">
                        <h3>{category.titel}</h3>
                        <img src={assest.arrow_right} alt="arrow_right" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category