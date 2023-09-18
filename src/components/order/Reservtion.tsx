import "../../scss/pages/_reservation.scss";

const reservation = () => {
  return (
    <div className="reservation_container">
        <h1>Make a Reservation</h1>
        <p>Get in touch with restaurant</p>
          <form action="">
            <div className="chose_date">
            <input type="date" />
            <select name="" id="">
            {Array.from({ length: 6 }, (_, index:number) => (
    <option value="" key={index}>
      {index + 1}:00 pm
    </option>
  ))}s
            </select>
            <select name="" id="">
  {Array.from({ length: 6 }, (_, index:number) => (
    <option value="" key={index}>
      {index + 1} Person
    </option>
  ))}
</select>
            </div>
           <input type="submit" value="Book Now" />
           </form>
        </div>
  )
}

export default reservation