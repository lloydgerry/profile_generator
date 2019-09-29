const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!



rl.question('Whats up? Welcome to your profile generator.  Can you tell me your name? ', (name) => {
    rl.question('What is your most favourite activity in the world? ', (activity) => {

      rl.question('What music do you listen to? ', (music) => {

        rl.question('What meal is your favourite? ', (meal) => {

          rl.question('What is your favorite thing to eat? ', (food) => {

          console.log(`Thank you for making a new profile ${name}.  Your new profile has been created.  We are excited to hear that you love to listen to ${music} while ${activity}. We love ${meal} and ${food} too.`);
          rl.close();
          })
      })
    })
  })
});