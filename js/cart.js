const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]");
const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

const renderCart = () => {};

if (document.getElementById("cart-items")) {
  renderCart();
}
