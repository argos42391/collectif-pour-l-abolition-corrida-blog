// Afficher un message de confirmation lorsque l'utilisateur s'abonne à la newsletter
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Empêche l'envoi classique du formulaire
  document.getElementById('confirmationMessage').style.display = 'block';  // Affiche le message de confirmation
  setTimeout(function() {
    document.getElementById('confirmationMessage').style.display = 'none'; // Masque le message après 3 secondes
  }, 3000);
});

// Animation pour les cartes de blog au survol
const blogCards = document.querySelectorAll('.blog-card');
blogCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
  });
  card.addEventListener('mouseleave', function() {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });
});

// Animation de survol pour les titres des articles
const blogTitles = document.querySelectorAll('.blog-card h3');
blogTitles.forEach(title => {
  title.addEventListener('mouseenter', function() {
    title.style.color = '#f8a354';
  });
  title.addEventListener('mouseleave', function() {
    title.style.color = '#4b9e9c';
  });
});

// Animation de survol pour le bouton "Lire plus"
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    button.style.color = '#4b9e9c';
    button.style.textDecoration = 'underline';
  });
  button.addEventListener('mouseleave', function() {
    button.style.color = '#f8a354';
    button.style.textDecoration = 'none';
  });
});

// Animation des éléments à l'apparition (scroll)
const elementsToAnimate = document.querySelectorAll('.blog-card, .newsletter');
const animateOnScroll = () => {
  elementsToAnimate.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementPosition < windowHeight * 0.8) {
      element.classList.add('fade-in');
    }
  });
};
window.addEventListener('scroll', animateOnScroll);
animateOnScroll();  // Vérifier si des éléments sont déjà dans le viewport au chargement

// Style d'animation (fade-in) dans le CSS pour les éléments qui apparaissent au scroll
