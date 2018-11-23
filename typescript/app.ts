
window.onload = function(){
    let form = document.getElementById("member_form");
    form.onsubmit = validateForm;

    let resetButton = document.getElementById("reset");
    resetButton.onclick = clearErrors;
}

function validateForm(event){
    console.log("Validate form was called.");

    clearErrors();

    if(!isValid()){
        //cancel form submission
        event.preventDefault();
    }
}

function clearErrors(){
    //find all <span> inside of the form
    let spanElements = document.querySelectorAll("#member_form > fieldset > span");

    for (let index  = 0; index < spanElements.length; index++) {
        spanElements[index].innerHTML = "*";
        
    }
}

function isValid():boolean{

    let isDataValid:boolean = true;

    if(isCorporateSelected("corporate")){
        //validate company name here
        isDataValid = true;
    }

    if(!validateRequiredElement("first_name", "First name required!")){
        isDataValid = false;
    }
    if(!validateRequiredElement("last_name", "Last name required!")){
        isDataValid = false;
    }
    /*
    if(!validateRequiredElement("phone", "Phone number required!")){
        isDataValid = false;
    }
    */
    let phone = (<HTMLInputElement>document.getElementById("phone")).value;
    if (!isPhoneNumber(phone)) {
        isDataValid = false;
        //display the error message
        let phoneSpan = <HTMLElement>document.getElementById("phone").nextElementSibling;
        phoneSpan.innerText = "Phone must be a valid format!";
    }
    return isDataValid;
}

function isCorporateSelected():boolean{
    let corpChecked = <HTMLInputElement>RadioNodeList.getElementById(corporate);
    if (RadioNodeList == ) {
        
    }
    return false;
}

/**
 * Finds an element by ID, and displays an error message
 * in the sibling <span> if there is no input or only
 * whitespace.
 * @param elemID The id of an HTML <input>
 * @param errMsg The message to display in the nextElementSibling
 * of the found elemID.
 * @returns false if element value is empty
 */
function validateRequiredElement(elemID:string, errMsg:string):boolean {
    let elem = <HTMLInputElement>document.getElementById(elemID);
    let elementValue: string = elem.value;
    if (elementValue.trim() == "") {
        let errorSpan: HTMLElement = <HTMLInputElement>elem.nextElementSibling;
        errorSpan.innerText = errMsg;
        return false;
    }
    return true;
}

function isPhoneNumber(phoneNumber:string){
    //method 1: string manipulation
    //strip out: parenthesis, dashes, spaces
    //phoneNumber.replace("-", "");
    //phoneNumber.replace("(", "");
    
    //method chaining example
    phoneNumber = phoneNumber.replace("-", "").replace("(", "").replace(")", "").replace(" ", "");

    //same as above, restated in regular expression
    phoneNumber = phoneNumber.replace(/-|\(|\)|\s/g, "");

    /*
    if (phoneNumber.length == 7 || phoneNumber.length == 10) {
        return true;
    }
    return false;
    */
   let phonePattern = /^\d{10}$/g;
   //checks number against pattern
   if (phonePattern.test(phoneNumber)) {
       return true;
   }
    return false;
}