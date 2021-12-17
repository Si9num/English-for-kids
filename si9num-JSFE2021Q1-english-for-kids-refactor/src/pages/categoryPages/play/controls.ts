import { arrForCheckImg } from "./play";

const btnState: number[] = [];
const btnControl = (): void => {
  document.body.addEventListener("click", (ev) => {
    if ((<HTMLElement>ev.target).classList.contains(`play-btn`)) {
      (<HTMLElement>document.querySelector(".play-btn")).style.opacity = "0";
      (<HTMLElement>document.querySelector(".play-btn")).style.visibility =
        "hidden";
      (<HTMLElement>document.querySelector(".repeat-btn")).style.visibility =
        "visible";
      btnState.push(1);
    }
  });
};

const repBtn = (): void => {
  document.body.addEventListener("click", (ev) => {
    if (
      (<HTMLElement>ev.target).classList.contains(`repeat-btn`) ||
      (<HTMLElement>ev.target).classList.contains(`repeat-btn-play`)
    ) {
      const audio = new Audio();
      audio.src = `../../../../public/assets/audio/${arrForCheckImg[0]}.mp3`;
      audio.play();
    }
  });
};
export { btnControl, repBtn, btnState };
