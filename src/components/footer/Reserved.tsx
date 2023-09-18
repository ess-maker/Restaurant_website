import assest from "../../assets/imges"

const Reserved = () => {
    const shochilmedia:string[] = [assest.Icon_facebook , assest.Icon_instagram , assest.Icon_twitter , assest.Icon_youtube]
  return (
    <div className="Reserved">
        <h1>© 2020 Zero Inc. All rights Reserved</h1>
        <ul className="list_icon">
            {shochilmedia.map(ele => (
                <img src={ele} alt="" />
            ))}
        </ul>
    </div>
  )
}

export default Reserved