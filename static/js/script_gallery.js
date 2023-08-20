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

//=======================================================================================//
// Slider and Slider Button
//=======================================================================================//

let slideImg = document.querySelectorAll('.slide_img');
const next =  document.querySelector('.next_btn');
const prev =  document.querySelector('.prev_btn');
const slideP = document.querySelectorAll('.slide_img>p');
const slideI = document.querySelectorAll('.slide_img>img');
let slideIndex = 0;

slideImg.forEach((el,index)=>{
    el.style.left = `${index*100}%`;
});

function slide(){
    slideImg.forEach((el)=>{
        el.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}


// let sliderInterval = () =>{
//     // setInterval(()=>{
//         if(slideIndex == slideImg.length-1){ 
//             slideIndex = 0;
//             slideImg.forEach((el)=>{
//                 el.style.transform = `translateX(+${slideIndex * 100}%)`;
//             });
//     }else{
//             slideIndex ++;
//             slide();
//     };
//     // },6000)
// }

// // window.onload = sliderInterval();

next.addEventListener('click',()=>{
    if(slideIndex == slideImg.length-1){ 
            slideIndex = 0;
            slideImg.forEach((el)=>{
                el.style.transform = `translateX(+${slideIndex * 100}%)`;
            });
    }else{
            slideIndex ++;
            slide();
    };

    next.classList.add('next_btn_click');
    setTimeout(()=>{
        next.classList.remove('next_btn_click');
    },110)

});

prev.addEventListener('click',()=>{
    if(slideIndex == 0){
        slideIndex = slideImg.length-1;
        slideImg.forEach((el)=>{
            el.style.transform = `translateX(-${slideIndex * 100}%)`;
        });
    }else{
        slideIndex --;
        slide();
    }

    prev.classList.add('prev_btn_click');
    setTimeout(()=>{
        prev.classList.remove('prev_btn_click');
    },110)

});

next.addEventListener('click',()=>{
    next.classList.add('next_btn_click');
    setTimeout(()=>{
        next.classList.remove('next_btn_click');
    },110)
})

// .next.addEventListener('mouseup',()=>{
//     next.classList.remove('next_btn_click');
// })

// slideI.forEach(el=>{
//     el.addEventListener('mouseover',()=>{
//         slideP.forEach(element=>{
//             element.style.opacity = '.8';
//         });
//     });
//     el.addEventListener('mouseout',()=>{
//             slideP.forEach(element=>{
//                 element.style.opacity = '0.2';
//             });
//     });
// });




//=======================================================================================//
// Gallery Images
//=======================================================================================//

const galleryIll = document.querySelectorAll('.gallery_illustration');
const galleryWa = document.querySelectorAll('.gallery_projects');
const galleryPro = document.querySelectorAll('.gallery_portraits');

const buttonAll = document.getElementsByClassName('all')[0];
const buttonWa = document.getElementsByClassName('web_apps')[0];
const buttonIllu = document.getElementsByClassName('illustration')[0];
const buttonDr = document.getElementsByClassName('drawings')[0];

buttonAll.addEventListener('click',()=>{
    galleryIll.forEach(el=>{
        el.style.display = 'flex';
    });
    galleryWa.forEach(el=>{
        el.style.display = 'flex';
    });
    galleryPro.forEach(el=>{
        el.style.display = 'flex';
    });
});

buttonWa.addEventListener('click',()=>{
    galleryIll.forEach(el=>{
        el.style.display = 'none';
    });
    galleryWa.forEach(el=>{
        el.style.display = 'flex';
    });
    galleryPro.forEach(el=>{
        el.style.display = 'none';
    });
});

buttonIllu.addEventListener('click',()=>{
    galleryIll.forEach(el=>{
        el.style.display = 'flex';
    });
    galleryWa.forEach(el=>{
        el.style.display = 'none';
    });
    galleryPro.forEach(el=>{
        el.style.display = 'none';
    });
});

buttonDr.addEventListener('click',()=>{
    galleryIll.forEach(el=>{
        el.style.display = 'none';
    });
    galleryWa.forEach(el=>{
        el.style.display = 'none';
    });
    galleryPro.forEach(el=>{
        el.style.display = 'flex';
    });
});