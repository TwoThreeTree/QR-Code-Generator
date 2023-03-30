const wrapper = document.querySelector(".generatorWrapper");
const qrInput = document.querySelector(".form textarea");
const generateBtn = document.querySelector(".form button");
const qrImg = document.querySelector(".qr-code img");
const qrMes = document.querySelector(".qr-code p");
//const file = document.querySelector(".filebutoon");

//console.log(file.files[0]);
// const form = document.querySelector(".form");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  let displayError = document.querySelector(".error");
  //   document.querySelector(".qr-code").style.display = "inline";

  if (!qrValue) {
    (function () {
      displayError.innerHTML = "This can be empty";
      displayError.style.display = "inline";
    })(); //using auto calling anonymous function for fun
    return;
  } else {
    try {
      displayError.style.display = "none";
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
      // qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${file.files[0]}`;

      wrapper.classList.add("active");
    } catch (err) {
      document.querySelector(".qr-code p").innerHTML = " " + err.message;
    }
    //form.classList.add("active");
  }
});

//display "here's your code" after the qr code is generated"

qrInput.addEventListener("keyup", () => {
  let qrValue = qrInput.value;

  if (!qrValue) {
    wrapper.classList.remove("active");
    // document.querySelector(".qr-code").style.display = "none";
  }
});
