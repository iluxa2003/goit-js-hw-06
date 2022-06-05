const input = document.querySelector('#validation-input');
const  check = event => {
    if(input.value.length < input.getAttribute("data-length")){
        if(input.classList.contains("valid")){
            input.classList.replace("valid","invalid")
        }else{
            input.classList.add("invalid");
        }
        
    }else if(input.value.length >= input.getAttribute("data-length")){
        if(input.classList.contains("invalid")){
            input.classList.replace("invalid","valid")
        }else{
            input.classList.add("valid");
        }
        
    }
  };
  input.addEventListener("blur",check)