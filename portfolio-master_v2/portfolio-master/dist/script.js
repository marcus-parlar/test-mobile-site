// SCROLL TO TOP

const scrollTop = document.querySelector("#scroll-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    if (!scrollTop.classList.contains("btnEntrance")) {
      scrollTop.classList.remove("btnExit");
      scrollTop.classList.add("btnEntrance");
      // @ts-ignore
      scrollTop.style.display = "block";
    }
  } else {
    if (scrollTop.classList.contains("btnEntrance")) {
      scrollTop.classList.remove("btnEntrance");
      scrollTop.classList.add("btnExit");
      setTimeout(() => {
        // @ts-ignore
        scrollTop.style.display = "none";
      }, 250);
    }
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});