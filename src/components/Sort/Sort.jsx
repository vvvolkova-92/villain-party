import React from 'react';
import { VillainCard } from '../Competition/Competition';

// export const bubbleSort = (array) => {
//   console.log('мы дошли до сортировки');
//   const sortarray = [...array];
//   const size = array.length-1;
//   for (let i = 0; i < size; i++) {
//     let wasSort = false;
//     for (let j = 0; j < size - i; j++) {
//       if (sortarray[j].evilDeeds > sortarray[j + 1].evilDeeds) {
//         [sortarray[j], sortarray[j + 1]] = [sortarray[j + 1], sortarray[j]];
//         wasSort = true;
//       }
//     }
//     if (!wasSort) break;
//   }
// return sortarray;
// }

export const bubbleSort = (array) => {
  console.log('мы дошли до сортировки');
  const sortarray = [...array];
  const size = array.length-1;

    for (let i = 0; i < size; i++) {
      console.log('---------итерации-----------');
        for (let j = 0; j < size - i; j++) {
          if (sortarray[j].evilDeeds > sortarray[j + 1].evilDeeds) {
            [sortarray[j], sortarray[j + 1]] = [sortarray[j + 1], sortarray[j]];
          };
          console.log(sortarray);
        }
    }


return sortarray;
}


