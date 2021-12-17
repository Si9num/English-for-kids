import { arrForAnimalAPage } from "./animalACards";
import "../categoryPages.css";

const animalAPage = ` <div class="card-container">
${arrForAnimalAPage.join("")}
</div`;
export default animalAPage;
