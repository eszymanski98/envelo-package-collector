let collectBtn = document.querySelector(".collect__button");
let inputContainer = document.querySelector(".input__container");
let modalBtn = document.querySelector(".modal__button");
let modal = document.querySelector("#myModal");
let nextBtn = document.querySelector(".modal__next__button");
let restartBtn = document.querySelector(".modal__restart__button");
let collectCode = document.querySelector("#collectCode");
let phoneNum = document.querySelector("#phoneNum");

collectBtn.onclick = () => {
  inputContainer.classList.remove("hidden");
  collectBtn.classList.add("hidden");
  modalBtn.classList.remove("hidden");
};

modalBtn.addEventListener(
  "click",
  (checkValues = () => {
    if (phoneNum.value.length == 9 && collectCode.value.length == 4) {
      modal.style.display = "block";
      collectCode.style.border = "solid 1px black";
      phoneNum.style.border = "solid 1px black";
    } else {
      collectCode.style.border = "solid 1px red";
      phoneNum.style.border = "solid 1px red";
    }
    if (phoneNum.value.length < 9) {
      phoneNum.style.border = "solid 1px red";
    } else {
      phoneNum.style.border = "solid 1px black";
    }
    if (collectCode.value.length < 4) {
      collectCode.style.border = "solid 1px red";
    } else {
      collectCode.style.border = "solid 1px black";
    }
  })
);

nextBtn.onclick = () => {
  modal.style.display = "none";
};

restartBtn.onclick = () => {
  window.location.reload(true);
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
