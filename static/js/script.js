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
// Work Percentage Hover Function
//=======================================================================================//

let bodyFirstHeading = document.querySelectorAll('.body_first_heading');
let svgCirclePerQuery = document.querySelectorAll('.svg_circle_per');
let svgCirclePer = document.getElementsByClassName('svg_circle_per');
let perNum = document.getElementsByClassName('per_num');

var run = () => {
    for (let i = 0; i < svgCirclePer.length; i++) {
        let num = Number.parseInt(perNum[i].innerHTML);
        svgCirclePer[i].style.strokeDashoffset = 251 - 251 * num / 100;
        let numCount = 0;
        setInterval(() => {
            if (numCount == num) {
                clearInterval();
            }
            else {
                numCount += 1;
                perNum[i].innerText = numCount;
            }
        }, 20);
    }
}

var reset = () =>{
    for (let i = 0; i < svgCirclePer.length; i++) {
        svgCirclePer[i].style.strokeDashoffset = 250;
    }
}

let observerAl = new IntersectionObserver(entries=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            if(entry.target.classList.contains('run')){
                run();
                entry.target.classList.remove('run');
            }
        }
        else{
            // reset();
            // entry.target.classList.add('run');
        }
    })
},{
    threshold: 1
});


bodyFirstHeading.forEach(show=>{
    observerAl.observe(show);
});



//=======================================================================================//
// Work Percentage Hover Function
//=======================================================================================//


let compatibility = document.querySelectorAll('.compatibility');
let conOne = document.querySelectorAll('.con_one');

var com = () =>{
    conOne[0].style.width = '90%';
    conOne[1].style.width = '85%';
    conOne[2].style.width = '50%';
}


let observeCom = new IntersectionObserver(entries=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log('isIntersecting');
            com();
        }
    })
},{
    threshold: 1
});

compatibility.forEach(show=>{
    observeCom.observe(show);
});


//=======================================================================================//
// Portfolio Card Hover Function
//=======================================================================================//


let portfolioCard = document.querySelectorAll('.portfolio_card');

let observerBl = new IntersectionObserver(entries=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.style.top = '-2.5rem';
        }
        else{
            entry.target.style.top = '-0.3rem';
        }
    })
},{
    threshold: .5
});

portfolioCard.forEach(show=>{
    observerBl.observe(show);
});


//=======================================================================================//
// Top Project Hover Function
//=======================================================================================//

let thirdHeading = document.querySelectorAll('.third_heading');
let thirdCard = document.querySelectorAll('.third_card');
var imgInfo = document.querySelectorAll('.img_info');

let rotateImg = () =>{
    for(let i = 0; i<2; i++){
        let thirdCardImg = document.querySelectorAll('.img_info')[i].getElementsByTagName('img')[0];
        thirdCardImg.style.transform = "rotate(0deg)";
    }
}

let reverseImg = () =>{
    for(let i = 0; i<2; i++){
        let thirdCardImg = document.querySelectorAll('.img_info')[i].getElementsByTagName('img')[0];
        thirdCardImg.style.transform = "rotate(35deg)";
    }
}

let observerCl = new IntersectionObserver(entries=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            for(let i = 0; i<2; i++){
                thirdCard[i].classList.add('third_card_intersect');
                imgInfo[i].classList.add('img_info_intersect');
                rotateImg();
            }
        }
        else{
            for(let i = 0; i<2; i++){
                thirdCard[i].classList.remove('third_card_intersect');
                imgInfo[i].classList.remove('img_info_intersect');
                reverseImg();
            }
        }
    })
},{
    threshold: .5
});

thirdHeading.forEach(show=>{
    observerCl.observe(show);
});


//=======================================================================================//
// Space Parallax Effect
//=======================================================================================//

let space = document.getElementsByClassName('element')[0];

if(window.innerWidth > 1024){
    window.addEventListener('scroll', () => {
        let scroll = window.scrollY;
        if(space.style.left <= '40%'){
            space.style.left = ((scroll * 0.01) + 35) + '%';
            space.style.top = ((scroll * 0.01) + 25) + '%';
            space.style.width = ((scroll * 0.01) + 10) + 'rem';
            space.style.height = ((scroll * 0.01) + 10) + 'rem';
        }else{
            space.style.left = (-(scroll * 0.01) + 35) + '%';
            space.style.top = (-(scroll * 0.01) + 25) + '%';
            space.style.width = (-(scroll * 0.01) + 10) + 'rem';
            space.style.height = (-(scroll * 0.01) + 10) + 'rem';
        }
    });
};




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


contact.style.left = `${((window.innerWidth - contact.clientWidth)/2)/16}rem`;


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