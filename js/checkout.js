document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    // 送信直前にカートをクリア
    localStorage.removeItem("cart");
  });
});
