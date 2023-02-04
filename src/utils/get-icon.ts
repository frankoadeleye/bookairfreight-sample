function GetIcon(shipping_channel: string) {
  if (shipping_channel === "Ocean") {
    return "fa-sharp fa-solid fa-ship";
  }
  if (shipping_channel === "Air") {
    return "fa-solid fa-plane";
  }
  return "no-icon";
}

export default GetIcon;
