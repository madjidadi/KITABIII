// Configuration des univers / catégories pour l'accueil
const categoriesConfiguration = [
  { nom: "Roman", icon: "📚", couleur: "#8b1a2b", bg: "#8b1a2b10", desc: "Histoires inoubliables" },
  { nom: "Histoire", icon: "🏛️", couleur: "#b8912a", bg: "#b8912a10", desc: "Mémoire de notre peuple" },
  { nom: "Science", icon: "🔬", couleur: "#2e6b3e", bg: "#2e6b3e10", desc: "Explorer l'univers" },
  { nom: "Philosophie", icon: "💡", couleur: "#4a3a8b", bg: "#4a3a8b10", desc: "Penser, questionner" },
  { nom: "Jeunesse", icon: "🌟", couleur: "#c75b1a", bg: "#c75b1a10", desc: "L'éveil des jeunes" },
  { nom: "Poésie", icon: "🌸", couleur: "#a0295f", bg: "#a0295f10", desc: "Les mots qui touchent" },
  { nom: "Biographie", icon: "👤", couleur: "#1a73e8", bg: "#1a73e810", desc: "Des vies inspirantes" }
];

function initAccueil() {
  // 1. Affichage des Tendances / À la une (les 4 premiers livres)
  const grilleUne = document.getElementById('grid-une');
  if (grilleUne) {
    grilleUne.innerHTML = '';
    // Sélectionne les 4 premiers livres de la base de données
    const selection = livres.slice(0, 4);
    selection.forEach((livre, index) => {
      grilleUne.innerHTML += buildCard(livre, index);
    });
  }

  // 2. Affichage des catégories avec préfixe dynamique pour les liens
  const grilleCategories = document.getElementById('grid-cats');
  if (grilleCategories) {
    grilleCategories.innerHTML = '';
    
    const estSurAccueil = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/");
    const prefixeCatalogue = estSurAccueil ? "content/" : "";

    categoriesConfiguration.forEach(cat => {
      const nombreLivres = livres.filter(l => l.categorie === cat.nom).length;
      const plural = nombreLivres > 1 ? 's' : '';

      grilleCategories.innerHTML += `
        <a href="${prefixeCatalogue}catalogue.html?cat=${cat.nom}" class="cat-card">
          <div class="cat-bar" style="background:${cat.couleur}"></div>
          <div class="cat-icon">${cat.icon}</div>
          <div class="cat-name">${cat.nom}</div>
          <div class="cat-desc">${cat.desc}</div>
          <div class="cat-count" style="background:${cat.bg}; color:${cat.couleur}; border:1px solid ${cat.couleur}30">
            ${nombreLivres} livre${plural}
          </div>
        </a>`;
    });
  }
}

// Lancement au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  initAccueil();
});
