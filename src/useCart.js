import { ref, computed } from 'vue';

// Global state til kurven
const cart = ref([]);

// Beregn antal varer i kurven
const cartItemCount = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0);
});

// Funktion til at tilføje varer
const addToCart = (product) => {
  const existingItem = cart.value.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += product.quantity;
  } else {
    cart.value.push({ ...product, quantity: product.quantity });
  }
};

// Fjern varer fra kurven
const removeFromCart = (productId) => {
  cart.value = cart.value.filter((item) => item.id !== productId);
};

// Tøm kurven
const clearCart = () => {
  cart.value = [];
};

// Eksportér funktioner
export default function useCart() {
  return {
    cart,
    cartItemCount,
    addToCart,
    removeFromCart,
    clearCart,
  };
}
