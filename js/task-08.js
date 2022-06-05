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
    for(const input of formInputs){
        person[input.getAttribute("name")] =input.value;
    }
    persons.push(person); 
    
    reset();
};
function reset() {
    for(const input of formInputs){
        input.value = "";
    }
    for(const person of persons){
        console.log(`Login: ${person.email}, Password: ${person.password}`);
    }

}
button.addEventListener("click", check);
// button.addEventListener("submit", reset);
