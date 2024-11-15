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
  </div>

</template>

<style scoped>
.team {
  width: 100%;
  background-color: #e6f0f2;
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
  margin-top: 40px;
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

.role {
  font-weight: bold;
  color: #333;
  margin: 5px 0;
}

.description {
  margin: 5px 0;
  color: #666;
}

.contact {
  margin-top: 10px;
  color: #333;
  font-size: 0.9em;
}
</style>

