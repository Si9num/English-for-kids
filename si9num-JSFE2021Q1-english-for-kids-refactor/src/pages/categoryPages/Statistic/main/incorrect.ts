import { clicksInCorrect } from "./arrsForClicks";

const incorrect = (b: MouseEvent): void => {
  for (let i = 0; i < clicksInCorrect.length; i += 1) {
    if ((<HTMLElement>b.target).id === `${i}`) {
      const clicksInCorrectt = JSON.parse(
        localStorage.getItem(`clicksInCorrect`)
      );
      if (!clicksInCorrectt) {
        localStorage.setItem(
          `clicksInCorrect`,
          JSON.stringify(clicksInCorrect)
        );
      }
      clicksInCorrectt[i] += 1;
      localStorage.setItem(`clicksInCorrect`, JSON.stringify(clicksInCorrectt));
    }
  }
};
export default incorrect;
