import React, {useState} from 'react';
import style from './Intro.module.scss';
import imageVillians from '../../images/intro.png';
import AnimationBackground from '../AnimationBackground/AnimationBackground';
import useSound from 'use-sound';
import partySong from '../../party-song.mp3';

function Intro() {

  const [state, setState] = useState(false);
  const [play, { stop }] = useSound(partySong);

  const buttonHandler = () => {
    console.log(state);
    setState(!state);
    state ? stop(): play();
  }

  return (
    <header className={style.intro}>
      {state && <AnimationBackground />}
      <div className={style.intro__block}>
        <img className={style.intro__image} src={imageVillians} alt="villians party"></img>
        <button className={style.intro__button} onClick={buttonHandler}></button>
        <h1 className={style.intro__title}>Злодейская вечеринка злосных злодеев</h1>
      </div>
    </header>
  )
}

export default Intro