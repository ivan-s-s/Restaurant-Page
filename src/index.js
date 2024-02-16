import { openTab } from "./functions";
import home from "./home";
import menu from "./menu";
import about from "./about";

const content = document.querySelector('#content');

document.querySelectorAll(".navBtn").forEach((element) =>
  element.addEventListener("click", () => {
    const tabContent = element.textContent;
    switch (tabContent) {
      case "Menu":
        content.textContent = "";
        content.append(menu());
        const addBtnsListeners = document.querySelectorAll('.tablink');
        addBtnsListeners.forEach((btn) => btn.onclick = openTab);
        break;
      case "About":
        content.textContent = "";
        content.append(about());
        break;
      default:
        content.textContent = "";
        content.append(home());
        break;
    }
  })
);

document.querySelector('#content').append(home());