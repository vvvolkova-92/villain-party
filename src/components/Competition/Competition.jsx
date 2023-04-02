import React, { forwardRef, useRef, useState, useEffect } from 'react';
import Select from 'react-select';
import Button from '../Button/Button';
import style from './Competition.module.scss';
import {getRandom, selectOptions, villains} from '../services/constans';
import { getSelectionSortAnimations } from '../services/Sorting/SelectionSort';
import { getInsertionSortAnimations } from '../services/Sorting/InsertionSort';
import { getBubbleSortAnimations } from '../services/Sorting/BubbleSort';
import { getCombSortAnimations } from '../services/Sorting/CombSort';
import { wait } from '../services/Functions/wait';

const Rating = ({villainsArray, animations, time}) => {
  const ref = useRef();
  useEffect(() => {
    return () => {
      ref.current.scrollIntoView({behavior: "smooth"});
    }
  }, []);

  return (
    <>
      {
      time 
      ?  <div className={style.pedestal}>
      <h2 className={style.pedestal__title}>Победитель!</h2>
      <div className={style.pedestal__vinner}>
        <img className={style.pedestal__image} alt="Первое место" src={villainsArray[0].image}/>
        <p className={style.pedestal__text}>{villainsArray[0].about}</p>
      </div>
      <div className={style.pedestal__info} ref={ref}>
        <p>Всего сравнений: <span>{animations.countSelect}</span></p>
        <p>Всего перестановок: <span>{animations.countSwap}</span></p>
        <p>Время анимации сортировки: <span>{time / 1000}</span> сек</p>
      </div>
    </div>
      : ''
    }
    </>
  )  
}

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
  const [animations, setAnimations] = useState();
  const [time, setTime] = useState();
  const [btnState, setBtnState] = useState(false);
  //КОЛХОЗ
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const customStyles = {
    control: (base, state) => ({
      ...base,
      padding: 15,
      borderColor: state.isFocused ? '#19acb9' : 'none',
      cursor: 'pointer',
    }),
    option: (base, state) => ({
      ...base,
      background: 'transparent',
      color: state.isSelected ? '#19acb9' : 'black',
      padding: 20,
      cursor: 'pointer',
    }),
    container: (base, state) => ({
      ...base,
      width: 320,
    })
  };

  // функция парсинга анимации
  async function parseAnimations(animations) {
    const start = new Date().getTime();
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
        refs[j].current.classList.add(`${style.villian__card_activeSwapLittle}`); 
      }
      if (type === 'select') {
        //другой цвет карточки
        refs[i].current.classList.add(`${style.villian__card_activeSelect}`);
        refs[j].current.classList.add(`${style.villian__card_activeSelect}`);
      }
      await wait(100);
      
      if (type === 'swap' && array) {
        setVillainsArray(array);
      }
      refs[i].current.className = style.villian__card;
      refs[j].current.className = style.villian__card;
    }
    const end = new Date().getTime();
    const time = end - start;
    setTime(time);
  }

  //функция выбора типа сортировки в зависимости от значения  в селекте
  async function sort(name) {
    setBtnState(true);
    setTime(null);
    let animations = [];
    let result;
    switch (name) {
      case "selection":
        result = getSelectionSortAnimations(villainsArray);
      break;
      case "insertion":
        result = getInsertionSortAnimations(villainsArray);
      break;
      case "bubble":
        result = getBubbleSortAnimations(villainsArray);
      break;
      case "comb":
        result = getCombSortAnimations(villainsArray);
      break;
      default: console.log('fdfdfdfd');
    }
    animations = result.animations;
    await parseAnimations(animations);
    setAnimations(result);
    setBtnState(false);
  }

  const changeHandler = (value) => {

    const sortName = value.value;
    switch (sortName) {
      case "selection":
        sort('selection');
      break;
      case "insertion":
        sort('insertion');
      break;
      case "bubble":
        sort('bubble');
      break;
      case "comb":
        sort('comb');
      break;
      default: console.log('не такого значения');
    }
  };
  const onButtonBreakClickHandler = () => {
    const newVillains = villains.map(villain => {
      villain.evilDeeds = getRandom(100, 90000);
      return villain;
    });
    setVillainsArray(newVillains);
    setTime(null);
  };

  return (
    <main className={style.competition}>
      <div className={style.rating__block}>
      <Button onClick={onButtonBreakClickHandler} disabled={btnState}>Новый массив</Button>
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
      {animations && (<Rating villainsArray={villainsArray} animations={animations} time={time} />)}
    </main>
  )
}

export default Competition;