import "./stat.css";
import arrForTable from "./tableTemplate";

const table = `<div class='btn-res'>
  <button class="res-btn">Reset</button>
  </div>
  <div class="table-container">
<table class="table">
  <tr class="tr-color tr-color-head">
    <td>Сategories</td>
    <td>Words</td>
    <td>Translation</td>
    <td>Clicks</td>
    <td>Correct</td>
    <td>Mistakes</td>
    <td>%</td>
  </tr>
  ${arrForTable.join("")}
</table>
</div>
<div class="btn-container">
<button class="btn-prev">Prev</button>
<button class="btn-next">Next</button>
</div>`;

export default table;
