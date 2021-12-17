const train = (): void => {
  document.body.addEventListener("click", (ev) => {
    for (let i = 0; i < 8; i += 1) {
      if (document.querySelector(`.back${i} img`)) {
        document
          .querySelector(`.category-card-train${i}`)
          .addEventListener("mouseleave", () => {
            (<HTMLElement>(
              document.querySelector(`.front${i}`)
            )).style.transform = `rotateY(0deg)`;
            (<HTMLElement>(
              document.querySelector(`.back${i}`)
            )).style.transform = `rotateY(180deg)`;
          });
        if ((<HTMLElement>ev.target).classList.contains(`rotate${i}`)) {
          (<HTMLElement>(
            document.querySelector(`.front${i}`)
          )).style.transform = `rotateY(180deg)`;
          (<HTMLElement>(
            document.querySelector(`.back${i}`)
          )).style.transform = `rotateY(0deg)`;
        }
      }
    }
  });
};
export default train;
