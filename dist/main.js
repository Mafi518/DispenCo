'use strict';

var disableScroll = function disableScroll() {
    var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.toggle('scroll-lock');
    document.body.style.paddingRight = paddingOffset;
    document.body.style.zIndex = -1;
};

var burger = document.querySelector('.menu-icon').addEventListener('click', function () {
    var _this = this;

    var menu = document.querySelector('.menu');
    this.classList.toggle('menu-icon__active');
    menu.classList.toggle('menu__active');
    disableScroll();

    var links = document.querySelectorAll('.menu__link').forEach(function (element) {
        element.onclick = function () {
            menu.classList.toggle('menu__active');
            _this.classList.toggle('menu-icon__active');
            disableScroll();
        };
    });
});

document.querySelectorAll('.tab-triggers__item').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        e.preventDefault();
        var id = e.target.getAttribute('href').replace('#', '');

        document.querySelectorAll('.tab-triggers__item').forEach(function (child) {
            child.classList.remove('tab-triggers__item-active');
        });

        document.querySelectorAll('.content__list').forEach(function (child) {
            child.classList.remove('tab-content__item-active');
        });

        elem.classList.add('tab-triggers__item-active');
        document.getElementById(id).classList.add('tab-content__item-active');
    });
});

document.querySelector('.tab-triggers__item').click();

$(document).ready(function () {
    $('.content__list').slick({
        slidesToShow: 3,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

var send = document.querySelector('.contacts__button').addEventListener('click', function (e) {
    e.preventDefault();
    var successMessage = document.querySelector('.success__popup');

    successMessage.classList.toggle('success__popup-active');

    setTimeout(function () {
        successMessage.classList.remove('success__popup-active');
        disableScroll();
    }, 3000);
});

// let popup = document.querySelectorAll('.content__item').forEach(elem => {
//     elem.addEventListener('click', function() {
//         let card = this
//         let image = document.querySelector('.content__image').src
//         console.log(card, image);
//     })
// })

// const gallery = document.querySelectorAll('.instagram__item').forEach(elem => {
//     elem.addEventListener('click', () => {
//         document.querySelectorAll('.instagram__item').forEach(child => {
//             child.classList.remove('instagram__item-active')
//         })
//         elem.classList.toggle('instagram__item-active')
//     })
// })