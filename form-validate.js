const inputName = document.getElementById('name');
const inputEmail = document.getElementById("email")
const inputPhone = document.getElementById('number')
const inputMessage = document.getElementById("message")

const form = document.getElementById('form');
const result = document.getElementById('result');


// Shows error on change
inputName.addEventListener('change',e=>{
    (validateForm('name'));    
})
inputEmail.addEventListener('change',e=>{
    (validateForm('email'));    
})
inputPhone.addEventListener('change',e=>{
    validateForm('phone');    
})
inputMessage.addEventListener('change',e=>{
    validateForm('message');    
})

// validation form on corresponding regex
function validateForm(x){
    switch(x){
        case 'name':
            showError( /^[a-zA-Z ]{2,30}$/.test(inputName.value.trim()) , 'name');
            break;
        case 'email':
            showError(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(inputEmail.value),'email');
            break;
        case 'phone':
            showError(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(inputPhone.value),'phone');
            break;
        case 'message':
            showError((inputMessage.value.trim()).length > 0,'message');
            break;
        default:
            validateForm('name');
            validateForm('email');
            validateForm('phone');
            validateForm('message');  
            break;          
    }

}

function showError(state , where){
    //error show div selecting
    const elem  = document.getElementById(`${where}error`)
    if(!state){
        
        if(elem.classList.contains('d-none')){
            elem.classList.remove('d-none');
        }
        validationFinished = false
    }else{
        if(!elem.classList.contains('d-none')){
            elem.classList.add('d-none')
        }

    }
}   


let validationFinished = false;

function sendemail(){
    //defaults set true if false on any it changes at showError fun
    validationFinished = true;
    validateForm()
    if(validationFinished){
    
    // var link = "mailto:jassymon114@gmail.com"
    //          + "?subject=" + encodeURIComponent(`Need to contact ${inputName.value}`)
    //          + "&body=" + encodeURIComponent(`Hi I am ${inputName.value}.I would like to connect to you. My Email ID is ${inputEmail.value} and my phone number is ${inputPhone.value}. I do have an message \n Message \n ${inputMessage.value}`);
        
    // window.location.href = link;
    }
}


form.addEventListener('submit', function(e) {
  

e.preventDefault();
  validationFinished = true;
  validateForm()
  if(validationFinished){
    
    this.submit();
  }
});