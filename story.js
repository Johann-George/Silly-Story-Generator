
const characters = ['A monkey', 'A wizard', 'A talking parrot', 'A ninja cat'];
const actions = ['ate a pizza', 'flew to the moon', 'danced salsa', 'solved a mystery'];
const settings = ['in a chocolate factory', 'on a pirate ship', 'underwater in Atlantis', 'in a parallel universe'];


function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


function generateSillyStory() {
  const character = getRandomElement(characters);
  const action = getRandomElement(actions);
  const setting = getRandomElement(settings);

  const sillyStory = `${character} ${action} ${setting}. It was a day full of laughter and unexpected twists!`;

  return sillyStory;
}


const sillyStory = generateSillyStory();
console.log(sillyStory);
