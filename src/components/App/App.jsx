
import style from './App.module.scss';
import Intro from '../Intro/Intro';
import Competition from '../Competition/Competition';

function App() {
  return (
    <div className={style.app}>
      <Intro />
      <Competition />
    </div>
  );
}

export default App;
