window.onload = function () {
    let form = document.getElementById("member_form");
    form.onsubmit = validateForm;
    let resetButton = document.getElementById("reset");
    resetButton.onclick = clearErrors;
};
function validateForm(event) {
    console.log("Validate form was called.");
    clearErrors();
    if (!isValid()) {
        event.preventDefault();
    }
}
function clearErrors() {
    let spanElements = document.querySelectorAll("#member_form > fieldset > span");
    for (let index = 0; index < spanElements.length; index++) {
        spanElements[index].innerHTML = "*";
    }
}
function isValid() {
    let isDataValid = true;
    if (isCorporateSelected("corporate")) {
        isDataValid = true;
    }
    if (!validateRequiredElement("first_name", "First name required!")) {
        isDataValid = false;
    }
    if (!validateRequiredElement("last_name", "Last name required!")) {
        isDataValid = false;
    }
    let phone = document.getElementById("phone").value;
    if (!isPhoneNumber(phone)) {
        isDataValid = false;
        let phoneSpan = document.getElementById("phone").nextElementSibling;
        phoneSpan.innerText = "Phone must be a valid format!";
    }
    return isDataValid;
}
function isCorporateSelected() {
    let corpChecked = RadioNodeList.getElementById(corporate);
    if (RadioNodeList == ) {
    }
    return false;
}
function validateRequiredElement(elemID, errMsg) {
    let elem = document.getElementById(elemID);
    let elementValue = elem.value;
    if (elementValue.trim() == "") {
        let errorSpan = elem.nextElementSibling;
        errorSpan.innerText = errMsg;
        return false;
    }
    return true;
}
function isPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace("-", "").replace("(", "").replace(")", "").replace(" ", "");
    phoneNumber = phoneNumber.replace(/-|\(|\)|\s/g, "");
    let phonePattern = /^\d{10}$/g;
    if (phonePattern.test(phoneNumber)) {
        return true;
    }
    return false;
}
