// letter.js
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('letter');
  const text = `To my dearest bubu,

Happy Birthday Baby I can't believe you are finally 21, I am so proud of the woman you have became since I first met you.

The first day we started talking, I instantly got butterflies it felt like I've knew you for my whole life that was the day I decided that I wanted to be the man you walk down the isle to❤️. 

I am so so so grateful that you've came into my life when you did. My bunny please know that you are the most beautiful girl on the planet and I would never leave you to find better because there isn't any girl that could replace you. 

Here is why I love you.

First you are freaking BUBUUU how couldn't I love someone so adorable as you. Second I love the way you don't judge me at all. Third I love how you get excited over the smallest things. Forth I love You so much you are the main reason why I have matured so much this past 2 years. 
Fifth I love how beautiful your eyes are they remind me of how beautiful space can be. I love how you hold yourself up by never giving up. I Love You my BUNNY, FOREVER AND ALWAYS.

I hope today is the best birthday you've ever had. And I can't wait to surprise you with every gift.

All My Love Pudu`;
  
  el.textContent = '';
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i++);
      setTimeout(type, 50);
    }
  }

  type();
});
