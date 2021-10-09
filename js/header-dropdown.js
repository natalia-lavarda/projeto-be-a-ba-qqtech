const mostrarMes = () => {
  document.getElementById("header__menu-dropDown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".header__dropbtn")) {
    var dropdowns = document.getElementsByClassName("header__submenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};