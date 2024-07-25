function scrolltoelement(id_element){
    document.getElementById(id_element).scrollIntoView(
        {
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        }
    );
    console.log(elmnt.offsetHeight)
}

window.addEventListener('scroll', function(){
    var header =  document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 90);    
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.getElementById('send').addEventListener(
    "click",
    ()=> {
        sleep(1400).then(() => {
            document.getElementById('sucess').classList.remove("none");
        });
    },
  );
