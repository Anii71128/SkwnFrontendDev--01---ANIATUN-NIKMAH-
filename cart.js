// === Inisialisasi Cart di localStorage ===
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// === Tambah produk ke keranjang ===
function addToCart(product) {
  const cart = getCart();

  // Cek apakah produk sudah ada → tambah qty
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
  alert("Product added to cart!");
}

// === Buka halaman Cart ===
document.getElementById("openCart").addEventListener("click", () => {
  window.location.href = "cart.html";
});
