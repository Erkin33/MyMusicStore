import { useRef } from 'react';
import './App.css';
import { Img } from './assets/music';

function App() {
  const audios = [
    '/musics/first.mp3',
    '/musics/second.mp3',
    '/musics/third.mp3',
    '/musics/fourth.mp3',
    '/musics/fivth.mp3',
    '/musics/sixth.mp3',
    '/musics/seventh.mp3',
  ];

  const trying = useRef(null);

  const play = () => {
    if (trying.current) {
      const currentSrc = new URL(trying.current.src).pathname; // Корректно извлекаем текущий путь

      if (currentSrc === audios[0]) {
        trying.current.src = audios[1]; // Меняем источник
      } else if (currentSrc === audios[1]) {
        trying.current.src = audios[2];
      } else if (currentSrc === audios[2]) {
        trying.current.src = audios[3];
      } else if (currentSrc === audios[3]) {
        trying.current.src = audios[4];
      } else if (currentSrc === audios[4]) {
        trying.current.src = audios[5];
      } else if (currentSrc === audios[5]) {
        trying.current.src = audios[6];
      }else {
        trying.current.src = audios[0]; // Возврат к первому треку
      }

      trying.current.play(); // Автоматически воспроизводим трек
    }
  };
  const back = () =>{
    if (trying.current) {
      const currentSrc = new URL(trying.current.src).pathname; // Корректно извлекаем текущий путь
      if (currentSrc === audios[0]) {
        trying.current.src = audios[6]; // Меняем источник
      } else if (currentSrc === audios[6]) {
        trying.current.src = audios[5];
      }
      else if (currentSrc === audios[5]) {
        trying.current.src = audios[4];
      }
      else if (currentSrc === audios[4]) {
        trying.current.src = audios[3];
      } else if (currentSrc === audios[3]) {
        trying.current.src = audios[2];
      } else if (currentSrc === audios[2]) {
        trying.current.src = audios[1];
      } else {
        trying.current.src = audios[0]; // Возврат к первому треку
      }
    }
  }
  console.log(audios);

  return (
    <div className="Body max-[1000px]:!w-full">
      <Img />
      <div id="first" className="w-full">
        <audio ref={trying} controls src={audios[0]} className="w-full"></audio>
        <div className="flex w-full justify-between items-center mt-[5%]">
          <button onClick={back}>Назад</button>
          <button onClick={play}>Вперед</button>
        </div>
      </div>
    </div>
  );
}

export default App;
