export const changeRowColorViol = (): void => {
  for (let i = 0; i < 33; i += 1) {
    (<HTMLElement>document.querySelectorAll(".tr-color")[i]).style.background =
      "linear-gradient(180deg, #240424c7, #b40bc4)";
  }
};
export const changeBtnColorViol = (): void => {
  (<HTMLElement>document.querySelector(".btn-prev")).style.background =
    "linear-gradient(180deg, #240424c7, #b40bc4)";
  (<HTMLElement>document.querySelector(".btn-next")).style.background =
    "linear-gradient(180deg, #240424c7, #b40bc4)";
  (<HTMLElement>document.querySelector(".res-btn")).style.background =
    "linear-gradient(180deg, #240424c7, #b40bc4)";
};
export const changeRowColorBlue = (): void => {
  for (let i = 0; i < 33; i += 1) {
    (<HTMLElement>document.querySelectorAll(".tr-color")[i]).style.background =
      " linear-gradient(180deg, #0d0441c7, #3d0eeb)";
  }
};
export const changeBtnColorBlue = (): void => {
  (<HTMLElement>document.querySelector(".btn-prev")).style.background =
    " linear-gradient(180deg, #0d0441c7, #3d0eeb)";
  (<HTMLElement>document.querySelector(".btn-next")).style.background =
    " linear-gradient(180deg, #0d0441c7, #3d0eeb)";
  (<HTMLElement>document.querySelector(".res-btn")).style.background =
    " linear-gradient(180deg, #0d0441c7, #3d0eeb)";
};
