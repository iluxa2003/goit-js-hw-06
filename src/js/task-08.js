const form = document.querySelector(".login-form");
const formInputs = document.querySelectorAll("input");
const button = document.querySelector("button");
const firstInput = document.querySelector('input[type="email"]');
const secondInput = document.querySelector('input[type="password"]');
const persons = [];
const  check = event => {
    event.preventDefault();
    
    for(const key in formInputs){
        if(formInputs[key].value == ""){
            return alert("enter something in inputs");
        }
        
    }
    const person = {};
    person[firstInput.getAttribute("name")] = firstInput.value;
    person[secondInput.getAttribute("name")] = secondInput.value;

    persons.push(person); 
    reset();
};
function reset() {
    console.log(persons);
    firstInput.value = "";
    secondInput.value = "";
    // for(const key in formInputs){
    //     formInputs[key].value = "";
    // }
}
button.addEventListener("click", check);
// button.addEventListener("submit", reset);
