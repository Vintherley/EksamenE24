<script setup>

</script>

<template>
    <div class="background-box">
     
        <h3 class="title-contakt">Har du nogle spørgsmål, så kontakt mig her</h3>
 
    <form >
        <input type="text" class="input-name-email" placeholder="Dit navn">

        <input type="text" class="input-name-email" placeholder="Din e-mail">
    
        <input type="text"class="input-message" placeholder="Din Besked">
    </form>
    <button class="send-btn">Send besked</button>
</div>
</template>

<style>
@media (max-width: 768px) {
.background-box{
    margin-top: 30px;
    background-color: #194011;
    display:flex ;
    flex-direction: column;
    align-items: center;
    width: 375px;
    padding: 5px;
    height: 250px;
    margin-left: 0;
}
.title-contakt{
    font-size: medium;
    display: flex;
    justify-self: start;
    margin-left: -15px;
}
.input-name-email{
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 18px;
    border-radius: 6px;
    background-color: #EDEAD0;
}
.input-message{
    width: 320px;
    height: 100px;
    border-radius: 6px;
    background-color: #EDEAD0;
}
.send-btn {
    margin-top: 10px;
    background-color: #FCDB7E;
    border-radius: 6px;
    width: 101px;
    height: 22px;
    padding: 7px;
    border: none;
    display: flex; /* Tilføjer en fleksboks */
    justify-content: center; /* Centrerer teksten horisontalt */
    align-items: center; /* Centrerer teksten vertikalt */
    text-align: center; /* Sørger for, at teksten er centreret */

}
}
</style>