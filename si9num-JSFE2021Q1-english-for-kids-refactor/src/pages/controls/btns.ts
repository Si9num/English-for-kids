const btns = (): void => {
  if ((<HTMLInputElement>document.querySelector(".toggle-check")).checked) {
    document.querySelector(".cat-row").innerHTML = "";

    document.querySelector(".cat-row").innerHTML = "";
    (<HTMLInputElement>document.querySelector(".btn-cont")).style.transform =
      "scale(0)";
    (<HTMLInputElement>(
      document.querySelector(".btn-cont")
    )).style.transitionDelay = ".3s";
    (<HTMLInputElement>document.querySelector(".btn-cont")).style.visibility =
      "hidden";
    for (let i = 0; i < 8; i += 1) {
      (<HTMLInputElement>(
        document.querySelectorAll(".front img")[i]
      )).style.transition = ".3s";
      (<HTMLInputElement>(
        document.querySelectorAll(".front img")[i]
      )).style.height = "80%";
      (<HTMLInputElement>(
        document.querySelectorAll(".front p")[i]
      )).style.transform = "scale(1)";
      (<HTMLInputElement>(
        document.querySelectorAll(".rotate")[i]
      )).style.transform = "scale(1)";
    }
  } else {
    (<HTMLInputElement>document.querySelector(".btn-cont")).style.transform =
      "scale(1)";
    (<HTMLInputElement>(
      document.querySelector(".btn-cont")
    )).style.transitionDuration = ".3s";
    (<HTMLInputElement>document.querySelector(".btn-cont")).style.visibility =
      "visible";
    for (let i = 0; i < 8; i += 1) {
      (<HTMLInputElement>(
        document.querySelectorAll(".front img")[i]
      )).style.transition = ".3s";
      (<HTMLInputElement>(
        document.querySelectorAll(".front img")[i]
      )).style.height = "100%";
      (<HTMLInputElement>(
        document.querySelectorAll(".front p")[i]
      )).style.transform = "scale(0)";
      (<HTMLInputElement>(
        document.querySelectorAll(".rotate")[i]
      )).style.transform = "scale(0)";
    }
  }
};
export default btns;
