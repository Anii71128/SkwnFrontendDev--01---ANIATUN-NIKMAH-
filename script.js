$(document).ready(function () {
  // === Loader sebelum ambil data ===
  $(".product-slider").html('<p class="loading">Loading products...</p>');

  // === Gambar dari link kamu ===
  const imageLinks = [
    "https://i.ibb.co.com/RkgtcTjV/sofa2.png",
    "https://i.ibb.co.com/ccTXR3bD/chair.png",
    "https://i.ibb.co.com/DDW23cLH/sofa1.png",
    "https://i.ibb.co.com/zhrYcRrY/table.png",
    "https://i.ibb.co.com/S4nfzhCJ/room2.png",
  ];

  $("#searchCatalog").on("click", function () {
    window.location.href = "search.html";
  });

  $(".product-slider").empty();

  const productNames = [
    "Luxury Green Sofa",
    "Minimalist Chair",
    "Classic Orange Sofa",
    "Modern Wood Table",
    "Vintage Lamp"
    
  ];

  imageLinks.forEach((imageUrl, index) => {
    const name = productNames[index] || `Product ${index + 1}`;

    $(".product-slider").append(`
    <div class="product-card">
      <img src="${imageUrl}" alt="${name}">
      <div class="price-tag">$${(Math.random() * 500 + 100).toFixed(2)}</div>
      <p class="product-name">${name}</p>
    </div>
  `);
  });

  // === Smooth Scroll ===
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = $($(this).attr("href"));
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        800
      );
    }
  });

  // === Dropdown toggle ===
  $(".dropbtn").click(function (e) {
    e.stopPropagation();
    $(".dropdown-content").not($(this).next()).slideUp();
    $(this).next(".dropdown-content").slideToggle();
  });

  $(document).click(function () {
    $(".dropdown-content").slideUp();
  });

  // === Klik produk ===
  $(document).on("click", ".product-card", function () {
    const name = $(this).find(".product-name").text();
    const price = $(this).find(".price-tag").text();
    alert(`🪑 Product: ${name}\n💰 Price: ${price}`);
  });
});

// === Animasi scroll ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
document
  .querySelectorAll(".scroll-animate")
  .forEach((el) => observer.observe(el));

// === Kategori aktif ===
const items = document.querySelectorAll(".category-item");
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// === Slider Navigasi ===
document.querySelector(".next")?.addEventListener("click", () => {
  document
    .querySelector(".product-slider")
    .scrollBy({ left: 300, behavior: "smooth" });
});
document.querySelector(".prev")?.addEventListener("click", () => {
  document
    .querySelector(".product-slider")
    .scrollBy({ left: -300, behavior: "smooth" });
});

// === Hamburger Menu ===
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navButtons = document.getElementById("nav-buttons");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  navButtons.classList.toggle("active");
});
