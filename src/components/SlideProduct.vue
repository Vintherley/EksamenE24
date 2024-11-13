<script setup>

</script>

<template>
    <h2>Vores proukter</h2>
<div class="main-box">
    
    <div class="texts-box">
        <p>Økologisk Dansk Camelina olie <br>250ml</p>
        <ul>
            <li>Lang holdbarhed</li>
            <li>Lokal dyrket</li>
            <li>Lokal produceret</li>
            <li>Omega 3 fedtsyrer</li>
        </ul>
        <p>Anvendelse</p>
        <ul>
            <li>Salat</li>
            <li>Stegning</li>
            <li>Erstatter olivenolie</li>
        </ul>
        <p>Pris 105,00kr.</p>
    </div>
    <img src="@/assets/img/product2.png" alt="Camelina olie og frø" class="product-img" />
    <RouterLink to="/Webshop" class="product-btn">Køb her</RouterLink>
</div>
</template>

<style>
h2{
    display: flex;
    justify-content: center;
}
.main-box{
    display: flex;
    justify-content: space-around;
}
.texts-box{
    background-color: #96BDC6;
    width: 200px;
    height: 223px;
    border-radius: 6px;
    padding: 5px;
}
.texts-box p{
    display: flex;
    font-size: 15px;
    margin: 0;

}
ul li{
    font-size: 11px;
    margin: 0
}
.product-img{
    margin-left: -30px;
    height: 223px;
    width: 102px;
    border-radius: 6px;
}
.product-btn{
    position: absolute;
    align-self: center;
    margin-top:190px;
    left: 155px;
    background-color: #FCDB7E;
    color: #323031;
    width: 67px;
    height: 20px;
    text-decoration: none;
    padding: 5px;
    border-radius: 6px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 15px;
}
</style>