<script setup>

</script>

<template>
<div class="hero-content"> 
    <img src="@/assets/img/product1.png" alt="Camelina olie og frø" class="hero-img" />
    <div class="box-btn">
    <RouterLink to="/Webshop" class="hero-btn">Shop</RouterLink>
</div>
</div>
</template>

<style>
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
</style>