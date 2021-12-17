import { arrForEmotionPage } from "./emotionCards";
import "../categoryPages.css";

const emotionPage = ` <div class="card-container">
${arrForEmotionPage.join("")}
</div`;
export default emotionPage;
