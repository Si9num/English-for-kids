const burger = (): void => {
  document.body.addEventListener("click", (ev) => {
    if (
      (<HTMLElement>ev.target).classList.contains("list-img") &&
      !(<HTMLElement>ev.target).classList.contains("close")
    ) {
      (<HTMLElement>document.querySelector(".list")).style.transition = ".5s";
      (<HTMLElement>document.querySelector(".list")).style.transform =
        "translateX(0%)";
      (<HTMLElement>document.querySelector(".list-img")).classList.add("close");
    } else if (!(<HTMLElement>ev.target).classList.contains("list")) {
      (<HTMLElement>document.querySelector(".list")).style.transform =
        "translateX(-100%)";
      (<HTMLElement>document.querySelector(".list-img")).classList.remove(
        "close"
      );
    }
  });
};

export default burger;
