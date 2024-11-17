<script setup>
</script>

<template>
  <div class="team">
    <!-- Charlotte -->
    <div class="member">
      <img src="@/assets/img/charlotte.png" alt="Charlotte Lund" class="profile-pic" />
      <div class="member-info">
        <h3>Charlotte Lund</h3>
        <p class="role">CEO & Founder af Camelina.</p>
        <p class="description">Jeg er med ude i marken, og står for at gøre olien klar til slag. Det sammen med frøene.</p>
        <p class="contact">Tlf. 51502404<br> danskcamelina@gmail.com</p>
      </div>
    </div>

    <!-- Martin -->
    <div class="member">
      <img src="@/assets/img/martin.png" alt="Martin Nielsen" class="profile-pic" />
      <div class="member-info">
        <h3>Martin Nielsen</h3>
        <p class="role">Co-founder</p>
        <p class="description">Martin hjælper til med at gøre olien og frøene klar. Men maler også en del ved siden af.</p>
      </div>
    </div>

    <!-- Christian -->
    <div class="member">
      <img src="@/assets/img/christian.png" alt="Christian" class="profile-pic" />
      <div class="member-info">
        <h3>Christian</h3>
        <p class="role">Lokal Landmand</p>
        <p class="description">Christian er en af vores lokale landmænd, som kender til en hver mark. Derudover er han en dygtig økologisk landmand. Alt dette gør ham til en rigtig god samarbejdspartner.</p>
      </div>
    </div>

    <div class="info-section">
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


    <!-- Om Camelina Sativa -->
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
.team {
  width: 100%;
  padding: 20px;
}

.member {
  display: flex;
  align-items: flex-start; 
  background-color: #96BDC6;
  padding: 20px;
  margin-bottom: 20px;
}

.profile-pic {
  margin-top: 60px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
}

.member-info {
  display: flex;
  flex-direction: column;
  text-align: left; 
}

h3 {
  margin: 0;
  font-weight: bold;
  color: #060606;
  text-align: left; 
  margin-bottom: 5px; 
  justify-content: left;
}

.info-section {
  background-color: #fefbe9; /* Lys baggrundsfarve */
  padding: 20px;
  border-radius: 8px;
  line-height: 1.6;
  font-size: 1em;
  color: #333;
  margin: 20px 0;
}

.camelina-card {
  display: flex;
  align-items: center;
  background-color: #cfe7ea;
  padding: 20px;
  margin-top: 20px;
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
  background-color: #FCDB7E;
  border: none;
  padding: 10px 15px;
  color:#323031;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
}
</style>
