import ursula from '../../images/villians/ursula.jpeg';
import bender from '../../images/villians/bender.jpeg';
import malifecent from '../../images/villians/malifecent.png';
import redqueen from '../../images/villians/Red_Queen.png';
import yago from '../../images/villians/yago.png';
import plankton from '../../images/villians/plankton.png';
import cruella from '../../images/villians/cruella.png';
import aid from '../../images/villians/hades.png';
import dart from '../../images/villians/dart.png';
import jafar from '../../images/villians/jafar.png';

export function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const confettiConfig =  {
  fpsLimit: 60,
  particles: {
    number: {
      value: 0
    },
    color: {
      value: ["#660066", "#99ff99", "#ff69b4"]
    },
    shape: {
      type: ["circle", "square"]
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        minimumValue: 0,
        speed: 2,
        startValue: "max",
        destroy: "min"
      }
    },
    size: {
      value: 7,
      random: {
        enable: true,
        minimumValue: 3
      }
    },
    links: {
      enable: false
    },
    life: {
      duration: {
        sync: true,
        value: 5
      },
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 20
      },
      speed: { min: 10, max: 20 },
      decay: 0.1,
      direction: "none",
      straight: false,
      outModes: {
        default: "destroy",
        top: "none"
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 60
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      resize: true
    }
  },
  detectRetina: true,
  emitters: {
    direction: "none",
    life: {
      count: 0,
      duration: 0.1,
      delay: 0.4
    },
    rate: {
      delay: 0.1,
      quantity: 100
    },
    size: {
      width: 0,
      height: 0
    }
  }
};
 export const villains = [
   {name: 'Урсула', evilDeeds: getRandom(100, 90000), image: ursula, about: 'Урсула – хитрая и харизматичная авантюристка. Она снисходительна к попавшим в беду русалкам и русалам, но на самом деле она использует их для достижения заветной цели – стать правительницей Атлантики (или же просто позабавиться). У неё специфичное чувство юмора. Урсула печально известная личность на морском дне, одно упоминание приводит всех в трепет.'},
   {name: 'Бендер', evilDeeds: getRandom(100, 90000), image: bender, about: 'Бендер является патологическим лгуном и редко проявляет какие-либо симпатии. Он постоянно ворует, начиная от мелкой кражи кошелька до таких преступлений, как похищение головы Джея Лено и крови Фрая. Бендер — ужасно самовлюбленный робот. Он считает себя безупречным. Захватывал мир вместе с другими роботами для Корпорации MomCorp'},
   {name: 'Малефисента', evilDeeds: getRandom(100, 90000), image: malifecent, about: 'Малефисента является олицетворением абсолютного зла. Она жестокая и коварная злодейка, способная сделать всё что угодно для достижения своих злых целей. Под маской стоицизма она скрывает целую гамму эмоций, в которой больше всего преобладают гнев и ярость, которые она нередко выпускает наружу, причём с улыбкой.'},
   {name: 'Ирацебета', evilDeeds: getRandom(100, 90000), image: redqueen, about: 'Красная Королева — тираническая правительница, вспыльчивое создание, с непропорционально большой головой и маниакальным желанием рубить головы своим подданным, держит всё королевство в страхе. Она даже демонстрирует крайний садизм. Самые яркие примеры - смотреть на казни и наблюдать, как страдают другие. Она нетерпелива и очень груба, часто кричит и не ждет ни секунды.'},
   {name: 'Планктон', evilDeeds: getRandom(100, 90000), image: plankton, about: 'Планктон имеет обширную историю обмана и совершения проступков, все время пытаясь получить рецепт крабсбургера и превзойти бизнес мистера Крабса. Его арестовывали пять раз.Главные черты характера Планктона — зависть и злоба, чаще всего он пытается достичь своей цели путём обмана другого персонажа. Сам он слепо верит в то, что с помощью своего гениального ума способен победить кого угодно.'},
   {name: 'Стервелла', evilDeeds: getRandom(100, 90000), image: cruella, about: 'Стервелла — злая, жестокая и эгоистичная женщина с эксцентричными манерами и любовью к курению. Стервелла помешана на мехах, что часто приводит её к необдуманным поступкам. Злодейка собирается убить щенков и сделать себе из их шкурок новую шубу. Она приказывает Хорасу и Джасперу убить щенков любым способом и снять с них шкуру, а сама уезжает, обещая вернуться рано утром.'},
   {name: 'Аид', evilDeeds: getRandom(100, 90000), image: aid, about: 'Несмотря на то, что Аид бог мёртвых, он достаточно живой. Считает себя добрым парнем, который просто ненавидит Геркулеса. Как бог он всемогущ. Он может телепортироваться, создавать вещи и тому подобное. Часто швыряет огнём. Хотя Аид придумывает жестокие планы, его неформальный подход к злым делам делает его комичным персонажем (хотя смеётся над его шутками в основном он сам). Обычно Аид делает вид, что у него всё под контролем, но на самом деле характер у него взрывной.'},
   {name: 'Дарт Вейдер', evilDeeds: getRandom(100, 90000), image: dart, about: 'Дарт Вейдер был жестоким, злопамятным, целеустремленным, безэмоциональным и властолюбивым человеком, одержимый жаждой тотального контроля над всеми. После принятия титула лорда он превратился в жестокого и беспощадного тёмного повелителя, не прощающего чужих ошибок и использующего все средства для достижения своих дьявольских целей. Он жаждал могущества, выполнял любую прихоть Императора и не знал сострадания или прощения.'},
   {name: 'Джафар', evilDeeds: getRandom(100, 90000), image: jafar, about: 'Джафар-очень хитрый, коварный и жестокий. Джафар превозносит власть и использует любые средства для ее получения. Джафар изображается как аморальный садист и социопат, который не будет мешкать, если кого-то понадобится ликвидировать.'},
 ];
 
 export const selectOptions = [
  { value: 'selection', label: 'Сортировка выбором' },
  { value: 'insertion', label: 'Сортировка вставками' },
  { value: 'bubble', label: 'Сортировка пузырьком' },
  { value: 'comb', label: 'Сортировка расчёской' },
  // { value: 'shaker', label: 'Шейкерная сортировка' },
  // { value: 'merge', label: 'Сортировка слиянием' },
]