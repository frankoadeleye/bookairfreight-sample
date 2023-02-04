import "src/styles/shipment-card.css";

interface ShipmentCardProps {
  flight_type: string;
  icon: string;
  starting: string;
  destination: string;
  children: React.ReactNode;
  card_quote_price: string;
}

function ShipmentCard(props: ShipmentCardProps) {
  const {
    flight_type,
    icon,
    starting,
    destination,
    children,
    card_quote_price,
  } = props;

  return (
    <div className="shipment-card">
      <div>
        <div className="flight-type-header">
          <i className={icon}></i>
          <p>{flight_type}</p>
        </div>
        <div className="flight-delivery-date">{children}</div>
      </div>
      <div>
        <div className="card-destination-header">
          {starting} <i className="fa-solid fa-arrow-right-long"></i>{" "}
          {destination}
        </div>
        <div className="card-quote-price">US$ {card_quote_price}</div>
      </div>
    </div>
  );
}

export default ShipmentCard;
