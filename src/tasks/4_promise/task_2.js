// Напишите функцию delay(ms), которая возвращает промис,
// переходящий в состояние resolved через ms миллисекунд.

function delay(ms) {
  const delayFunc = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  }).then(() => console.log('resolved'));
}

delay(3000);
