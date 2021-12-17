let coordX = 0;
const maxWidth = 1000;
const success = (): void => {
  const createElem: HTMLElement = document.querySelector(".cat-row");
  const elem = document.createElement("div");
  elem.className = "cat-success";
  createElem.appendChild(elem);
  const style = `${getComputedStyle(document.querySelector(".cat-row")).width}`;
  if (+style.slice(0, style.length - 2) > maxWidth) {
    (<HTMLElement>(
      document.querySelector(".cat-row")
    )).style.transform = `translateX(${(coordX -= 40)}px)`;
  }
};
const fail = (): void => {
  const createElem: HTMLElement = document.querySelector(".cat-row");
  const elem = document.createElement("div");
  elem.className = "cat-fail";
  createElem.appendChild(elem);
  const style = `${getComputedStyle(document.querySelector(".cat-row")).width}`;
  if (+style.slice(0, style.length - 2) > maxWidth) {
    (<HTMLElement>(
      document.querySelector(".cat-row")
    )).style.transform = `translateX(${(coordX -= 40)}px)`;
  }
};
export { success, fail };
