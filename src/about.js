const about = () => {
  const aboutPage = document.createElement("div");
  aboutPage.innerHTML = `<address>
  Written by <a href="https://github.com/ivan-s-s">Ivan S</a>.
  <br>Visit us at: Example.com<br>
  Street Box 564, Dangoland<br>
  Serbia, Beograd
  </address>`;

  return aboutPage;
}

export default about;