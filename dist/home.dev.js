"use strict";

var cards = $('#card-slider .slider-item').toArray(); // Start of my code.

cards.forEach(function (element, index) {
  element.onclick = function () {
    var pos = element.getAttribute("data-pos"); // if (pos === 'mid') {
    //     alert('mid');
    // } else if (pos === 'top') {
    //     reverseScroll(cards);
    // } else {
    //     cardScroll(cards);
    // }
  };
}); // End of my code.

startAnim(cards);

function startAnim(array) {
  if (array.length >= 4) {
    TweenMax.fromTo(array[0], 0.5, {
      x: 0,
      y: 0,
      opacity: 0.75
    }, {
      x: 0,
      y: -120,
      opacity: 0,
      zIndex: 0,
      delay: 0.03,
      ease: Cubic.easeInOut,
      onComplete: sortArray(array)
    });
    TweenMax.fromTo(array[1], 0.5, {
      x: 79,
      y: 125,
      opacity: 1,
      zIndex: 1
    }, {
      x: 0,
      y: 0,
      opacity: 0.75,
      zIndex: 0,
      boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
      ease: Cubic.easeInOut
    });
    array[1].setAttribute("data-pos", 'top');
    TweenMax.to(array[2], 0.5, {
      bezier: [{
        x: 0,
        y: 250
      }, {
        x: 65,
        y: 200
      }, {
        x: 79,
        y: 125
      }],
      boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
      zIndex: 1,
      opacity: 1,
      ease: Cubic.easeInOut
    });
    array[2].setAttribute("data-pos", 'mid');
    TweenMax.fromTo(array[3], 0.5, {
      x: 0,
      y: 400,
      opacity: 0,
      zIndex: 0
    }, {
      x: 0,
      y: 250,
      opacity: 0.75,
      zIndex: 0,
      ease: Cubic.easeInOut
    });
    array[3].setAttribute("data-pos", 'bot');
  } else {
    $('#card-slider').append('<p>Sorry, carousel should contain more than 3 slides</p>');
  }
}

function skipAnim(array) {
  TweenMax.fromTo(array[0], 0.5, {
    x: 0,
    y: 0,
    opacity: 0.75
  }, {
    x: 0,
    y: -120,
    opacity: 0,
    zIndex: 0,
    delay: 0.03,
    ease: Cubic.easeInOut
  });
  TweenMax.fromTo(array[1], 0.5, {
    x: 79,
    y: 125,
    opacity: 1,
    zIndex: 1
  }, {
    x: 0,
    y: 0,
    opacity: 0.75,
    zIndex: 0,
    boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
    ease: Cubic.easeInOut
  });
  array[1].setAttribute("data-pos", 'top');
  TweenMax.to(array[2], 0.5, {
    bezier: [{
      x: 0,
      y: 250
    }, {
      x: 65,
      y: 200
    }, {
      x: 79,
      y: 125
    }],
    boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
    zIndex: 1,
    opacity: 1,
    ease: Cubic.easeInOut
  });
  array[2].setAttribute("data-pos", 'mid');
  TweenMax.fromTo(array[3], 0.5, {
    x: 0,
    y: 400,
    opacity: 0,
    zIndex: 0
  }, {
    x: 0,
    y: 250,
    opacity: 0.75,
    zIndex: 0,
    ease: Cubic.easeInOut
  });
  array[3].setAttribute("data-pos", 'bot');
}

function reverseSkip(array) {
  TweenMax.fromTo(array[0], 0.5, {
    x: 79,
    y: 125,
    opacity: 1,
    zIndex: 1
  }, {
    x: 0,
    y: 0,
    opacity: 0.75,
    zIndex: 0,
    boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
    ease: Cubic.easeInOut
  });
  array[0].setAttribute("data-pos", 'top');
  TweenMax.to(array[1], 0.5, {
    bezier: [{
      x: 0,
      y: 250
    }, {
      x: 65,
      y: 200
    }, {
      x: 79,
      y: 125
    }],
    boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
    zIndex: 1,
    opacity: 1,
    ease: Cubic.easeInOut
  });
  array[1].setAttribute("data-pos", 'mid');
  TweenMax.fromTo(array[2], 0.5, {
    x: 0,
    y: 400,
    opacity: 0,
    zIndex: 0
  }, {
    x: 0,
    y: 250,
    opacity: 0.75,
    zIndex: 0,
    ease: Cubic.easeInOut
  });
  array[2].setAttribute("data-pos", 'bot');
  TweenMax.fromTo(array[3], 0.5, {
    x: 0,
    y: 0,
    opacity: 0.75
  }, {
    x: 0,
    y: -120,
    opacity: 0,
    zIndex: 0,
    delay: 0.03,
    ease: Cubic.easeInOut
  });
}

function sortArray(array) {
  clearTimeout(delay);
  var delay = setTimeout(function () {
    var firstElem = array.shift();
    array.push(firstElem);
    return startAnim(array);
  }, 3000);
}

function cardScroll(array) {
  var shifter = array.shift();
  array.push(shifter);
  return skipAnim(array);
}

function reverseScroll(array) {
  var popper = array.pop();
  array.unshift(popper);
  return reverseSkip(array);
}