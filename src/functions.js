export function openTab(e) {
  let i, content, links;

  content = document.getElementsByClassName("tabcontent");
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  links = document.getElementsByClassName("tablink");
  for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
  }

  document.getElementById(e.target.textContent.split(' ')[0]).style.display = "flex";
  e.currentTarget.className += " active";
}