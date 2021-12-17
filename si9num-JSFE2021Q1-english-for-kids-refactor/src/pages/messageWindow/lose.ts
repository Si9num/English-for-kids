import onNavigate from "../rout";
import { counter } from "../categoryPages/play/play";

const lose = (): void => {
  (<HTMLElement>document.querySelector(".lose")).style.visibility = "visible";
  const audio = new Audio();
  audio.src = `../../../../public/assets/audio/lose.mp3`;
  audio.play();
  const createElem: HTMLElement = document.querySelector(".lose");
  const elem = document.createElement("p");
  elem.innerHTML = `You lose with ${counter.length} mistakes. Lets try better!`;
  createElem.appendChild(elem);
  setTimeout(() => {
    onNavigate("/main");
    (<HTMLInputElement>document.querySelector(".toggle-check")).checked = true;
    (<HTMLElement>document.querySelector(".lose")).style.visibility = "hidden";
    elem.innerHTML = ``;
    counter.splice(0, counter.length);
  }, 8000);
};
export default lose;
