function ShopButton() {
  const handleClick = () => {
    window.open("https://shop.maduropreso.com", "_blank");
  };

  return (
    <img
      src="/shop-button.png"
      alt="Shop"
      className="shop-button"
      onClick={handleClick}
    />
  );
}

export default ShopButton;
