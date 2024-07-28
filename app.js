function scrolltoelement(id_element){
    document.getElementById(id_element).scrollIntoView(
        {
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        }
    );
}

window.addEventListener('scroll', function(){
    var header =  document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 90);    
    return true;
})

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
    document.getElementById('mobile-menu').classList.toggle('open');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.getElementById('send').addEventListener(
    "click",
    ()=> {
        if(ValidateEmail()){
            sleep(1400).then(() => {
            
                document.getElementById('sucess').classList.remove("none");
            
            });
        }
    },
  );


  const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function ValidateEmail() {
    var input = document.getElementById('email');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  
  }