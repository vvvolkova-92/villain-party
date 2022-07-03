import React, { forwardRef, useRef, useState } from 'react';
import Select from 'react-select';
import style from './Competition.module.scss';
import { selectOptions, villains} from '../services/constans';
import { getSelectionSortAnimations } from '../services/Sorting/SelectionSort';
import { wait } from '../services/Functions/wait';

const VillainCard = React.forwardRef(({id, image, name, evilDeeds }, ref) => (
  <li id={id} className={style.villian__card} ref={ref}>
  <img src={image} alt={name} className={style.villian__image}></img>
  <div className={style.villian__info}>
    <span className={style.villian__deeds}>{evilDeeds}</span>
    <span className={style.villian__name}>{name}</span>
  </div>
</li>
));

function Competition() {
  //дефолтное состояние массива со злодеями
  const [villainsArray, setVillainsArray] = useState(villains);
  //КОЛХОЗ
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
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

  // функция парсинга анимации
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
        refs[i].current.classList.add(`${style.villian__card_activeSwap}`);
        refs[j].current.classList.add(`${style.villian__card_activeSwap}`);
      }
      if (type === 'select') {
        //другой цвет карточки
        refs[i].current.classList.add(`${style.villian__card_activeSelect}`);
        refs[j].current.classList.add(`${style.villian__card_activeSelect}`);
      }
      await wait(1000);
      
      if (type === 'swap' && array) {
        setVillainsArray(array);
      }
      refs[i].current.className = style.villian__card;
      refs[j].current.className = style.villian__card;
    }
  }

  //функция выбора типа сортировки в зависимости от значения  в селекте
  async function sort(name) {
    let animations = [];
    let result;
    switch (name) {
      case "selection":
        result = getSelectionSortAnimations(villainsArray);
        console.log(result);
        const animations = result.animations;
        await parseAnimations(animations);
      break
      default: console.log('fdfdfdfd');
    }
  }

  const changeHandler = (value) => {
    const sortName = value.value;
    switch (sortName) {
      case "selection":
        sort('selection');
      break;
      default: console.log('не такого значения');
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
          { villainsArray.map((villain, id) => 
            <VillainCard 
            id={`evil${id}`}
            image={villain.image} 
            name={villain.name} 
            evilDeeds={villain.evilDeeds} 
            key={`evil${id}`}
            ref={refs[id]}/>) 
          }
        </ul>
      </div>

    </main>
  )
}

export default Competition