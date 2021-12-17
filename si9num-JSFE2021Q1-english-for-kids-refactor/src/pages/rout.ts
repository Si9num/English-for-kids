import header from "./header";
import mainPage from "./mainPage/mainPage";
import bodyPage from "./categoryPages/BodyParts/body";
import actionAPage from "./categoryPages/ActionA/actionA";
import actionBPage from "./categoryPages/ActionB/actionB";
import animalAPage from "./categoryPages/AnimalA/animalA";
import animalBPage from "./categoryPages/AnimalB/animalB";
import appliancePage from "./categoryPages/Appliance/appliance";
import clothesPage from "./categoryPages/Clothes/clothes";
import emotionPage from "./categoryPages/Emotion/emotion";
import table from "./categoryPages/Statistic/table";

const createElem: HTMLElement = document.getElementById("app");
const elem = document.createElement("div");
elem.innerHTML = header;
createElem.appendChild(elem);
interface Iroutes {
  [index: string]: string;
}

const routes: Iroutes = {
  "/main": mainPage,
  "/bodyParts": bodyPage,
  "/actionAPage": actionAPage,
  "/actionBPage": actionBPage,
  "/animalAPage": animalAPage,
  "/animalBPage": animalBPage,
  "/appliancePage": appliancePage,
  "/clothesPage": clothesPage,
  "/emotionPage": emotionPage,
  "/statistic": table,
};
const rootDiv = document.querySelector("#main");
rootDiv.innerHTML = routes["/main"];

function onNavigate(pathname: string):void {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
}
window.onpopstate = ():void => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

document.body.addEventListener("click", (ev) => {
  if ((<HTMLElement>ev.target).classList.contains("parts")) {
    onNavigate("/bodyParts");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(260px)";
    document.querySelector(".cat-row").innerHTML = "";
  }
  if ((<HTMLElement>ev.target).classList.contains("mainPage")) {
    onNavigate("/main");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(0px)";
    document.querySelector(".cat-row").innerHTML = "";
  }
  if ((<HTMLElement>ev.target).classList.contains("ActionA")) {
    onNavigate("/actionAPage");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(60px)";
    document.querySelector(".cat-row").innerHTML = "";
  }
  if ((<HTMLElement>ev.target).classList.contains("ActionB")) {
    onNavigate("/actionBPage");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(120px)";
    document.querySelector(".cat-row").innerHTML = "";
  }
  if ((<HTMLElement>ev.target).classList.contains("AnimalA")) {
    onNavigate("/animalAPage");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(320px)";
    document.querySelector(".cat-row").innerHTML = "";
  }
  if ((<HTMLElement>ev.target).classList.contains("AnimalB")) {
    onNavigate("/animalBPage");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(380px)";
    document.querySelector(".cat-row").innerHTML = "";
  }
  if ((<HTMLElement>ev.target).classList.contains("Appliances")) {
    onNavigate("/appliancePage");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(190px)";
    document.querySelector(".cat-row").innerHTML = "";
  }
  if ((<HTMLElement>ev.target).classList.contains("Clothes")) {
    onNavigate("/clothesPage");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(450px)";
    document.querySelector(".cat-row").innerHTML = "";
  }
  if ((<HTMLElement>ev.target).classList.contains("Emotions")) {
    onNavigate("/emotionPage");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(520px)";
    document.querySelector(".cat-row").innerHTML = "";
  }
  if ((<HTMLElement>ev.target).classList.contains("Statistic")) {
    onNavigate("/statistic");
    (<HTMLElement>document.querySelector(".line")).style.transform =
      "translateY(580px)";
    const checkClick = JSON.parse(localStorage.getItem(`clicks`));
    const checkCor = JSON.parse(localStorage.getItem(`clicksCorrect`));
    const checkInCor = JSON.parse(localStorage.getItem(`clicksInCorrect`));
    const checkMist = JSON.parse(localStorage.getItem(`clicksMistakes`));
    let createElema: HTMLElement;
    let elema;
    for (let i = 0; i < 64; i += 1) {
      if (checkClick) {
        createElema = document.querySelector(`.click${i}`);
        elema = document.createElement("p");
        elema.innerHTML = `${JSON.parse(localStorage.getItem(`clicks`))[i]}`;
        createElema.appendChild(elema);
      }
      if (checkCor) {
        createElema = document.querySelector(`.clickCorrect${i}`);
        elema = document.createElement("p");
        elema.innerHTML = `${
          JSON.parse(localStorage.getItem(`clicksCorrect`))[i]
        }`;
        createElema.appendChild(elema);
      }

      if (checkInCor) {
        createElema = document.querySelector(`.clickInCorrect${i}`);
        elema = document.createElement("p");
        elema.innerHTML = `${
          JSON.parse(localStorage.getItem(`clicksInCorrect`))[i]
        }`;
        createElema.appendChild(elema);
      }
      if (checkMist) {
        createElema = document.querySelector(`.clickMistakes${i}`);
        elema = document.createElement("p");
        elema.innerHTML = `${
          JSON.parse(localStorage.getItem(`clicksMistakes`))[i]
        }`;
        createElema.appendChild(elema);
      }
    }

    document.querySelector(".cat-row").innerHTML = "";
  }
});

export default onNavigate;
