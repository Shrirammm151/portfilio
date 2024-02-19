/*===============  toggle icon navbar ===============  */
let menuIcon  = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===============  scroll secton active link ====================*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.console = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    /*============ stiky navbar =========================*/

        let header = document.querySelector('header');

        header.classList.toggle('stickty', window.scrollY > 100);

        /*===============  remove toggle icon navbar when links will open ===============  */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

                /*============ scroll revel =========================*/

                ScrollReveal({ 
                    // reset: true,
                    distance: '80px',
                    duartion: 2000,
                    delay: 200
            
                 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box .input-box',
{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',
{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',
{ origin: 'right'});


/*============ typed =========================*/

const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','','',],
    typeSpeed: 100,
    backSpeed: 100,
    backdelay: 1000,
    loop: true
});





