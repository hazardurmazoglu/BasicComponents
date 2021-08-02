// Get modal element
var modal = document.getElementById("simpleModal");
//get open modal button
var modalBtn = document.getElementById("modalBtn");
//get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//Listen for open click

modalBtn.addEventListener("click", openModal);

//Listen for close click

closeBtn.addEventListener("click", closeModal);

//Listen for Outside click

window.addEventListener("click", clickOutside);

// Function to open modal
function openModal() {
  modal.style.display = "block";
}

//Function to close modal
function closeModal() {
  modal.style.display = "none";
}

//Function to close modal if outside click
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
