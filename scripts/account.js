//Script for toggling profile edit tab
const profileEditable = document.querySelector(".profile-edit");
const pillsProfile = document.getElementById("v-pills-profile");
const editBtn = document.querySelector(".edit-btn");

editBtn.addEventListener("click", toggleEdittab);

function toggleEdittab() {
  profileEditable.classList.toggle("active");
  profileEditable.classList.toggle("show");
  pillsProfile.classList.toggle("active");
  pillsProfile.classList.toggle("show");
}

//SMS Verification count down timer
var mins = 2.99;

var secs = Math.floor(mins * 60);
function countdown() {
  setTimeout("Decrement()", 60);
}

function Decrement() {
  minutes = document.getElementById("minutes");
  seconds = document.getElementById("seconds");

  if (seconds < 59) {
    seconds.innerHTML = secs;
  } else {
    minutes.innerHTML = getminutes();
    seconds.innerHTML = getseconds();
  }

  if (mins < 1) {
    minutes.style.color = "red";
    seconds.style.color = "red";
  }

  if (mins < 0) {
    alert("time up");
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
  } else {
    secs--;
    setTimeout("Decrement()", 1000);
  }
}

function getminutes() {
  mins = Math.floor(secs / 60);
  return mins;
}

function getseconds() {
  return secs - Math.round(mins * 60);
}
//Script for SMS Verification input
const inputElements = [...document.querySelectorAll(".code-input")];

inputElements.forEach((ele, index) => {
  ele.addEventListener("keydown", (e) => {
    if (e.keyCode === 8 && e.target.value === "") inputElements[Math.max(0, index - 1)].focus();
  });
  ele.addEventListener("input", (e) => {
    const [first, ...rest] = e.target.value;
    e.target.value = first ?? "";
    if (index !== inputElements.length - 1 && first !== undefined) {
      inputElements[index + 1].focus();
      inputElements[index + 1].value = rest.join("");
      inputElements[index + 1].dispatchEvent(new Event("input"));
    }
  });
});

function onSubmit(e) {
  e.preventDefault();
  const code = [...document.querySelectorAll("input.code-input")]
    .filter(({ name }) => name)
    .map(({ value }) => value)
    .join("");
  console.log(code);
}
//Transaction pop ups
