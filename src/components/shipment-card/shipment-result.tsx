import AddComma from "src/utils/add-comma";
import GetDeliveryDateRange from "src/utils/get-delivery-date-range";
import ShipmentCard from ".";
import GetIcon from "src/utils/get-icon";
import { useMemo } from "react";

function ShipmentResult({
  showQuote,
  flight_type,
  persistedValues,
  isSubmitted,
}) {
  const MemoisedRange = useMemo(
    () => (
      <GetDeliveryDateRange
        isSubmitted={isSubmitted}
        freight_path={flight_type}
      />
    ),
    [isSubmitted, flight_type]
  );

  if (showQuote) {
    return (
      <ShipmentCard
        flight_type={`Traditional ${flight_type} freight`}
        card_quote_price={AddComma(persistedValues.quote_price)}
        starting={persistedValues.starting_country}
        destination={persistedValues.destination_country}
        icon={GetIcon(flight_type)}>
        <>{MemoisedRange}</>
      </ShipmentCard>
    );
  }
}

export default ShipmentResult;
