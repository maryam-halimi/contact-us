  

const $ = document; 
const form = $.getElementById("container") 
const firstNameInput = $.getElementById("first-name-input"); 
const lastNameInput = $.getElementById("last-name-input"); 
const emailInput = $.getElementById("mail-address"); 
const radios = $.getElementsByName("g-en"); 
const borderOfRadio = $.getElementById("radio");
const borderOfRadios = $.getElementById("radios");
const textAreaInput = $.getElementById("textarea"); 
const checkBoxInput =$.getElementById("check-box");
const firstNameInputErrorMessage = $.getElementById("error1"); 
const lastNameInputErrorMessage = $.getElementById("error2"); 
const emailInputErrorMessage = $.getElementById("error3"); 
const radiosError = $.getElementById("error4"); 
const textAreaErrorInput = $.getElementById("error5");
const checkBoxError=$.getElementById("error6"); 
const successModal = $.getElementById("success") 
 
// check first name input  
function checkFirstName(value) { 
  if (!value.trim()) { 
    firstNameInputErrorMessage.style.display = "block"; 
    firstNameInput.style.border= "1px solid #d73c3c";
    return false; 
  } 
  
  firstNameInputErrorMessage.style.display = "none"
  firstNameInput.style.border= "1px solid #87a3a6";

  return true; 
}; 
function checkTextArea(value){
  if(!value.trim()) {
    textAreaErrorInput.style.display= "block";
    textAreaInput.style.border= "1px solid #d73c3c";
    return false;
  }
  textAreaErrorInput.style.display="none";
  textAreaInput.style.border= "1px solid  #87a3a6";

  return true;
};
// radios.addEventListener("click", colorRadioInput )
// function colorRadioInput(radio){
//   borderOfRadio.style.backgroundColor="#8fbc8f";
// }



const validateRadios = () => {
  let isValid = false;
  for (const radio of radios) {
    if (radio.checked) {

      isValid = true;
      radiosError.style.display ="none";
    borderOfRadio.style.border ="1px solid #87a3a6";
    borderOfRadios.style.border ="1px solid #87a3a6";


      break;
    }
  }
  if (!isValid) {
    // Show an error message or alert
    // alert('Please select an option');
    radiosError.style.display = "block";
    borderOfRadio.style.border ="1px solid #d73c3c";
    borderOfRadios.style.border ="1px solid #d73c3c";
  }
  return isValid;
};
// check last name input 
function checkLastName(value) { 
  if (!value.trim()) { 
    lastNameInputErrorMessage.style.display = "block"; 
    lastNameInput.style.border= "1px solid #d73c3c";
    return false; 
  } 
 
  lastNameInputErrorMessage.style.display = "none"
  lastNameInput.style.border= "1px solid #87a3a6";

  return true; 
}; 
function checkBox(value){
  if (checkBoxInput.checked){
    checkBoxError.style.display="none";
    return true;
  }
  checkBoxError.style.display="block";
  return false;

}
 
function checkEmail(email) { 
  const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/); 
  if (!email.trim()) { 
    emailInputErrorMessage.style.display = "block" 
    emailInputErrorMessage.innerHTML = "email is required"; 
    emailInput.style.border= "1px solid #d73c3c";
    return false; 
  } else if (!emailRegex.test(email)) { 
    emailInput.style.border= "1px solid #d73c3c";
    emailInputErrorMessage.style.display = "block";
    emailInputErrorMessage.innerHTML = "email not valid"; 
    return false; 
  }; 
 
  // if ok => none error and return true 
  emailInputErrorMessage.style.display = "none"; 
  emailInput.style.border= "1px solid #87a3a6";

  return true; 
} 
  

 
// handle submit  
form.addEventListener('submit', (e) => { 
  e.preventDefault(); 
  const isFirstNameValid = checkFirstName(firstNameInput.value); 
  const isLastNameValid = checkLastName(lastNameInput.value); 
  const isEmail = checkEmail(emailInput.value); 
  const isTextAreaValid = checkTextArea(textAreaInput.value);
  const isCheckBox = checkBox(textAreaInput.checked);
  const isRadios  = validateRadios(radios.checked); 
 
 
  if (isFirstNameValid && isLastNameValid && isEmail && isTextAreaValid && isCheckBox && isRadios) { 
    const formValues = { firstName: firstNameInput.value, lastName: lastNameInput.value,
       email: emailInput.value , textArea:textAreaInput.value , checkBox:checkBoxInput.checked , radios:radios.checked }; 
    console.log("form submit success and ok => ", formValues); 
    // show success modal 
    successModal.style.display = "block"; 
  } else { 
    // show form submit error 
    successModal.style.display = "none"; 
    // alert("form not valid") 
  } 
});