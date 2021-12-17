import { arrForClothesPage } from "./clothesCards";
import "../categoryPages.css";

const clothesPage = ` <div class="card-container">
${arrForClothesPage.join("")}
</div`;
export default clothesPage;
