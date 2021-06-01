const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What\'s your name? ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? (eg: breakfast, ect.) ', (answer4) => {
        rl.question('What is your favorite thing to eat for that meal? ', (answer5) => {
          rl.question('What sport is your absolute favorite? ', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`Thank you for your valuable feedback: ${answer1}`);
              console.log(`I see your favourite activity is: ${answer2}`);
              console.log(`It is great you listen to: ${answer3}`);
              console.log(`I see your favorite meal is: ${answer4}`);
              console.log(`I see your favorite food is: ${answer5}`);
              console.log(`I see your favorite sport is: ${answer6}`);
              console.log(`I see you are amazing at: ${answer7}`);
              rl.close();
            })
          })
        })
      })
    })
  })
});
// const question1 = () => {
//   return new Promise((resolve) => {
//     rl.question('What\'s your name? ', (answer) => {
//       console.log(`Thank you for your valuable feedback: ${answer}`);
//       resolve();
//     })
//   })
// }
// const question2 = () => {
//   return new Promise((resolve) => {
//     rl.question('What\'s an activity you like doing? ', (answer) => {
//       console.log(`I see your favourite activity is: ${answer}`);
//       resolve();
//     })
//   })
// }
// const question3 = () => {
//   return new Promise((resolve) => {
//     rl.question('What do you listen to while doing that? ', (answer) => {
//       console.log(`It is great you listen to: ${answer}`);
//       resolve();
//     })
//   })
// }
// const question4 = () => {
//   return new Promise((resolve) => {
//     rl.question('Which meal is your favourite? (eg: breakfast, ect.) ', (answer) => {
//       console.log(`I see your favorite meal is: ${answer}`);
//       resolve();
//     })
//   })
// }
// const question5 = () => {
//   return new Promise((resolve) => {
//     rl.question('What is your favorite thing to eat for that meal? ', (answer) => {
//       console.log(`I see your favorite food is: ${answer}`);
//       resolve();
//     })
//   })
// }
// const question6 = () => {
//   return new Promise((resolve) => {
//     rl.question('What sport is your absolute favorite? ', (answer) => {
//       console.log(`I see your favorite sport is: ${answer}`);
//       resolve();
//     })
//   })
// }
// const question7 = () => {
//   return new Promise((resolve) => {
//     rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
//       console.log(`I see you are amazing at: ${answer}`);
//       resolve();
//     })
//   })
// }
// const main = async () => {
//   await question1();
//   await question2();
//   await question3();
//   await question4();
//   await question5();
//   await question6();
//   await question7();
//   rl.close();
// }
// main();
// rl.question('What\'s your name? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


