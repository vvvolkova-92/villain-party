import React, { useCallback, useRef, useState } from 'react';
import Select from 'react-select';
import style from './Competition.module.scss';
import { selectOptions, villains} from '../services/constans';
import { bubbleSort } from '../Sort/Sort';

export const VillainCard = ({ isActive, id, image, name, evilDeeds }) => {
  return (
    <li className={isActive ? style.villian__card_active : style.villian__card} key={id} >
    <img src={image} alt={name} className={style.villian__image}></img>
    <div className={style.villian__info}>
      <span className={style.villian__deeds}>{evilDeeds}</span>
      <span className={style.villian__name}>{name}</span>
    </div>
  </li>
  )
}

const Villains = ({ state, array }) => {
  const allVillains = array.map(villain => <VillainCard id={villain.id} image={villain.image} name={villain.name} evilDeeds={villain.evilDeeds} key={villain.id}/>);
  let sortArray;
  switch (state) {
    case "bubble":
      sortArray = bubbleSort(array);
      break;
    default:
      return allVillains;
  }
  // return sortArray;
  return allVillains;
  // return sortArray.map(villain => <VillainCard id={villain.id} image={villain.image} name={villain.name} evilDeeds={villain.evilDeeds} key={villain.id}/>);
}

function Competition() {

  const [state, setState] = useState(null);

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

  const changeHandler = (value) => {
    setState(value.value);
  }

  return (
    <main className={style.competition}>
      <div className={style.rating__block}>
        <p className={style.rating__text}>Итак, на тусовке Бендер предложить узнать, кто же из них сделал больше всего гадких пакостей.
        Вы можете узнать об этом, выбрав один из методов сортировки в списке</p>
        {<Select 
        options={selectOptions} 
        placeholder="Сделайте свой выбор"
        styles={customStyles}
        className="custom-select"
        onChange={changeHandler}
        />}
        <ul className={style.rating__list}>
          <Villains state={state} array={villains}/>
        </ul>
      </div>

    </main>
  )
}

export default Competition