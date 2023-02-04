function addDays(date: string, days: number) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
  });
}

interface GetDeliveryDateRangeProps {
  freight_path: string;
  isSubmitted: boolean;
}

function GetDeliveryDateRange({
  freight_path,
  isSubmitted,
}: GetDeliveryDateRangeProps) {
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const todayDate = new Date().toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
  });

  if (isSubmitted) {
    if (freight_path === "Air") {
      const startRangeForAir = getRandomNumber(7, 3);

      const getEndRangeForAir = () => {
        let anotherRandomRange = getRandomNumber(4, 2);
        return anotherRandomRange + startRangeForAir;
      };

      const endRangeForAir = getEndRangeForAir();

      return (
        <>
          <div>{startRangeForAir + "-" + endRangeForAir + " days"}</div>
          <div>Estimated Delivery</div>
          <div>
            {addDays(todayDate, startRangeForAir)} -{" "}
            {addDays(todayDate, endRangeForAir)}
          </div>
        </>
      );
    }
    if (freight_path === "Ocean") {
      const startRangeForOcean = getRandomNumber(25, 30);

      const getEndRangeForOcean = () => {
        let anotherRandomRange = getRandomNumber(5, 10);
        return anotherRandomRange + startRangeForOcean;
      };

      const endRangeForOcean = getEndRangeForOcean();

      return (
        <>
          <div>{startRangeForOcean + "-" + endRangeForOcean + " days"}</div>
          <div>Estimated Delivery</div>
          <div>
            {addDays(todayDate, startRangeForOcean)}-{" "}
            {addDays(todayDate, endRangeForOcean)}
          </div>
        </>
      );
    }
  }

  return <></>;
}

export default GetDeliveryDateRange;
