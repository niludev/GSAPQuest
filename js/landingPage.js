gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll('.card-animate');

gsap.set(cards, {
    opacity: 0,
    y: 100
});

cards.forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            // markers: true, 
        },
        delay: index * 0.2
    });
});


//level-item -> back.out(1.7)

const levels = document.querySelectorAll('.level-item');

gsap.set(levels, {
    opacity: 0,
    scale: 0.5,
    rotation: -180
});

levels.forEach((level, index) => {
    gsap.to(level, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: level,
            start: "top 80%",
        },
        delay: index * 0.2
    });
});


//level-item -> bounce.out

// const levels = document.querySelectorAll('.level-item');

// gsap.set(levels, {
//     opacity: 0,
//     y: -100
// });

// levels.forEach((level, index) => {
//     gsap.to(level, {
//         opacity: 1,
//         y: 0,
//         duration: 1.5,
//         ease: "bounce.out",
//         scrollTrigger: {
//             trigger: level,
//             start: "top 80%",
//         },
//         delay: index * 0.3
//     });
// });


//btn-start -> 

// اول کلاس رو به دکمه اضافه کنید
// const button = document.querySelector('.btn-start');

// gsap.to(button, {
//     scale: 1.1,
//     duration: 0.8,
//     repeat: -1, // تکرار بی‌نهایت
//     yoyo: true, // رفت و برگشت
//     ease: "power1.inOut"
// });




// 


// // اول این استایل رو به دکمه اضافه کنید
// const button = document.querySelector('.btn-start');
// button.style.position = 'relative';
// button.style.overflow = 'hidden';

// // ایجاد المان درخشش
// const shine = document.createElement('div');
// shine.style.cssText = `
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 50%;
//     height: 100%;
//     background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
//     transform: skewX(-25deg);
// `;
// button.appendChild(shine);

// // انیمیشن درخشش
// gsap.to(shine, {
//     left: '200%',
//     duration: 2,
//     repeat: -1,
//     ease: "none",
//     delay: 1
// });







// const button = document.querySelector('.btn-start');

// // انیمیشن hover
// button.addEventListener('mouseenter', () => {
//     gsap.to(button, {
//         scale: 1.05,
//         duration: 0.3,
//         ease: "power1.out"
//     });
// });

// button.addEventListener('mouseleave', () => {
//     gsap.to(button, {
//         scale: 1,
//         duration: 0.3,
//         ease: "power1.out"
//     });
// });

// // انیمیشن کلیک
// button.addEventListener('click', () => {
//     gsap.to(button, {
//         scale: 0.95,
//         duration: 0.1,
//         yoyo: true,
//         repeat: 1,
//         ease: "power1.inOut"
//     });
// });






// const button = document.querySelector('.btn-start');

// gsap.to(button, {
//     boxShadow: '0 0 20px rgba(255,255,255,0.8)',
//     duration: 1,
//     repeat: -1,
//     yoyo: true
// });

// const colors = ['#ff0000'];
// let colorIndex = 0;

// gsap.to({}, {
//     duration: 2,
//     repeat: -1,
//     onRepeat: () => {
//         gsap.to(button, {
//             backgroundColor: colors[colorIndex],
//             duration: 1
//         });
//         colorIndex = (colorIndex + 1) % colors.length;
//     }
// });




const button = document.querySelector('.btn-start');

const tl = gsap.timeline();

tl.from(button, {
    rotation: 360,
    duration: 1,
    ease: "power2.out"
});


tl.to(button, {
    boxShadow: '0 0 20px rgba(255,255,255,0.8)',
    duration: 1,
    repeat: -1,
    yoyo: true, 
    ease: "power1.inOut"
});

button.addEventListener('mouseenter', () => {
    gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.out"
    });
});

button.addEventListener('mouseleave', () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power1.out"
    });
});




const h1Texts = document.querySelectorAll("h1");

gsap.registerPlugin(ScrollTrigger);

h1Texts.forEach((h1Text, index) => {
    gsap.from(h1Text, {
        opacity: 0,
        x: -100, 
        duration: 1, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: h1Text, 
            start: "top 80%", 
            toggleActions: "play none none none",
        },
        stagger: 0.3
    });
});
