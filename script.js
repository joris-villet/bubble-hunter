window.addEventListener('DOMContentLoaded', () => {
   
   console.info("document chargé");

   const body = document.querySelector('body');
   const bubble = document.createElement('div');

   const randomBubbleSize = Math.round(Math.random() * (80 - 10) + 10);
   console.log(randomBubbleSize)

   const setup = () => {
      bubble.classList.add('bubble');
      body.appendChild(bubble);
   }

   setup()

   const btn = document.createElement('button');
   btn.textContent = "button"
   body.appendChild(btn);

   btn.addEventListener('click', () => {
      bubble.style.setProperty('height', randomBubbleSize + 'px');
      bubble.style.setProperty('width', randomBubbleSize + 'px');
   });








});