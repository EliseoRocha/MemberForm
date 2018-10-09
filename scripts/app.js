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
    if (!validateRequiredElement("first_name", "First name required!")) {
        isDataValid = false;
    }
    if (!validateRequiredElement("last_name", "Last name required!")) {
        isDataValid = false;
    }
    if (!validateRequiredElement("phone", "Phone number required!")) {
        isDataValid = false;
    }
    return isDataValid;
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
