<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  if (window.innerWidth > 768) {
    isMenuOpen.value = false; // Automatisk lukning på bred skærm
  } else {
    isMenuOpen.value = !isMenuOpen.value;
  }
};

// Funktion til at lukke menu, når man klikker udenfor
const handleOutsideClick = (e) => {
  const menu = document.querySelector('.menu');
  if (menu && !menu.contains(e.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
});

// Hent global state for indkøbskurven
const cartItems = inject('totalItems'); // Brug det navn, der matches med din App.vue
</script>

<template>
<nav class="menu">
  <RouterLink to="/">
    <img src="@/assets/img/logo.png" alt="Logo" class="logo" />
  </RouterLink>
  
    
    <button class="burger-menu" @click="toggleMenu">☰</button>
    <div :class="{ 'nav-links': true, 'active': isMenuOpen }">
      <RouterLink to="/" class="nav-link">Forside</RouterLink>
      <RouterLink to="/aboutos" class="nav-link">Om os</RouterLink>
      <RouterLink to="/webshop" class="nav-link">Shop</RouterLink>
    </div>
    <div class="basket-links">
    <RouterLink to="/Basket" class="basket-container">
      <img src="@/assets/img/basketimg.png" alt="basket" class="basket" />
      <span v-if="cartItems && cartItems > 0" class="badge">{{ cartItems }}</span>
    </RouterLink>
  </div>
</nav>
</template>


<style>
@media (max-width: 767px) {
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #194011;
  padding: 10px 20px;
  color: #edead0;
}

.logo {
  width: 70px;
  height: auto;
}

.basket-links {
  display: flex;
  align-items: center;
  gap: 10px; /* Afstand mellem ikonerne */
}

.basket-container {
  position: relative;
}

.basket {
  width: 24px;
  height: 24px;
}

.burger-menu {
  font-size: 24px;
  background-color: transparent;
  border: none;
  color: #FFFEF2;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.3s ease;
}

.burger-menu:hover {
  transform: scale(1.1); /* Gør knappen lidt større ved hover */
}

.badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
}

/* Styling for menuen (lukket tilstand) */
.nav-links {
  display: none; /* Skjul menuen som standard */
  flex-direction: column; /* Sørg for, at links stables vertikalt */
  gap: 10px; /* Afstand mellem links */
  background-color: #194011; /* Baggrundsfarve */
  padding: 10px; /* Polstring omkring links */
  border-radius: 5px;
  right: -10px;
  position: absolute; /* Sikrer, at dropdown ikke flytter ikoner */
  top: 100px; /* Placering under burger-menu */
  z-index: 100;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Styling for menuen (aktiv/åben tilstand) */
.nav-links.active {
  display: flex; /* Gør menuen synlig */
  animation: fadeIn 0.3s ease-out; /* Tilføjer en fade-effekt */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Styling for links */
.nav-links a {
  color: #FFFEF2; /* Tekstfarve */
  text-decoration: none; /* Fjern understregning */
  padding: 8px 12px; /* Polstring for klikbart område */
  border-radius: 4px; /* Bløde hjørner */
  transition: background-color 0.3s ease; /* Smooth hover-effekt */
}
}
@media (min-width: 768px){
  .menu {
  display: flex;
  justify-content: space-between; /* Logo til venstre og links centreres */
  align-items: center;
  background-color: #194011; /* Baggrundsfarve */
  padding: 15px 30px; /* Giver luft omkring elementerne */
  color: #edead0; /* Tekstfarve */
  font-family: "Nunito", sans-serif; /* Typografi */
  
}

.menu .logo {
  font-size: 24px; /* Logo-størrelse */
  font-weight: bold; /* Fremhævet logo */
  color: #fcdb7e; /* Kontrastfarve for logo */
  text-decoration: none; /* Fjern underlinje */
}

.menu .nav-links {
  display: flex;
  justify-content: center; /* Centrér links */
  list-style: none; /* Fjern punkttegn */
  margin: 0 auto; /* Sørger for, at links holder sig i midten */
  padding: 0;
}

.menu .nav-link {
  text-decoration: none;
  color: #edead0; 
  padding: 10px 20px; /* Gør links større og klikbare */
  margin: 0 10px; /* Tilføj lidt luft mellem links */
}

.menu .nav-link:hover {
  color: #194011; /* Skift tekstfarve ved hover */
  background-color: #fcdb7e; /* Baggrundsfarve ved hover */
  border-radius: 6px; /* Bløde hjørner */
}
.badge {
  position: absolute;
  top: 30px;
  right: 15px;
  background-color: #4caf50;
  color: white;
  border-radius: 50%;
  padding: 4px 6px;
  font-size: 12px;
  font-weight: bold;
}

.burger-menu {
  display: none; /* Skjul burger-menu på desktop */
}


}

</style>
