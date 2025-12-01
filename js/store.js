/** 商品処理 */
if (!localStorage.getItem("products")) {
  const initialProducts = [
    { id: 1, name: "オリジナルブレンド", price: 1200, stock: 5 },
    { id: 2, name: "ライトロースト", price: 1150, stock: 5 },
    { id: 3, name: "ダークロースト", price: 1250, stock: 5 },
  ];

  localStorage.setItem("products", JSON.stringify(initialProducts));
}

const productList = document.getElementById("product-list");

const loadProducts = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  productList.innerHTML = "";

  products.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
<h3>${product.name}</h3>
<p>価格: ${product.price}円</p>
<p>在庫: ${product.stock}</p>
<button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">カートへ追加</button>
<hr>
`;
    productList.appendChild(div);
  });
};

loadProducts();

const getProducts = () => JSON.parse(localStorage.getItem("products"));

/** カート処理 */
const getCart = () => JSON.parse(localStorage.getItem("cart") || "[]");
const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addToCart = (id, name, price) => {};
