import React, { forwardRef, useCallback, useRef, useState, useEffect } from 'react';
import Select from 'react-select';
import style from './Competition.module.scss';
import { selectOptions, villains} from '../services/constans';
import { getSelectionSortAnimations } from '../services/Sorting/SelectionSort';
import { wait } from '../services/Functions/wait';

export const VillainCard = ({ isActive, id, image, name, evilDeeds, onClick }) => {
  return (
    <li id={id} className={isActive ? style.villian__card_active : style.villian__card}>
    <img src={image} alt={name} className={style.villian__image}></img>
    <div className={style.villian__info}>
      <span className={style.villian__deeds}>{evilDeeds}</span>
      <span className={style.villian__name}>{name}</span>
    </div>
  </li>
  )
};

// const Villains = ({ array }) => {
//   const ref = useRef(null);
//   const allVillains = array.map(villain => <VillainCard 
//     id={villain.id} 
//     image={villain.image} 
//     name={villain.name} 
//     evilDeeds={villain.evilDeeds} 
//     key={villain.id}
//     ref={ref}
//     />);
//     // console.log(allVillains);
//   return allVillains;
// };

function Competition() {
  const [state, setState] = useState(null);
  //дефолтное состояние массива со злодеями
  const [villainsArray, setVillainsArray] = useState(villains);
  const customStyles = {
    control: (base, state) => ({
      ...base,
      padding: 15,
      borderColor: state.isFocused ? '#19acb9' : 'none',
    }),
    option: (base, state) => ({
      ...base,
      background: 'transparent',
      color: state.isSelected ? '#19acb9' : 'black',
      padding: 20,
    }),
  };

  // функция парсинга анимация
  async function parseAnimations(animations) {
    //циклом пройтись по анимациям
    for(const animation of animations) {
      //деструктуризация объекта анимации
      const { type, data, array } = animation;
      //деструктуризация массива data со значениями i, j
      const [i, j] = data;
      //проверяем тип анимациии
      //если тип равен  swap
      if (type === 'swap') {
        //выделить рамкой карточки

        document.querySelector(`#evil-${i}`).style.border = '2px red solid';
        document.querySelector(`#evil-${j}`).style.border = '2px red solid';
      }
      else if (type === 'select') {
        //другой цвет карточки
        document.querySelector(`#evil-${i}`).style.border = '2px green solid';
        document.querySelector(`#evil-${j}`).style.border = '2px green solid';
      }
      await wait(30);
      if (type === 'swap' && array) {
        setVillainsArray(array);
      }

      document.querySelector(`#evil-${i}`).style.border = 'none';
      document.querySelector(`#evil-${j}`).style.border = 'none';
    }
  }

  //функция выбора типа сортировки в зависимости от значения  в селекте
  async function sort(name) {
    let animations = [];
    switch (name) {
      case "selection":
        animations = getSelectionSortAnimations(villainsArray);
        await parseAnimations(animations);
        default: console.log('fdfdfdfd');
    }
  }

  const changeHandler = (value) => {
    setState(value.value);
    switch (state) {
      case "selection":
        sort('selection');
        // sortArray = bubbleSort(newArray);
        // return sortArray.map(villain => <VillainCard id={villain.id} image={villain.image} name={villain.name} evilDeeds={villain.evilDeeds} key={villain.id}/>);
      default:
        // return newArray.map(villain => <VillainCard id={villain.id} image={villain.image} name={villain.name} evilDeeds={villain.evilDeeds} key={villain.id}/>);
    }
  }
  return (
    <main className={style.competition}>
      <div className={style.rating__block}>
        <p className={style.rating__text}>Итак, на тусовке Бендер предложить узнать, кто же из них сделал больше всего гадких пакостей.
        Вы можете узнать об этом, выбрав один из методов сортировки в списке</p>
        {
          <Select 
        options={selectOptions} 
        placeholder="Сделайте свой выбор"
        styles={customStyles}
        className="custom-select"
        onChange={changeHandler}
        />}
        <ul className={style.rating__list}>
          { 
            villainsArray.map((villain, id) => <VillainCard 
              id={`evil-${id}`}
              image={villain.image} 
              name={villain.name} 
              evilDeeds={villain.evilDeeds} 
              key={`evil-${id}`}
            />) 
          }
        </ul>
        <button onClick={() => sort('selection')}>TIK</button>
      </div>

    </main>
  )
}

export default Competition