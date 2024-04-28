const sizeBtn = document.getElementById("sizeBtn");

sizeBtn.addEventListener("click", function () {
  const scrWidth = window.screen.width;
  const scrHeight = window.screen.height;
  const inWidth = window.innerWidth;
  const inHeight = window.innerHeight;
  const clWidth = document.documentElement.clientWidth;
  const clHeight = document.documentElement.clientHeight;
  alert(
    `Ширина экрана: ${scrWidth} пикселей\nВысота экрана: ${scrHeight} пикселей\nШирина области просмотра, включая скролл: ${inWidth} пикселей\nВысота области просмотра, включая скролл: ${inHeight} пикселей\nШирина области просмотра: ${clWidth} пикселей\nВысота области просмотра: ${clHeight} пикселей`
  );
});
