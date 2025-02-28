const accountField = document.getElementById("account__field");
const pinField = document.getElementById("pin__field");
const loginBtn = document.getElementById("login__btn");
const errorMsg = document.getElementById("error__msg");

const userAccountNo = "11223344556";
const userPin = "1234";

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const accountNo = accountField.value;
  const pin = pinField.value;

  if (accountNo.length < 11) {
    errorMsg.innerText = "Account no must be of 11 digit.";
    errorMsg.parentNode.classList.remove("hidden");
    return;
  }

  if (accountNo !== userAccountNo) {
    errorMsg.innerText = "Invalid account no.";
    errorMsg.parentNode.classList.remove("hidden");
    return;
  }

  if (pin !== userPin) {
    errorMsg.innerText = "Invalid pin no.";
    errorMsg.parentNode.classList.remove("hidden");
    return;
  }

  window.location.href = "./index.html"; 
});

accountField.addEventListener("focus", function (event) {
  errorMsg.innerText = "";
  errorMsg.parentNode.classList.add("hidden");
});

pinField.addEventListener("focus", function (event) {
  errorMsg.innerText = "";
  errorMsg.parentNode.classList.add("hidden");
});
