const generateRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNumber1 = generateRandomInt(1, 6);

const randomNumber2 = generateRandomInt(1, 6);

document
  .querySelector('.img1')
  .setAttribute('src', `images/dice${randomNumber1}.png`);

document
  .querySelector('.img2')
  .setAttribute('src', `images/dice${randomNumber2}.png`);

if (randomNumber1 === randomNumber2) {
  document.querySelector('h1').textContent = 'Draw!';
} else if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').textContent = '🏁 Player 1 Wins!';
} else {
  document.querySelector('h1').textContent = 'Player 2 Wins! 🏁';
}
