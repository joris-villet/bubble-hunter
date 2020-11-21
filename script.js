window.addEventListener('DOMContentLoaded', () => {
   
   console.info("document chargé");

   const body = document.querySelector('body');
   const displayGame = document.createElement('div');
   body.appendChild(displayGame)

   const bubbleSpeed = () => Math.round(Math.random() * (8 - 5) + 5);

   // Créer une bulle
   const createBubble = () => {

      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      displayGame.appendChild(bubble);
      let randomBubbleSize = Math.round(Math.random() * (100 - 30) + 30);
      let randomBubblePosBottom = Math.round(Math.random() * (900 - 100) + 100);
      bubble.style.setProperty('height', randomBubbleSize + 'px');
      bubble.style.setProperty('width', randomBubbleSize + 'px');
      bubble.style.setProperty('--size', randomBubbleSize + 'px');
      bubble.style.setProperty('--bottom', randomBubblePosBottom + 'px');
      bubble.style.setProperty('--left', randomBubblePosBottom + 'px');
      bubble.style.setProperty('animation-duration', bubbleSpeed() + 's');
      // console.log(randomBubblePosBottom);   
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