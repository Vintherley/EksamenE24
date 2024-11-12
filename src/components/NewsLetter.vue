<script setup>

</script>

<template> 
<div class="box-news">
    <h3>Tilmeld dig vores nyhedsbrev her</h3>
    <form class="newsletter-form">
        <input type="email" class="input-news" placeholder="Indtast din e-mail" />
        <button type="submit" class="news-btn">Abonner</button>
    </form>
</div>
</template>

<style>
.box-news{
    background-color:#194011;
    height: 90px;
    width: 375px;
    margin-left: -8px;

}
h3{
    display: flex;
    justify-content: center;
    color: #EDEAD0;
    margin: none;

}
.newsletter-form {
    display: flex;
    justify-content: left; /* Sørger for at input og knap er centreret vertikalt */
   
}

.input-news {
    width: 250px;
    height: 25px;
    margin-left: 15px;
}

.news-btn {
    width: 93px;
    height: 32px;
    border-radius: 0px 6px 6px 0;
    background-color: #FCDB7E;
}
</style>