<script setup>
</script>

<template>
  <footer class="first-footer">
    <div class="content">
      <div class="social-container">
        <p>Følg os her</p>
        <div class="social-icons">
          <img src="@/assets/img/facebook.png" alt="Facebook" />
          <img src="@/assets/img/instagram.png" alt="Instagram" />
        </div>
      </div>
      <div class="decoration">
        <img src="@/assets/img/illustrationfroe.png" alt="Fro" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.first-footer {
  background-color: #a2c8d0;
  padding: 20px;
  display: flex;
  justify-content: center; /* Centers the content horizontally */
  height: 60px;
}

.content {
  display: flex;
  justify-content: space-between; /* Separates social-container and decoration */
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Ensures content doesn't stretch too wide */
}

.social-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.social-container p {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 18px;
  color: #000;
  margin: 0;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons img {
  width: 35px;
  height: 35px;
  cursor: pointer;
}

.decoration img {
  width: 120px; /* Adjust the size of the decorative image */
}

</style>
