<script setup>
</script>

<template>
  <div class="title-text">
    <h1>Om os bag ved Camelina</h1>
    <p>
      Hos Dansk Camelina er vi som udgangspunkt Martin og Charlotte.<br>
      Vi finder samarbejdspartnere til det vi ikke selv kan eller har tid til, 
      derfor arbejder vi sammen med dygtige landmænd.
    </p>
  </div>
</template>

<style scoped>
.title-text {
  text-align: left;
  padding: 20px;
  margin: 0 20px; /* Add the same margin as team boxes */
}

h1 {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px 0;
}

p {
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
}

@media (min-width: 768px) {
  .title-text {
    text-align: left;
    padding: 20px;
    margin: 0 100px; /* Adjust for larger screens if needed */
  }

  h1 {
    font-size: 28px; 
  }

  p {
    font-size: 16px;
  }
}
</style>
