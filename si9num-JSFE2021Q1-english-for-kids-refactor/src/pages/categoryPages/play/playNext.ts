import { arrForCheckImg, counter } from "./play";
import win from "../../messageWindow/win";
import lose from "../../messageWindow/lose";
import { btnState } from "./controls";
import { success, fail } from "./checkAns";
import correct from "../Statistic/main/Correct";
import incorrect from "../Statistic/main/incorrect";
import mistakes from "../Statistic/main/mistakes";

const play = (): void => {
  document.body.addEventListener("click", (b) => {
    if ((<HTMLInputElement>document.querySelector(".toggle-check")).checked) {
      return;
    }

    if (
      !(<HTMLElement>b.target).classList.contains(`${arrForCheckImg[0]}`) &&
      (<HTMLElement>b.target).classList.contains(`card`) &&
      btnState.length !== 0
    ) {
      counter.push(1);

      const audio = new Audio();
      audio.src = `../../../../public/assets/audio/error.mp3`;
      audio.play();
      incorrect(b);
      fail();
    }
    if (
      (<HTMLElement>b.target).classList.contains(arrForCheckImg[0]) &&
      arrForCheckImg.length !== 0
    ) {
      for (let i = 0; i < 8; i += 1) {
        (<HTMLInputElement>(
          document.querySelector(`.plug-${arrForCheckImg[0]}`)
        )).style.visibility = "visible";
      }
      arrForCheckImg.shift();
      const audio = new Audio();
      audio.src = `../../../../public/assets/audio/correct.mp3`;
      audio.play();
      correct(b);

      setTimeout(() => {
        audio.src = `../../../../public/assets/audio/${arrForCheckImg[0]}.mp3`;
        audio.play();
      }, 1000);
      success();
      mistakes(b);
    }

    if (arrForCheckImg.length === 0) {
      arrForCheckImg.push("plug");
      (<HTMLElement>document.querySelector(".play-btn")).style.opacity = "1";
      (<HTMLElement>document.querySelector(".repeat-btn")).style.visibility =
        "hidden";
      for (let i = 0; i < 8; i += 1) {
        if (document.querySelectorAll(".plug")) {
          (<HTMLInputElement>(
            document.querySelectorAll(`.plug`)[i]
          )).style.visibility = "hidden";
        }
      }
      if (counter.length !== 0) {
        lose();
        btnState.splice(0, btnState.length);
        document.querySelector(".cat-row").innerHTML = "";
      } else {
        win();
        btnState.splice(0, btnState.length);
        document.querySelector(".cat-row").innerHTML = "";
      }
    }
  });
};
export default play;
