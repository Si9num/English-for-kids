let coordY = 0;
const btnControls = (): void => {
  document.body.addEventListener("click", (ev) => {
    if ((<HTMLElement>ev.target).classList.contains(`btn-prev`)) {
      (<HTMLElement>(
        document.querySelector(".table")
      )).style.transform = `translateY(${(coordY += 730)}px)`;
    } else if ((<HTMLElement>ev.target).classList.contains(`btn-next`)) {
      (<HTMLElement>(
        document.querySelector(".table")
      )).style.transform = `translateY(${(coordY -= 730)}px)`;
    }
    if (coordY < -730 * 6) {
      (<HTMLElement>(
        document.querySelector(".table")
      )).style.transform = `translateY(${0}%)`;
      coordY = 0;
    }
    if (coordY > 0) {
      (<HTMLElement>(
        document.querySelector(".table")
      )).style.transform = `translateY(${0}%)`;
      coordY = 0;
    }
  });
};
export default btnControls;
