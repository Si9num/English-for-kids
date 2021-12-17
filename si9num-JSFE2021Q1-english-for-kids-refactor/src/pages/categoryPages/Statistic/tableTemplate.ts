import {
  arrForName as body,
  arrForNameRus as bodR,
} from "../BodyParts/arrsForDataBod";
import {
  arrForName as actA,
  arrForNameRus as actAR,
} from "../ActionA/arrsForDataActA";
import {
  arrForName as actb,
  arrForNameRus as actBR,
} from "../ActionB/arrsForDataActB";
import {
  arrForName as anA,
  arrForNameRus as anAR,
} from "../AnimalA/arrsForDataAnA";
import {
  arrForName as anB,
  arrForNameRus as anBR,
} from "../AnimalB/arrsForDataAnB";
import {
  arrForName as appl,
  arrForNameRus as applR,
} from "../Appliance/arrsForDataAppl";
import {
  arrForName as clot,
  arrForNameRus as clotR,
} from "../Clothes/arrsForDataClot";
import {
  arrForName as emot,
  arrForNameRus as emotR,
} from "../Emotion/arrsForDataEmot";
import arrForCateg from "./arrForCat";

const arrForName = actA.concat(actb, appl, body, anA, anB, clot, emot);
const arrForNameRu = actAR.concat(actBR, applR, bodR, anAR, anBR, clotR, emotR);

const arrForTable: string[] = [];
for (let i = 0; i < arrForName.length; i += 1) {
  let elem = `<tr>
  <td>${arrForCateg[i]}</td>
  <td>${arrForName[i]}</td>
  <td>${arrForNameRu[i]}</td>
  <td class="click${i}"></td>
  <td class="clickCorrect${i}"></td>
  <td class="clickInCorrect${i}"></td>
  <td class="clickMistakes${i}"></td>
</tr>`;
  if (i % 2 !== 0) {
    elem = `<tr class="tr-color">
  <td>${arrForCateg[i]}</td>
  <td>${arrForName[i]}</td>
  <td>${arrForNameRu[i]}</td>
  <td class="click${i}"></td>
  <td class="clickCorrect${i}"></td>
  <td class="clickInCorrect${i}"></td>
  <td class="clickMistakes${i}"></td>
</tr>`;
  }
  arrForTable.push(elem);
}
export default arrForTable;
