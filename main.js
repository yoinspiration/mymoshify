
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const collapsibleChevron = collapsible.querySelector(".collapsible__chevron");

  collapsibleChevron.addEventListener("click", function () {
    collapsible.classList.toggle("collapsible--expanded");
  });
});