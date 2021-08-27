//Investment form tabs

function handleSubmit(event) {
  event.preventDefault();
}

var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("form__tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("nextBtn").innerHTML = "تأكيد العملية";
  } else {
    document.getElementById("nextBtn").innerHTML = "تأكيد";
  }
  if (n == x.length - 1) {
    var submitBtn = document.getElementById("nextBtn");
    submitBtn.setAttribute("type", "submit");
    document.getElementById("investedAmount").addEventListener("submit", handleSubmit);
  } else {
    document.getElementById("nextBtn").setAttribute("type", "button");
  }
  var btnTab = document.querySelectorAll(".btn-card");
  var m = n;
  if (m > 0) {
    btnTab[m - 1].classList.add("visited");
    btnTab[m - 1].innerHTML = "";
  } else null;
  btnTab[m].classList.add("active");
  x[n].className += " active";
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("form__tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    var modal = document.getElementById("myModal");
    var body = document.querySelector(".body-wrapper");

    var btn = document.getElementById("myBtn");

    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "flex";
    body.style.display = "none";

    span.onclick = function () {
      modal.style.display = "none";
      body.style.display = "block";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
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
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");

  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
}
