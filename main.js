
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  const toggle = collapsible.querySelector(".collapsible__chevron, .nav__toggler");

  toggle.addEventListener("click", function () {
    collapsible.classList.toggle("collapsible--expanded");
  });
});