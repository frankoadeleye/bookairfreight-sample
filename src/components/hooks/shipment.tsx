import { useState, useRef } from "react";

function useShipment() {
  const startingCountryRef = useRef(null);
  const destinationCountryRef = useRef(null);
  const quotePriceRef = useRef(null);
  const selectedFreightPath = useRef(null);

  const [showQuote, setShowQuote] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const [freightPath, setFreightPath] = useState(null);
  const [values, setValues] = useState({
    starting_country: "",
    destination_country: "",
    quote_price: 0,
  });

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValues({
      starting_country: startingCountryRef.current.value,
      destination_country: destinationCountryRef.current.value,
      quote_price: quotePriceRef.current.value,
    });
    setFreightPath(selectedFreightPath.current.value);
    setShowQuote(true);
    setSubmitted(true);
  };

  return {
    showQuote,
    isSubmitted,
    freightPath,
    values,
    startingCountryRef,
    destinationCountryRef,
    quotePriceRef,
    selectedFreightPath,
    handleSubmit,
  };
}

export default useShipment;
