<script setup>

</script>

<template>
    <footer class="second-footer">
      <!-- Certifications and Smiley Section -->
      <div class="certification-section">
        <div class="certification">
          <img src="@/assets/img/okologiskstats.jpg" alt="Stats-kontrolleret økologisk" />
        </div>
        <div class="smiley">
          <img src="@/assets/img/smiley-rapport (1).jpg" alt="Smiley kontrolrapport" />
        </div>
      </div>
  
      <!-- Divider Line -->
      <hr />
  
      <!-- Payment Methods Section -->
      <div class="payment-section">
        <p>Vi tager imod følgende betalingsmuligheder</p>
        <div class="payment-logos">
          <img src="@/assets/img/visa.png" alt="Visa" />
          <img src="@/assets/img/mastercard.png" alt="MasterCard" />
          <img src="@/assets/img/mobilepay.png" alt="MobilePay" />
          <img src="@/assets/img/pensopay.png" alt="PensoPay" />
          <img src="@/assets/img/dankort.png" alt="Dankort" />
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .second-footer {
    background-color: #f5f5d8; /* Beige background */
    color: #2e4820; /* Dark green text */
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
  }
  
  .certification-section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .certification,
  .smiley {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    font-size: 14px;
  }
  
  .certification img,
  .smiley img {
    width: 100px; /* Adjust size as needed */
    margin-bottom: 5px;
  }
  
  .smiley a {
    color: #2e4820;
    text-decoration: none;
    font-weight: bold;
  }
  
  .smiley a:hover {
    text-decoration: underline;
  }
  
  hr {
    border: none;
    border-top: 1px solid #2e4820;
    margin: 20px 0;
    width:100%;
  }
  
  .payment-section p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  .payment-logos {
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .payment-logos img {
    width: 50px; /* Adjust size as needed */
  }
  </style>
  