import { DANGO_ARR, DANGO_OBJ } from "./data";

const menu = () => {
  const menuPage = document.createElement('div');
  menuPage.className = 'menu';

  const tabContainer = document.createElement('div');
  tabContainer.className = 'menu__tab-box df df-c'; // 3 classes

  for (let i = 0; i < DANGO_ARR.length; i++) {
    const tabBtn = document.createElement('button');
    tabBtn.className = 'tablink';

    if (DANGO_ARR[i] === DANGO_ARR[0]) {
      tabBtn.className = 'tablink active';
    }

    tabBtn.textContent = `${DANGO_ARR[i]} dango`;
    tabContainer.append(tabBtn);
  }

  menuPage.append(tabContainer);
  
  for (let i = 0; i < DANGO_OBJ.length; i++) {
    const tabcontent = document.createElement('div');
    tabcontent.className = 'tabcontent';
    tabcontent.id = `${DANGO_ARR[i]}`;

    const tabtitle = document.createElement('h3');
    tabtitle.className = 'tabcontent-title';
    tabtitle.textContent = `${DANGO_OBJ[i].title} dango`;
    
    const tabtext = document.createElement('p');
    tabtext.className = 'tabcontent-text';
    tabtext.textContent = DANGO_OBJ[i].text;

    const imgDiv = document.createElement('div');
    imgDiv.className = 'img-container';

    for (let y = 0; y < DANGO_OBJ[i].imgs.length; y++) {
      const picture = new Image();
      picture.src = DANGO_OBJ[i].imgs[y];
      picture.className = 'dancoImgTab';
      picture.setAttribute('alt', `${DANGO_OBJ[i]} dango`);
    
      imgDiv.append(picture);
    };

    if (DANGO_OBJ[i] === DANGO_OBJ[0]) {
      tabcontent.style.display = 'flex';
    } 

    tabcontent.append(tabtitle, tabtext, imgDiv);
    menuPage.append(tabcontent);
  };

  return menuPage;
}

export default menu;