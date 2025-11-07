const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// ===== Efek Bintang Bergerak =====
const starsContainer = document.getElementById("stars");
const numStars = 40; // jumlah bintang (boleh diubah, misal 80 biar ramai)

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // ukuran acak
  const size = Math.random() * 3 + 1 + "px";
  star.style.width = size;
  star.style.height = size;

  // posisi acak
  star.style.top = Math.random() * 100 + "%";
  star.style.left = Math.random() * 100 + "%";

  // durasi dan delay acak
  const duration = Math.random() * 10 + 10 + "s";
  const delay = Math.random() * 10 + "s";
  star.style.animationDuration = duration;
  star.style.animationDelay = delay;

  starsContainer.appendChild(star);
}