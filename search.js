$(document).ready(function () {
  // === Data produk (SAMA seperti di homepage) ===
  const products = [
    {
      name: "Luxury Green Sofa",
      image: "https://i.ibb.co.com/RkgtcTjV/sofa2.png",
    },
    {
      name: "Minimalist Chair",
      image: "https://i.ibb.co.com/ccTXR3bD/chair.png",
    },
    {
      name: "Classic Orange Sofa",
      image: "https://i.ibb.co.com/DDW23cLH/sofa1.png",
    },
    {
      name: "Modern Wood Table",
      image: "https://i.ibb.co.com/zhrYcRrY/table.png",
    },
    {
      name: "Vintage Lamp",
      image: "https://i.ibb.co.com/S4nfzhCJ/room2.png",
    },
  ];

  // === Saat tombol search ditekan ===
  $("#btnFind").on("click", function () {
    const q = $("#productInput").val().toLowerCase();

    const results = products.filter((p) =>
      p.name.toLowerCase().includes(q)
    );

    renderResults(results);
  });

  // === Enter juga bisa memulai search ===
  $("#productInput").on("keypress", function (e) {
    if (e.key === "Enter") $("#btnFind").click();
  });

  // === Tampilkan hasil ===
  function renderResults(items) {
    $("#searchResult").empty();

    if (items.length === 0) {
      $("#searchResult").html("<p>No matching products found.</p>");
      return;
    }

    items.forEach((item) => {
      $("#searchResult").append(`
        <div class="product-card">
          <img src="${item.image}" style="width:100%; border-radius:12px">
          <p class="product-name" style="margin-top:8px; font-weight:600;">
            ${item.name}
          </p>
        </div>
      `);
    });
  }
});
