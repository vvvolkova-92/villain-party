import { swap } from '../Functions/swap';

export function getBubbleSortAnimations(villainsArray = []) {
  const copyArray = [...villainsArray];
  const animationsArray = [];
  let countSwap = 0;
  let countSelect = 0;

  for (let i = 0; i < copyArray.length - 1; i++) {
    for(let j = 0 ; j < copyArray.length - i - 1; j++) {
      animationsArray.push( { type: 'select', data: [i, j] } );
      countSelect++;
      if(copyArray[j].evilDeeds < copyArray[j+1].evilDeeds) {
        swap(copyArray, j, j+1);
        animationsArray.push( { type: 'swap', data: [j, j+1], array: [...copyArray] } );
        countSwap++;
      }
    }
  }
  return {animations: animationsArray, countSwap, countSelect };
}