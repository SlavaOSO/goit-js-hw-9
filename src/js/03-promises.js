import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

form.addEventListener('submit', onSubmit);



function onSubmit(e) {
  e.preventDefault();
  let firstDelay = delayEl.value;
  const stepDelay = stepEl.value;
  const amountForm = amountEl.value;
  // let delay = 0;
  // for (let i = 1; i <= amountForm; i++) {
  //   const position = i;
  //   if (i === 1) {
  //     delay += firstDelay;
  //   } else {
  //     delay += stepDelay;
  //   }
  for (let position = 1; position <= amountForm; position += 1) {
    const delay = (position - 1) * stepDelay + +firstDelay;
    // const delay = (position - 1) * stepEl.value + +delayEl.value;

    createPromise(position, delay)
      .then(({ position, delay }) =>
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  )
      .catch(({ position, delay }) =>
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  );
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
        // Fulfill
      } else {
        reject({ position, delay })
        // Reject
      }
    }, delay);
  });
      
}

// ======================another=variant================================
//
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const delayEl = document.querySelector('[name="delay"]');
// const stepEl = document.querySelector('[name="step"]');
// const amountEl = document.querySelector('[name="amount"]');
// const form = document.querySelector('.form');

// form.addEventListener('submit', (onSubmitForm));

// let position = 0;

// function onSubmitForm(e){
// e.preventDefault();
// let delayStep = delayEl.value ;
// const step = stepEl.value;
// const amount = amountEl.value;

// for (position = 1; position <= amount; position += 1) {
//   const delay = (position - 1) * step + +delayStep;
// createPromise(position, delay)
// .then(({ position, delay }) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
//   .catch(({ position, delay }) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
// }
// }


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(shouldResolve){
//     resolve({position, delay})
//     } else {
//     reject({position, delay})
//   }
//   }, delay);
// });
// }
// 
// ========================================================

// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах, шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.

// <form class="form">
//   <label>
//     First delay (ms)
//     <input type="number" name="delay" required />
//   </label>
//   <label>
//     Delay step (ms)
//     <input type="number" name="step" required />
//   </label>
//   <label>
//     Amount
//     <input type="number" name="amount" required />
//   </label>
//   <button type="submit">Create promises</button>
// </form>

// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполянется или отклоняется через delay времени. Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// Библиотека уведомлений
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Для отображения уведомлений пользователю вместо console.log() используй библиотеку notiflix.