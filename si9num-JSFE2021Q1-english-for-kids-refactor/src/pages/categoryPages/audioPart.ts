import { arrForSound } from "./arrForImg";

const clicks = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
const audioParts = (): void => {
  document.body.addEventListener("click", (ev) => {
    if (!(<HTMLInputElement>document.querySelector(".toggle-check")).checked) {
      return;
    }

    for (let i = 0; i < arrForSound.length; i += 1) {
      if ((<HTMLElement>ev.target).classList.contains(`${arrForSound[i]}`)) {
        const audio = new Audio();
        audio.src = `../../../../public/assets/audio/${arrForSound[i]}.mp3`;
        audio.play();
      }
    }
    for (let i = 0; i < clicks.length; i += 1) {
      if ((<HTMLElement>ev.target).id === `${i}`) {
        const clickss = JSON.parse(localStorage.getItem(`clicks`));
        if (!clickss.length) {
          localStorage.setItem(`clicks`, JSON.stringify(clicks));
        } else {
          clickss[i] += 1;
          localStorage.setItem(`clicks`, JSON.stringify(clickss));
        }
      }
    }
  });
};
export default audioParts;
