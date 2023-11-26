function toggleMode() {
  // altera o botão de modo dark
  const html = document.documentElement
  /*
  if(html.classList.contains("light")) {
    html.classList.remove("light")
  }else {
    html.classList.add("light")
  }*/
  html.classList.toggle("light")

  //troca de imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/downloadlight.jpg")
  } else {
    img.setAttribute("src", "./assets/downloaddark.jpg")
  }
  const altText = html.classList.contains("light")
    ? "Doguinho caramelo"
    : "Doguinho branco"
  img.setAttribute("alt", altText)
}
