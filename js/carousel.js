// carousel.js

"use strict";

function Carousel(config) {

    /**
     * Object Variables
     */
    var carousel = config;
    var carouselCarriages = [];
    var leftButton = {};
    var rightButton = {};
    var visibleCarriage = {};
    var leftCarriage = {};
    var rightCarriage = {};

    var visibleIndex = 0;

    var setup = function(config) {
        var carriages = config.getElementsByClassName('carriage');
        for (var i = 0; i < carriages.length; i++) {
            carouselCarriages.push(carriages[i]);
        }
    }
    setup(carousel);

    var getButtons = function(config) {
        leftButton = config.getElementsByClassName('nav-left')[0];
        leftButton.addEventListener('click', function(){
            shift('left');
        });

        rightButton = config.getElementsByClassName('nav-right')[0];
        rightButton.addEventListener('click', function() {
            shift('right');
        });
    }
    getButtons(carousel);

    var initCarriages = function(secondRound) {

        if (leftCarriage && leftCarriage.classList) {
            leftCarriage.classList.remove('leftCarriage');
        }

        if (visibleCarriage && visibleCarriage.classList) {
            visibleCarriage.classList.remove('visibleCarriage');
        }
        
        if (rightCarriage && rightCarriage.classList) {
            rightCarriage.classList.remove('rightCarriage');
        }

        if (secondRound)
            leftCarriage = (visibleIndex == 0 ? carouselCarriages[carouselCarriages.length - 1] : carouselCarriages[visibleIndex - 1]);
        visibleCarriage = carouselCarriages[visibleIndex];

        if (secondRound)
            rightCarriage = (visibleIndex == carouselCarriages.length - 1 ? carouselCarriages[0] : carouselCarriages[visibleIndex + 1]);

        if (secondRound)
            leftCarriage.classList.add('leftCarriage');
        visibleCarriage.classList.add('visibleCarriage');
        if (secondRound)
            rightCarriage.classList.add('rightCarriage');
    }
    initCarriages();

    var shift = function(direction) {
        if (direction == 'right') {
            visibleIndex = (visibleIndex == carouselCarriages.length - 1 ? 0 : visibleIndex + 1);
        } else { // left
            visibleIndex = (visibleIndex == 0 ? carouselCarriages.length - 1 : visibleIndex - 1);
        }

        initCarriages('secondRound');
    }
};

/**
 * Listener for the DOM to be loaded
 */
window.addEventListener('DOMContentLoaded', function() {
    var carousels = document.getElementsByClassName('silver-carousel');
    for (var i = 0; i < carousels.length; i++) {
        Carousel(carousels[i]);
    }
});

