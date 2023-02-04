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
  const [selected, setSelected] = useState("Air");
  const [fixed_selected, setFixedSelected] = useState("Air");
  const [isSubmitted, setSubmitted] = useState(false);

  const [values, setValues] = useState({
    starting_country: "",
    destination_country: "",
    quote_price: 0,
  });

  const [persistedValues, setPersistedValues] = useState({
    starting_country: "",
    destination_country: "",
    quote_price: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFixedSelected(selected);
    const { name, value } = event.target;
    setValues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSelectedOption = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelected(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPersistedValues({
      starting_country: values.starting_country,
      destination_country: values.destination_country,
      quote_price: values.quote_price,
    });
    setFixedSelected(selected);
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
            selectedValue={selected}
            onChange={handleSelectedOption}
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
            flight_type={fixed_selected}
            persistedValues={persistedValues}
            isSubmitted={isSubmitted}
          />
        }
      </div>
    </div>
  );
}

export default BookShipmentPage;
