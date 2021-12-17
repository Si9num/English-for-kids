import onNavigate from "../rout";

const win = (): void => {
  (<HTMLElement>document.querySelector(".win")).style.visibility = "visible";
  const audio = new Audio();
  audio.src = `../../../../public/assets/audio/win.mp3`;
  audio.play();
  setTimeout(() => {
    onNavigate("/main");
    (<HTMLInputElement>document.querySelector(".toggle-check")).checked = true;
    (<HTMLElement>document.querySelector(".win")).style.visibility = "hidden";
  }, 4000);
};
export default win;
