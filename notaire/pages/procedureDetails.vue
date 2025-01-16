<script setup>

</script>


<style scoped>
  .perso {
    height: 88%;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .stepBox {
    width: clamp(200px, 100%, 300px);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid orange; */
  }

  /* .stepNumber, .stepSmallIcon {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 500;
  }

  .stepNumber {
    font-size: 1.2rem;
  } */

  .stepText {
    border-width: 5px;
    border-style: solid;
    border-color: green;
    border-radius: 15px;
    width: 100%;
    padding: 3rem 1rem 0.5rem;
    position: relative;
    margin: 4rem 0 1.7rem;
  }

  .stepIcon {
    background-color: green;
    border: 4px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    box-shadow: 0 0 7px gray;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -55%);
  }

  .stepIcon > img {
    display: block;
    width: 2.3rem;
  }

  .stepText h2 {
    font-size: 1.1rem;
    text-align: center;
  }

  .subStepBox {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    height: 15rem;
    /* border: 1px solid black; */
  }

  .subStep {
    display: flex;
    align-items: center;
    gap: 10px;
     /* border: 1px solid black; */
  }

  .subStep span {
    font-size: 0.9rem;
  }
  
  .triangle {
    width: 0;
    height: 0;
    border-width: 1.5rem 1.5rem 0 1.5rem;
    border-style: solid;
    border-color: green transparent transparent transparent;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(1.5rem + 5px));
  }

  /* .stepSmallIcon {
    //margin: 2rem 0 1rem;
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }

  .stepSmallIcon > img {
    display: block;
    width: 1rem;
  } */

  /* .stepDate {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 1.5rem;
    gap: 0.8rem;
    border-width: 5px;
    border-radius: 10px;
    border-style: solid;
  }

  .stepDate img {
    width: 1.5rem;
  }

  .stepDate span {
    font-size: 0.9rem;
  } */

</style>


<template>
  <div class="ma-4" >
      <back-button title="Nom de la procédure" goBackTo="/home"/>
  </div>
  
  <div class="ma-4 perso">
    <div class="stepBox">
      <!-- <div class="stepNumber" style="background: green; color: white" >1</div> -->
       <step-number stepNumber="1" stepBackgroundColor="green" stepTextColor="white" />

      <div class="stepText" >
        <div class="stepIcon">
          <img src="../assets/img/document-file.png" />
        </div>

        <h2>Fourniture des pièces</h2>

        <div class="subStepBox">
          <div class="subStep">
            <input type="checkbox" style="accent-color: green" />
            <span>Certificat de localisation</span>
          </div>
          <div class="subStep">
            <input type="checkbox" style="accent-color: green" />
            <span>Attestation de situation fiscale</span>
          </div>
          <div class="subStep">
            <input type="checkbox" style="accent-color: green" />
            <span>Etat foncier</span>
          </div>
          <div class="subStep">
            <input type="checkbox" style="accent-color: green" />
            <span>Titre de propriété</span>
          </div>
        </div>
        <div class="triangle"></div>
      </div>

      <!-- <div class="stepSmallIcon" style="background: green">
        <img src="../assets/img/check.png" />
      </div> -->
      <step-progress-icon imagePath="check.png" stepBackgroundColor="green" />

      <!-- <div class="stepDate" style="border-color: green">
        <img src="../assets/img/calendarfilled.png" />
        <span>16/01/2025</span>
      </div> -->
      <step-date date="16/01/2025" borderColor="green" />
    </div>
  </div>
</template>