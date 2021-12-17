const reset = (): void => {
  document.body.addEventListener("click", (ev) => {
    if ((<HTMLElement>ev.target).classList.contains(`res-btn`)) {
      localStorage.clear();
      for (let i = 0; i < 64; i += 1) {
        let elem;
        const clicksCorrect = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ];
        elem = document.querySelector(`.click${i}`);
        elem.innerHTML = "";
        elem = document.querySelector(`.clickCorrect${i}`);
        elem.innerHTML = "";
        elem = document.querySelector(`.clickInCorrect${i}`);
        elem.innerHTML = "";
        elem = document.querySelector(`.clickMistakes${i}`);
        elem.innerHTML = "";
        localStorage.setItem(`clicks`, JSON.stringify(clicksCorrect));
        localStorage.setItem(`clicksInCorrect`, JSON.stringify(clicksCorrect));
        localStorage.setItem(`clicksCorrect`, JSON.stringify(clicksCorrect));
        localStorage.setItem(`clicksMistakes`, JSON.stringify(clicksCorrect));
      }
    }
  });
};
export default reset;
