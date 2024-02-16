import bg from "./assets/dango-011.jpg";

const home = () => {
  const homePage = document.createElement('div');
  homePage.className = 'home df'; // 2 classes!

  const textBox = document.createElement('div');
  textBox.className = 'home__box';

  const imgBox = document.createElement('div');
  imgBox.className = 'home__box df df-c'; // 3 classes!

  const title = document.createElement('h2');
  title.className = 'home__box-t';
  title.textContent = 'Dango';

  const paragraph = document.createElement('p');
  paragraph.className = 'home__box-p';
  paragraph.textContent = 'Dango is a Japanese dumpling made from rice flour mixed with uruchi rice flour and glutinous rice flour. It is different from the method of making mochi, which is made after steaming glutinous rice. Dango is usually finished round shaped, three to five dango are often served on a skewer (skewered dango pieces called kushi-dango). Generally, dango comes under the category of wagashi, and is often served with green tea. It is eaten year-round, but the different varieties are traditionally eaten in given seasons.';

  const button = document.createElement('button');
  button.className = 'home__box-b';
  button.textContent = 'Order ONLINE';

  const img = new Image();
  img.className = 'div-img__img';
  img.src = bg;
  
  textBox.append(title, paragraph, button);
  imgBox.append(img);
  
  homePage.append(textBox, imgBox);

  return homePage;
};

export default home;

