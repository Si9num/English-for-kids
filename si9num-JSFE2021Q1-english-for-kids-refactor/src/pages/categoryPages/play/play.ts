const arrForCheckImg: string[] = ["a"];
const counter: number[] = [];
const playStart = (): void => {
  document.body.addEventListener("click", (ev) => {
    if ((<HTMLElement>ev.target).classList.contains(`play-btn`)) {
      arrForCheckImg.splice(0, arrForCheckImg.length);
      for (let i = 0; i < 8; i += 1) {
        arrForCheckImg.push(
          document
            .querySelectorAll(".front img")
            [i].getAttribute("class")
            .substr(
              0,
              document.querySelectorAll(".front img")[i].getAttribute("class")
                .length - 5
            )
        );
      }
      arrForCheckImg.sort(() => Math.floor(Math.random() - 0.5));
      const audio = new Audio();
      audio.src = `../../../../public/assets/audio/${arrForCheckImg[0]}.mp3`;
      audio.play();
      const plug = ():void => {
        document.body.addEventListener("click", () => {
          if (
            (<HTMLInputElement>document.querySelector(".toggle-check")).checked
          ) {
            for (let i = 0; i < 8; i += 1) {
              if (document.querySelector(`.plug`)) {
                (<HTMLInputElement>(
                  document.querySelectorAll(`.plug`)[i]
                )).style.visibility = "hidden";
              }
            }
          }
        });
      };
      plug();
    }
  });
};

export { playStart, arrForCheckImg, counter };
