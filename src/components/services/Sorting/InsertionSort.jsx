import React from 'react';
import { VillainCard } from '../../Competition/Competition';
import { swap } from '../Functions/swap';

export function getInsertionSortAnimations(villainsArray = []) {
  const copyArray = [...villainsArray];
  const animationsArray = [];
  let countSwap = 0;
  let countSelect = 0;
  for (let i = 1; i < copyArray.length; i++) {
    for(let j = i; j > 0; j--) {
      animationsArray.push( { type: 'select', data: [j, j-1] } );
      countSelect++;
      if(copyArray[j].evilDeeds > copyArray[j-1].evilDeeds) {
        swap(copyArray, j, j-1);
        animationsArray.push( { type: 'swap', data: [j, j-1], array: [...copyArray] } );
        countSwap++;
      }
      else break;
    }
  }
  return {animations: animationsArray, countSwap, countSelect };
}