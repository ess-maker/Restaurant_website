import "../../scss/pages/_footer.scss"
import Contact from "./Contact"
import Email from "./Email"
import Reserved from "./Reserved"

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer" >
        <h1>Food<span>Zero.</span></h1>
        <Contact />
        <Email />
    </div>
    <Reserved />
    </div>
  )
}

export default Footer