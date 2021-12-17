import { clicksCorrect } from "./arrsForClicks";

const correct = (b: MouseEvent): void => {
  for (let i = 0; i < clicksCorrect.length; i += 1) {
    if ((<HTMLElement>b.target).id === `${i}`) {
      const clicksCorrectt = JSON.parse(localStorage.getItem(`clicksCorrect`));
      if (!clicksCorrectt) {
        localStorage.setItem(`clicksCorrect`, JSON.stringify(clicksCorrect));
      }
      clicksCorrectt[i] += 1;
      localStorage.setItem(`clicksCorrect`, JSON.stringify(clicksCorrectt));
    }
  }
};
export default correct;
