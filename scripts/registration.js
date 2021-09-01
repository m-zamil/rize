//Registration form tabs

// const handleSubmit = function handleSubmit(event) {
// event.preventDefault();
// };

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("form__tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("nextBtn").innerHTML = "استمرار";
    document.getElementById("nextBtn").classList.add("w-100");
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("nextBtn").innerHTML = "تأكيد";
    document.getElementById("prevBtn").style.display = "inline-block";
    document.getElementById("nextBtn").classList.remove("w-100");
  }

  var btnTab = document.querySelectorAll(".btn-card");
  var m = n;
  if (m > 0) {
    btnTab[m - 1].classList.add("visited");
    btnTab[m - 1].innerHTML = "";
  } else null;
  btnTab[m].classList.add("active");
  x[n].className += " active";
}

function nextPrev(n) {
  var x = document.getElementsByClassName("form__tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("registration").submit();
    return false;
  }

  showTab(currentTab);
}

function validateForm() {
  var x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("form__tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "" && y[i].hasAttribute("required")) {
      y[i].className += " invalid";
      valid = false;
    }
  }
  return valid;
}
