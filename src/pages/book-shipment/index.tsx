import { SetDocumentTitle } from "src/utils/set-doc-title";
import "src/styles/shipment-page.css";
import InputField from "src/common/input-field";
import Button from "src/common/button";
import { useState } from "react";
import SelectField from "src/common/select-field";
import ShipmentResult from "src/components/shipment-card/shipment-result";

function BookShipmentPage() {
  SetDocumentTitle("Book New Shipment");

  const [showQuote, setShowQuote] = useState(false);
  const [selectedFreightPath, setFreightPath] = useState("Air");
  const [updatedFreightPath, setUpdatedFreightPath] =
    useState(selectedFreightPath);
  const [isSubmitted, setSubmitted] = useState(false);

  const [values, setValues] = useState({
    starting_country: "",
    destination_country: "",
    quote_price: 0,
  });

  const [updatedValues, setUpdatedValues] = useState({
    starting_country: values.starting_country,
    destination_country: values.destination_country,
    quote_price: values.quote_price,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedFreightPath(selectedFreightPath);
    const { name, value } = event.target;
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSelectedFreightPath = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFreightPath(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUpdatedValues({
      starting_country: values.starting_country,
      destination_country: values.destination_country,
      quote_price: values.quote_price,
    });
    setUpdatedFreightPath(selectedFreightPath);
    setShowQuote(true);
    setSubmitted(true);
  };

  return (
    <div className="book-shipment">
      <form onSubmit={handleSubmit}>
        <div className="inputs-wrapper">
          <InputField
            placeholder="Please enter a starting country"
            label="Starting Country"
            type="text"
            name="starting_country"
            onChange={handleChange}
            required
          />
          <InputField
            placeholder="Please enter a destination country"
            label="Destination Country"
            type="text"
            name="destination_country"
            onChange={handleChange}
            required
          />
          <InputField
            placeholder="Please enter a quote price"
            label="Quote Price"
            type="number"
            name="quote_price"
            onChange={handleChange}
            pattern="^(?!(0))[0-9]+$"
            required
          />
          <SelectField
            selectedValue={updatedFreightPath}
            onChange={handleSelectedFreightPath}
            options={[
              { name: "Air", value: "Air" },
              { name: "Ocean", value: "Ocean" },
            ]}
          />
        </div>
        <Button text="Create quote" />
      </form>
      <div className="shipment-card-wrapper">
        {
          <ShipmentResult
            showQuote={showQuote}
            flight_type={updatedFreightPath}
            persistedValues={updatedValues}
            isSubmitted={isSubmitted}
          />
        }
      </div>
    </div>
  );
}

export default BookShipmentPage;
