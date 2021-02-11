const faqButton = document.querySelectorAll("#FAQ .fac-item .fac-button");
faqButton.forEach((button,index) => {
    button.addEventListener("click", (e) => {
         console.log();
        //  alert();
       const symbolBtn =  button.querySelector("span.symbol")
        symbolBtn.classList.toggle('minus-symbol')
    });
})
const navbar = document.querySelector('nav.navbar');
window.addEventListener('scroll', e => {
    if(pageYOffset > 500){
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
    console.log(window.pageYOffset);
})