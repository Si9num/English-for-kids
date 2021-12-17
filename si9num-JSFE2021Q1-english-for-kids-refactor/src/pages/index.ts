import burger from "./controls/burger";
import toggle from "./controls/toggle";
import train from "./categoryPages/train";
import audioParts from "./categoryPages/audioPart";
import { playStart } from "./categoryPages/play/play";
import play from "./categoryPages/play/playNext";
import "./rout";
import { btnControl, repBtn } from "./categoryPages/play/controls";
import btnControls from "./categoryPages/Statistic/tableControls";
import reset from "./categoryPages/Statistic/reset";

burger();
toggle();
train();
audioParts();
playStart();
play();
btnControl();
repBtn();
btnControls();
reset();

const checkCor = JSON.parse(localStorage.getItem(`clicksCorrect`));
if (!checkCor) {
  const clicksCorrect = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  localStorage.setItem(`clicks`, JSON.stringify(clicksCorrect));
  localStorage.setItem(`clicksInCorrect`, JSON.stringify(clicksCorrect));
  localStorage.setItem(`clicksCorrect`, JSON.stringify(clicksCorrect));
  localStorage.setItem(`clicksMistakes`, JSON.stringify(clicksCorrect));
}
