const input = document.querySelector('#validation-input');
const  check = event => {
    if(input.value.length == input.getAttribute("data-length")){
        input.classList.remove("invalid")
        input.classList.add("valid");
    }else{
        input.classList.add("invalid");
        input.classList.remove("valid")
    }
  };
  input.addEventListener("blur",check)