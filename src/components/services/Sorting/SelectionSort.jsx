import React from 'react';
import { VillainCard } from '../../Competition/Competition';
import { swap } from '../Functions/swap';

export function getSelectionSortAnimations(villainsArray = []) {
   const copyArray = [...villainsArray];
   const animationsArray = [];
   let countSwap = 0;
   let countSelect = 0;
  for(let i = 0; i < villainsArray.length-1; i++) {
    //АЛГОРИТМ: индекс переменной с минимальным значением
    let min = i;
    // АЛГОРИТМ: j - след. за переменной с индексом i
    for (let j = i + 1; j < villainsArray.length; j++) {
      countSelect++;
       //АНИМАЦИЯ: пушим в анимации объект! указываем тип select, массив со сравниваемыми индексами i и j - показываем когда 
       //перебираем индексты
      animationsArray.push( { type: 'select', data: [i, j] } )
       //АЛГОРИТМ: если след. число (j) меньше минимального на данный момент (с индексом min), то min = j
        if (copyArray[j].evilDeeds > copyArray[min].evilDeeds) {
          min = j;
        };
       //АЛГОРИТМ: если мин индекс не равен i, то нужно переместить эл-ты массива местами
      }
    if (min !== i) {
      swap(copyArray, i, min);
      countSwap++;
      // АНИМАЦИЯ: пушим в анимации объект! указываем тип swap, массив со сравниваемыми индексами i и min - показываем когда 
      // меняем значения! + передаем копию перебираемого массива
      animationsArray.push( { type: 'swap', data: [i, min], array: [...copyArray] } );
      }
    }
  //функция будет возвращать анимации
  return {animations: animationsArray, countSwap, countSelect }
}



