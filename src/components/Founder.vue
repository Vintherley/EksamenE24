<script setup>

</script>
<template>
    <div class="team">
      <div class="member">
        <img src="@/assets/img/charlotte.png" alt="Charlotte Lund" class="profile-pic" />
        <h3>Charlotte Lund</h3>
        <p>CEO & Founder af Camelina.</p>
        <p>Jeg er med ude i marken, og står for at gør olien klar til slag. Det sammen med frøene.</p>
        <p>📞 51502404</p>
        <p>📧 danskcamelina@gmail.com</p>
      </div>
  
      <div class="member">
        <img src="@/assets/img/martin.png" alt="Martin Nielsen" class="profile-pic" />
        <h3>Martin Nielsen</h3>
        <p>Co-founder.</p>
        <p>Martin hjælper til med at gøre olien og frøene klar. Men maler også en del ved siden af.</p>
      </div>
  
      <div class="member">
        <img src="@/assets/img/christian.png" alt="Christian" class="profile-pic" />
        <h3>Christian</h3>
        <p>Christian er en af vores lokale landmænd, som kender til en hver mark. Derudover er han en dygtig økologisk landmand. Alt dette gør ham til en rigtig god samarbejdspartner.</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .team {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #e6f0f2;
  }
  
  .member {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #d8efff;
    padding: 20px;
    border-radius: 10px;
  }
  
  .profile-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  </style>
  