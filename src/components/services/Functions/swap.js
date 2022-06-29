//менять местами эл-ты массива
export function swap (array, i, min) {
  //копия значения по индексн  i
  const copy = array[i];
  array[i] = array[min];
  array[min] = copy;
  console.log('copy');
  console.log(copy);
  console.log('array[i]');
  console.log(array[i]);
  console.log('array[min]');
  console.log(array[min]);
}