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
// About Section Scroll
//=======================================================================================//


let treeBar = document.getElementsByClassName('tree_bar')[0];

let card01 = document.querySelectorAll('.card_01');
let card02 = document.querySelectorAll('.card_02');
let card03 = document.querySelectorAll('.card_03');
let card04 = document.querySelectorAll('.card_04');
let cardImg01 = document.querySelectorAll('.card_img_01');
let cardImg02 = document.querySelectorAll('.card_img_02');
let cardImg03 = document.querySelectorAll('.card_img_03');
let cardImg04 = document.querySelectorAll('.card_img_04');

function firstRun(){
    treeBar.style.height = '33.5rem';
}
function secondRun(){
    treeBar.style.height = '76.5rem';
}
function thirdRun(){
    treeBar.style.height = '120.5rem';
}
function fourthRun(){
    treeBar.style.height = '164.5rem';
}


const mediaQuery = window.matchMedia('(min-width: 1280px)');

function observation(){
    let observeCard01 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('about_card_odd_entry');
            cardImg01[0].classList.add('about_card_img_odd_entry');
            firstRun();
        }else{
            entry.target.classList.remove('about_card_odd_entry');
            cardImg01[0].classList.remove('about_card_img_odd_entry');
        }
    })
},{
    threshold: .8,
})

card01.forEach(el=>{
    observeCard01.observe(el);
})

let observeCard02 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('about_card_even_entry');
            cardImg02[0].classList.add('about_card_img_even_entry');
            secondRun();
        }else{
            entry.target.classList.remove('about_card_even_entry');
            cardImg02[0].classList.remove('about_card_img_even_entry');
        }
    })
},{
    threshold: .8,
})

card02.forEach(el=>{
    observeCard02.observe(el);
})

let observeCard03 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('about_card_odd_entry');
            cardImg03[0].classList.add('about_card_img_odd_entry');
            thirdRun();
        }else{
            entry.target.classList.remove('about_card_odd_entry');
            cardImg03[0].classList.remove('about_card_img_odd_entry');
        }
    })
},{
    threshold: .8,
})

card03.forEach(el=>{
    observeCard03.observe(el);
})

let observeCard04 = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('about_card_even_entry');
            cardImg04[0].classList.add('about_card_img_even_entry');
            fourthRun();
        }else{
            entry.target.classList.remove('about_card_even_entry');
            cardImg04[0].classList.remove('about_card_img_even_entry');
        }
    })
},{
    threshold: .8,
})

card04.forEach(el=>{
    observeCard04.observe(el);
})}


if(mediaQuery.matches){
    observation();
}



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