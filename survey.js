const readline = require('readline');

const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
});
let inputObject = {};
rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  inputObject['name'] = answer
  rl.question('What\'s an activity you like doing? ', (answer) => {
    inputObject['activity'] = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      inputObject['listen'] = answer;
      rl.question('Which meal is your favourite (eg:dinner,brunch, etc.) ', (answer) => {
        inputObject['favoriteMeal'] = answer;
        rl.question('What\'s your favorite thing to eat for that mean? ', (answer) => {
          inputObject['food'] = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            inputObject['favoriteSport'] = answer;
            rl.question('What is your superpower? in a few words, tell us what you are amazing at!', (answer) => {
              inputObject['superPower'] = answer;
              console.log(`My name is ${inputObject.name}. I like to do ${inputObject.activity} while listening to ${inputObject.listen}. My favorite meal is ${inputObject.favoriteMeal}, with ${inputObject.food}. My favorite sport is ${inputObject.favoriteSport}. I am really good at ${inputObject.superPower}.`);
              rl.close();
            })
          })
        })
      })
    }) 
  })
})
