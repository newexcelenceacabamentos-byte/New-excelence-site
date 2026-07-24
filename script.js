// New Excelence Acabamentos

console.log("Site carregado com sucesso!");

// Rolagem suave dos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
