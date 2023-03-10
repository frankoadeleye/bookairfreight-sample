import { SetDocumentTitle } from "src/utils/set-doc-title";
import "src/styles/shipment-page.css";
import InputField from "src/common/input-field";
import Button from "src/common/button";
import SelectField from "src/common/select-field";
import ShipmentResult from "src/components/shipment-card/shipment-result";
import selectOptions from "./options-data";
import useShipment from "src/components/hooks/shipment";

function BookShipmentPage() {
  SetDocumentTitle("Book New Shipment");

  const {
    showQuote,
    isSubmitted,
    freightPath,
    values,
    startingCountryRef,
    destinationCountryRef,
    quotePriceRef,
    selectedFreightPath,
    handleSubmit,
  } = useShipment();

  return (
    <div className="book-shipment">
      <form onSubmit={handleSubmit}>
        <div className="inputs-wrapper">
          <InputField
            placeholder="Please enter a starting country"
            label="Starting Country"
            type="text"
            name="starting_country"
            inputRef={startingCountryRef}
            required
          />
          <InputField
            placeholder="Please enter a destination country"
            label="Destination Country"
            type="text"
            name="destination_country"
            inputRef={destinationCountryRef}
            required
          />
          <InputField
            placeholder="Please enter a quote price"
            label="Quote Price"
            type="number"
            name="quote_price"
            inputRef={quotePriceRef}
            required
          />
          <SelectField
            selectRef={selectedFreightPath}
            selectedValue={freightPath}
            options={selectOptions}
          />
        </div>
        <Button text="Create quote" />
      </form>
      <div className="shipment-card-wrapper">
        {
          <ShipmentResult
            showQuote={showQuote}
            flight_type={freightPath}
            persistedValues={values}
            isSubmitted={isSubmitted}
          />
        }
      </div>
    </div>
  );
}

export default BookShipmentPage;
