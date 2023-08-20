//=======================================================================================//
// Scroll Function
//=======================================================================================//

let hidden = document.querySelectorAll('.hidden');

let observer = new IntersectionObserver(entries=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
},
{
    threshold: 0.3
});

hidden.forEach(show=>{
    observer.observe(show);
});

//=======================================================================================//
// Appbox Menu
//=======================================================================================//

let appbox = document.getElementsByClassName('appbox')[0];
let appbox_a = document.getElementsByClassName('appbox_a')[0];
let appbox_dots = document.getElementsByClassName('appbox_dots');
let contact = document.getElementsByClassName('contact')[0];
let contactTriggerButton = document.getElementsByClassName('contact_trigger_button')[0];

appbox.addEventListener('click', () => {
    appbox_a.classList.toggle('appbox_a_display');
    for(let i = 0; i<appbox_dots.length; i++){
        appbox_dots[i].classList.toggle('appbox_dots_trigger');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && appbox_a.classList.contains('appbox_a_display') == true) {
        appbox_a.classList.remove('appbox_a_display');
    }
    if (window.scrollY > 0 && contact.classList.contains('contact_trigger') == true) {
        contact.classList.remove('contact_trigger');
    }
    if (window.scrollY > 0 && appbox_dots[0].classList.contains('appbox_dots_trigger') == true) {
        for(let i = 0; i<appbox_dots.length; i++){
            appbox_dots[i].classList.toggle('appbox_dots_trigger');
        }
    }
});

contactTriggerButton.addEventListener('click', (event) => {
    contact.classList.toggle('contact_trigger');
    event.preventDefault();
});

contact.style.left = `${((window.innerWidth - contact.clientWidth)/2)/16}rem`

//=======================================================================================//
// Dark Theme Button
//=======================================================================================//

let darkTheme = document.getElementsByClassName('dark-theme')[0];
let bodyDarkTheme = document.getElementsByClassName('body-dark-theme')[0];

darkTheme.addEventListener('click', () => {
    darkTheme.classList.toggle('dark-theme-toggle');
    document.body.classList.toggle('body-dark-theme');
    appbox_a.classList.toggle('appbox_a_invert');
    contact.classList.toggle('contact_invert');
});

//=======================================================================================//
// Scroll Button
//=======================================================================================//


let scrollBtn = document.getElementsByClassName('scroll_to_top')[0];

window.onscroll = () =>{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "flex";
    } else {
    scrollBtn.style.display = "none";
    }
}

scrollBtn.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})