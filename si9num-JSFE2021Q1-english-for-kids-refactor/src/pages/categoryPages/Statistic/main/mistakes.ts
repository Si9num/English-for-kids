import { clicksMistakes } from "./arrsForClicks";

const mistakes = (b: MouseEvent): void => {
  for (let i = 0; i < clicksMistakes.length; i += 1) {
    if ((<HTMLElement>b.target).id === `${i}`) {
      const clicksMistakess = JSON.parse(
        localStorage.getItem(`clicksMistakes`)
      );
      if (!clicksMistakess) {
        localStorage.setItem(`clicksMistakes`, JSON.stringify(clicksMistakes));
      }
      const clear = JSON.parse(localStorage.getItem(`clicksCorrect`));
      const failed = JSON.parse(localStorage.getItem(`clicksInCorrect`));

      if (failed[i] !== 0) {
        clicksMistakess[i] += +(clear[i] / (failed[i] + clear[i])).toFixed(2);
      } else {
        clicksMistakess[i] += +(clear[i] / (1 + clear[i])).toFixed(2);
      }
      localStorage.setItem(`clicksMistakes`, JSON.stringify(clicksMistakess));
    }
  }
};
export default mistakes;
