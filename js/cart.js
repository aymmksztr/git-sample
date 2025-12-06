const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]");
const saveCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));
const cartList = document.getElementById("cart-items");

const renderCart = () => {
  const currentCart = getCart();
  cartList.innerHTML = "";
  if (currentCart.length > 0) {
    currentCart.forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `
      <h3>${item.name}</h3>
      <p>価格: ${item.price}</p>
      <p>数量: ${item.quantity}</p>`
      cartList.appendChild(div);
    })
  } else {
    cartList.innerHTML = "<p>カートに追加された商品はありません</p>"
  }
};
if (cartList) {
  renderCart();
}
