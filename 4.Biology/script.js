const shrink_btn = document.querySelector(".shrink-btn");


function add_shrink(){
  document.body.classList.add("shrink")
  shrink_btn.classList.add("hide")
}

function remove_shrink(){
  document.body.classList.remove("shrink")
  shrink_btn.classList.remove("hide")
}

var dropdown = document.getElementsByClassName("dropdown");
var i;
var x = dropdown.length + 1
console.log(x)
for (i = 0; i < x; i++) {
  dropdown[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
