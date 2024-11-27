<script setup>
</script>
<template>
  <div class="team">
    <!-- Charlotte -->
    <div class="member">
      <div class="member-info">
        <h3>Charlotte Lund</h3>
        <p class="role">CEO & Founder af Camelina.</p>
        <p class="description">
          Jeg er med ude i marken, og står for at gøre olien klar til slag. Det sammen med frøene.
        </p>
        <p class="contact">Tlf. 51502404<br> danskcamelina@gmail.com</p>
      </div>
      <img src="@/assets/img/charlotte.png" alt="Charlotte Lund" class="profile-pic" />
    </div>

    <!-- Martin -->
    <div class="member">
      <div class="member-info">
        <h3>Martin Nielsen</h3>
        <p class="role">Co-founder</p>
        <p class="description">
          Martin hjælper til med at gøre olien og frøene klar. Men maler også en del ved siden af.
        </p>
      </div>
      <img src="@/assets/img/martin.png" alt="Martin Nielsen" class="profile-pic" />
    </div>

    <!-- Christian -->
    <div class="member">
      <div class="member-info">
        <h3>Christian</h3>
        <p class="role">Lokal Landmand</p>
        <p class="description">
          Christian er en af vores lokale landmænd, som kender til en hver mark. Derudover er han en dygtig økologisk
          landmand. Alt dette gør ham til en rigtig god samarbejdspartner.
        </p>
      </div>
      <img src="@/assets/img/christian.png" alt="Christian" class="profile-pic" />
    </div>

    <!-- Info Section -->
    <div class="info-section">
  <div class="info-content">
    <p>
      Udover produkter med Camelina Satvia, bliver der også lavet sæbe- og akvarel kunst.
    </p>
    <p>
      Hvis du har lyst, har vi en lille gårdbutik på adressen:
      <strong>Tjørntvedvej 16, 4295 Stenlille</strong>
    </p>
    <p>
      Her holder vi til daglig og udstiller vores kunst.
    </p>
    <p>
      Hvis nysgerrigheden rammer, inden du har mulighed for at besøge os,
      kan du tage et kig på vores anden hjemmeside:
      <a href="#" target="_blank">Lund & Nielsen</a>
    </p>
  </div>
  <img src="@/assets/img/Lund.png" alt="Lund & Nielsen" class="info-image" />
</div>


    <!-- Camelina Card -->
    <div class="camelina-card">
      <img src="@/assets/img/camelina.jpg" alt="Camelina Sativa" class="camelina-img" />
      <div class="camelina-info">
        <h3>Om Camelina Sativa</h3>
        <p class="description">
          Er den plante vi arbejder med, for at kunne få produktet Camelina frø,
          ud af frøene laver vi både olie og sæbe.
        </p>
        <button class="learn-more">Læs mere</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Team container */
.team {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap; /* Enables wrapping on smaller screens */
  gap: 20px; /* Spacing between cards */
  justify-content: center; /* Centers cards in desktop view */
}

/* Member card */
.member {
  display: flex;
  flex-direction: row; /* Profile picture on the left */
  align-items: center; /* Align text and image vertically */
  background-color: #96BDC6; /* Blue background */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  width: 100%; /* Full width for mobile */
  max-width: 400px; /* Limit width on desktop */
}

/* Profile picture */
.profile-pic {
  width: 120px; /* Increase the size of the profile picture */
  height: 120px; /* Increase the size of the profile picture */
  border-radius: 50%;
  margin-right: 20px;
}

/* Member info styling */
.member-info {
  flex: 1; /* Take up the remaining space */
  text-align: left;
}

h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #060606;
  margin-bottom: 5px;
  text-align: left;
}

.role {
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}

.contact {
  font-size: 13px;
  margin-top: 10px;
  color: #444;
}

.info-section {
  display: flex;
  flex-wrap: wrap; /* Ensures responsiveness */
  align-items: center;
  background-color: #fefbe9; /* Light background color */
  padding: 20px;
  line-height: 1.6;
  font-size: 1em;
  color: #333;
  gap: 20px; /* Add spacing between text and image */
}

.info-content {
  flex: 1; /* Ensures the content takes up remaining space */
}

.info-image {
  flex: 1; /* The image will take up equal space */
  max-width: 300px;
  width: 100%;
  height: auto;
}

/* Camelina Card */
.camelina-card {
  display: flex;
  align-items: center;
  background-color: #cfe7ea; /* Light blue background */
  padding: 20px;
  margin-top: 20px;
  width: 100%; /* Full width */
  justify-content: center;
}

.camelina-img {
  width: 100px;
  height: auto;
  border-radius: 50%;
  margin-right: 20px;
}

.camelina-info {
  text-align: left;
}

.learn-more {
  background-color: #FCDB7E; /* Button background */
  border: none;
  padding: 10px 15px;
  color: #323031;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}

/* Responsive Styling */
@media screen and (min-width: 768px) {
  .team {
    margin-bottom: 80px; /* Adds space between the team section and the next section on desktop */
  }
  .member {
    flex: 0 1 calc(50% - 20px); /* Two cards per row on desktop */
  }
  .info-section {
    margin: 40px 0; /* Add more space above and below on desktop */
    margin-top: 80px; /* Adds space above the Camelina card on desktop */
  }
  .camelina-card {
    width: 80%; /* Reduced width on desktop */
  }
  .camelina-info {
    text-align: left; /* Align text to the left on larger screens */
    align-items: flex-start; /* Align items to the left */
    flex-direction: row;
  }
}
@media (max-width: 768px) {
  .info-section {
    flex-direction: column; /* Stack elements vertically on small screens */
    text-align: center; /* Center-align the text for mobile */
  }

  .info-image {
    margin-top: 20px; /* Add spacing on mobile */
  }
}
</style>


