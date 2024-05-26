const checkBoxList = document.querySelectorAll(".check-box");
const inputFields = document.querySelectorAll(".inputBox");
const errorlable = document.querySelector(".error-text");
const progressBar = document.querySelector(".progress-bar");
checkBoxList.forEach((checkBox) => {
  // console.log(checkBox);
  checkBox.addEventListener("click", (e) => {
    const allGoalAdd = [...inputFields].every((input) => {
      return input.value;
    });
    if (allGoalAdd) {
      checkBox.parentElement.classList.toggle("completed");
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-error");
  });
});
