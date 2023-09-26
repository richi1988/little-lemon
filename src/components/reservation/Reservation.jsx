import "../../assets/css/Reservation.css";
import ReservationForm from "./ReservationForm";

function Reservation() {
  return (
    <div className="reservation-wrapper">
      <div className="reservation-container global-max-width">
      <div className="reservation-form">
          <h1 className="title-reserva">Reserva de mesa</h1>
          <ReservationForm />
        </div>
     
     
      </div>
    </div>
  );
}

export default Reservation;
