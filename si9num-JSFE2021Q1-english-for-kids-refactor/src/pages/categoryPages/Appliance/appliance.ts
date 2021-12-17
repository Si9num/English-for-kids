import { arrForAppliancePage } from "./applianceCards";
import "../categoryPages.css";

const appliancePage = ` <div class="card-container">
${arrForAppliancePage.join("")}
</div`;
export default appliancePage;
