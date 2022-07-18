import { swap } from '../Functions/swap';

export function getCombSortAnimations(villainsArray = []) {
  const copyArray = [...villainsArray];
  const animationsArray = [];
  let countSwap = 0;
  let countSelect = 0;
  const factor = 1.247;
  // получаем точный шаг сравнения
  let gapFactor = copyArray.length / factor;
  while (gapFactor > 1) {
    // округляем шаг до целого
    const gap = Math.round(gapFactor);
    // и организуем цикл как в пузырьковой сортировке
    for (let i = 0, j = gap; j < copyArray.length; i++, j++) {
      animationsArray.push( { type: 'select', data: [i, j] } );
      countSelect++;
        // если сначала идёт большое число
        if (copyArray[i].evilDeeds > copyArray[j].evilDeeds) {
            // меняем их местами
            swap(copyArray, i, j);
            animationsArray.push( { type: 'swap', data: [i, j], array: [...copyArray] } );
            countSwap++;
        }
    }
    // в конце цикла рассчитываем новый шаг
    gapFactor = gapFactor / factor;
}
  return {animations: animationsArray, countSwap, countSelect };
}