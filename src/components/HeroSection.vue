<script setup>

</script>

<template>
<div class="hero-content"> 
    <img src="@/assets/img/product1.jpg" alt="Camelina olie og frø" class="hero-img" />
    <div class="box-btn">
    <RouterLink to="/Webshop" class="hero-btn">Shop</RouterLink>
</div>
</div>
</template>

<style>
/* Mobil (op til 767px) */
@media (max-width: 767px) {
  /* Tilføj mobil-styling her */

.hero-content {
    display: flex;              /* Brug flexbox til centrering */
    justify-content: center;     /* Centrer vandret */
    align-items: center;         /* Centrer lodret */
    height: 206px;
    width: 283px;
    background-color: #194011;
    border-radius: 6px;
    justify-self: center;
}

.hero-img {
    max-width: 100%;            /* Gør billedet responsivt */
    max-height: 100%;           /* Sørg for, at det holder sig inden for containeren */
}
.hero-btn {
    position: absolute;
    align-self: end;
    margin-top: 60px;
    right: 55px;
    background-color: #FCDB7E;
    color: #323031;
    width: 59px;
    height: 23px;
    text-decoration: none;
    padding: 5px;
    border-radius: 6px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
}
/* Tablet (768px til 1024px) */
@media (min-width: 768px){
    .hero-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Sørger for at billedet og knappen er i kolonne-layout */
  height: 550px;
  width: 50%;
  padding: 10px 5px;
  margin: 0 auto 40px auto; /* Centrer containeren */
  background-color: #194011;
  border-radius: 6px;
  position: relative; /* For at placere knappen korrekt */
}

.hero-img {
  max-width: 100%; /* Sikrer, at billedet er responsivt */
  max-height: 100%; /* Holder billedet inden for containerens højde */
  border-radius: 6px; /* Blødgør kanterne på billedet */
}

.hero-btn {
  position: absolute; /* Sørger for knappen placeres korrekt */
  bottom: 20px; /* Placer knappen i bunden */
  right: 50px;
  background-color: #FCDB7E;
  color: #323031;
  width: 80px;
  height: 30px;
  text-decoration: none;
  padding: 5px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
}
}

</style>