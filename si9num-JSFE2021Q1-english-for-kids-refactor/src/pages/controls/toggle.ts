import {
  changeBtnColorBlue,
  changeBtnColorViol,
  changeRowColorBlue,
  changeRowColorViol,
} from "../categoryPages/Statistic/tableCangeCol";
import btns from "./btns";

const toggle = (): void => {
  document.body.addEventListener("click", () => {
    if ((<HTMLInputElement>document.querySelector(".toggle-check")).checked) {
      if (document.querySelector(".btn-next")) {
        changeBtnColorViol();
        changeRowColorViol();
      }

      (<HTMLElement>document.querySelector(".list")).style.background =
        "linear-gradient(180deg, #240424c7, #b40bc4)";
      (<HTMLElement>document.querySelector(".status-play")).style.visibility =
        "hidden";
      (<HTMLElement>document.querySelector(".status")).style.visibility =
        "visible";
      if (document.querySelector(".play-btn")) {
        (<HTMLElement>document.querySelector(".play-btn")).style.opacity = "1";
        (<HTMLElement>document.querySelector(".play-btn")).style.visibility =
          "visible";
        (<HTMLElement>document.querySelector(".repeat-btn")).style.visibility =
          "hidden";
        (<HTMLElement>document.querySelector(".repeat-btn")).style.visibility =
          "hidden";
      }
      for (let i = 0; i < 8; i += 1) {
        if (document.querySelector(".category-card")) {
          (<HTMLElement>(
            document.querySelectorAll(".category-card")[i]
          )).style.transition = ".3s";
          (<HTMLElement>(
            document.querySelectorAll(".category-card")[i]
          )).style.background =
            "linear-gradient(180deg, #240424c7, #b40bc4 40%, #fff 0, #fff)";
          (<HTMLElement>(
            document.querySelectorAll(".category-card")[i]
          )).style.opacity = "0.1";
          setTimeout(() => {
            (<HTMLElement>(
              document.querySelectorAll(".category-card")[i]
            )).style.opacity = "1";
          }, 300);
        }
      }
    } else {
      (<HTMLElement>document.querySelector(".status-play")).style.visibility =
        "visible";
      (<HTMLElement>document.querySelector(".status")).style.visibility =
        "hidden";
      (<HTMLElement>document.querySelector(".list")).style.background =
        "linear-gradient(180deg, #0d0441c7, #3d0eeb)";
      if (document.querySelector(".btn-next")) {
        changeBtnColorBlue();
        changeRowColorBlue();
      }
      for (let i = 0; i < 8; i += 1) {
        if (document.querySelector(".category-card")) {
          (<HTMLElement>(
            document.querySelectorAll(".category-card")[i]
          )).style.background =
            "linear-gradient(180deg, #0d0441c7, #3d0eeb 40%, #fff 0, #fff)";
        }
      }
    }
    if (document.querySelector(".btn-cont")) {
      btns();
    }
  });
};
export default toggle;
