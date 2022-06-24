import React from 'react';
import Select from 'react-select';
import style from './Competition.module.scss';
import { selectOptions, villians} from '../services/constans';

const VillianCard = ({ isActive, id, image, name, evilDeeds }) => {
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

const Villians = () => {
  return villians.map(villian => <VillianCard id={villian.id} image={villian.image} name={villian.name} evilDeeds={villian.evilDeeds} />)
}

function Competition() {

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
        />}
        <ul className={style.rating__list}>
          <Villians />
        </ul>
      </div>

    </main>
  )
}

export default Competition