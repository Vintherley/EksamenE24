<script setup>
</script>

<template>
  <div class="green-market-container">
    <div class="market-locations">
      <h3>Grønt Marked</h3>
      <p>Udover vores lokation i Stenlille, er vi også til stede på forskellige markeder</p>
      <div class="location">
        <p><strong>Den første søndag i måneden</strong><br>Indre by - Gammelholm, havnegade 54</p>
      </div>
      <div class="location">
        <p><strong>Den anden søndag i måneden</strong><br>Vesterbro - Ved Litauens plads</p>
      </div>
      <div class="location">
        <p><strong>Den tredje søndag i måneden</strong><br>Nørrebro - På Skjolds Plads</p>
      </div>
      <div class="location">
        <p><strong>Den fjerde søndag i måneden</strong><br>Frederiksberg - I Aksel Møllers Have</p>
      </div>
    </div>
    
    <!-- Green Market Image -->
    <div class="market-image">
      <img src="@/assets/img/groentmarkedbillede.jpg" alt="Grønt Marked" />
    </div>
  </div>
</template>

<style scoped>
.green-market-container {
  display: flex;
  flex-direction: column; /* Stack elements vertically on mobile */
  gap: 20px; /* Space between market locations and image */
}

.market-locations {
  background-color: #2e4925; /* Green background for the text box */
  color: #ffffff;
  padding: 20px;
  width: 100%;
  max-width: 600px; /* Equal width for both */
  margin: 20px;
  box-sizing: border-box; /* Ensure padding is included in width */
  height: 400px; /* Set fixed height for desktop */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center content */
}

.market-locations h3 {
  padding-top: 20px;
  text-align: left; /* Align h3 text to the left */
}

.market-image {
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.market-image img {
  width: 100%; /* Make the image fill the container */
  height: 100%; /* Make the image fill the container's height */
  object-fit: cover; /* Ensure the image maintains aspect ratio and fills the area */
}

@media (min-width: 768px) {
  .green-market-container {
    flex-direction: row; /* Place content side by side on desktop */
    align-items: stretch; /* Stretch both items to equal height */
    justify-content: flex-start;
  }

  .market-locations {
    max-width: 50%; /* Equal width for both items */
    margin-left: 100px; /* Add left margin on desktop */
    height: 400px; /* Fix height for desktop */
    justify-content: center; /* Vertically center content */
    margin-top: 120px;
  }

  .market-image {
    max-width: 50%; /* Equal width for both items */
    margin: 0 auto;
  }
  

  .market-image img {
    object-fit: cover; /* Cover the container with the image */
  }
}
</style>
