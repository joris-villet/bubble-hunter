window.addEventListener('DOMContentLoaded', () => {
   
   console.info("document chargé");

   const body = document.querySelector('body');
   const displayGame = document.createElement('div');
   body.appendChild(displayGame)

   

   // Créer une bulle
   const createBubble = () => {

      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      displayGame.appendChild(bubble);
      const randomBubbleSize = Math.round(Math.random() * (80 - 10) + 10);
      const randomBubblePosBottom = Math.round(Math.random() * (800 - 100) + 100);
      bubble.style.setProperty('height', randomBubbleSize + 'px');
      bubble.style.setProperty('width', randomBubbleSize + 'px');
      bubble.style.setProperty('bottom', randomBubblePosBottom + 'px');
      console.log(randomBubblePosBottom);   
   }

   
   // Exploser une bulle
   const removeBubble = (e) => displayGame.removeChild(e.target)
   

   // Ecouteur d'événements
   const callToAction = () => {
      document.querySelector('.addBubble').addEventListener('click', createBubble);
      displayGame.addEventListener('click', removeBubble);  
   }

   

   // console.log(window.screenX)
   // console.log(window.screenY)


   callToAction();

});