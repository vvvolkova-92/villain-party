//менять местами эл-ты массива
export function swap (array, i, min) {
  //копия значения по индексу  i
  const copy = array[i];
  array[i] = array[min];
  array[min] = copy;
}