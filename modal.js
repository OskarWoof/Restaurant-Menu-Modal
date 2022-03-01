
/*=============== MODAL ===============*/
// Get Modal
var modal = document.getElementById("myModal");
// Get Button
var btn = document.getElementById("modalBtn");
// get element that closes the modal
var modClose = document.getElementsByClassName("mod__close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

modClose.onclick = function () {
  modal.style.display = "none";
};

// When click anywhere
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
