const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite?', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              console.log(` your name : ${answer1} ,
              your favours activity: ${answer2},
              your favours music while doing that activity :${answer3}, 
              your favours meal: ${answer4}, 
              your favours food during that meal: ${answer5}, 
              your favours sport: ${answer6}, 
              your superpower: ${answer7}`);
              rl.close()
            });
          });
        });
      });
    });
  });
}); 




