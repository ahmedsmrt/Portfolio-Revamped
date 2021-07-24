


window.onmousemove = function(e) {
    var cursor = document.getElementById('cursor'),
    cursorH = cursor.clientHeight,
    x = e.clientX - (cursorH/2);
    y = e.clientY - (cursorH/2);
    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
    };

var anchors = document.querySelectorAll('a');
var cursor2 = document.getElementById('cursor2'),
wrap_1 = document.getElementById('wrap-1'),
logo = document.getElementById('logo'),
cursor3 = document.getElementById('cursor3'),
cursor4 = document.getElementById('cursor4'),
dot = document.getElementById('dot'),
navWrap = document.getElementById('navWrap'),
lineWrap = document.getElementById('lineWrap'),
linksArr = navWrap.querySelectorAll('a'),
linesArr = lineWrap.querySelectorAll('div'),
line4 = document.getElementById('bll'),
line2 = document.getElementById('tll'),
letter4 = document.getElementById('l4'),
letter2 = document.getElementById('l2');
line1 = document.getElementById('trl'),
line3 = document.getElementById('brl'),
letter1 = document.getElementById('l1'),
letter3 = document.getElementById('l3');


anchors.forEach((e) => {
    e.addEventListener('mouseover', function(event) {
        cursor2.classList.toggle('ancLeft');
        cursor3.classList.toggle('ancRight');
        cursor4.classList.toggle('ancCenter');
        dot.style.opacity = '1';
    }, false)
    e.addEventListener('mouseleave',function(event) {
        cursor2.style.transition = '.3s';
        cursor3.style.transition = '.3s';
        cursor4.style.transition = '.3s';
        dot.style.transition = '.3s';
        cursor2.classList.toggle('ancLeft');
        cursor3.classList.toggle('ancRight');
        cursor4.classList.toggle('ancCenter');
        dot.style.opacity = '0';

    },false )
})

// NavBar Animation

linksArr.forEach((e, i) => {
        linksArr[i].addEventListener('mouseover', function(event) {
            linesArr[i].style.transition ='.4s';
            linesArr[i].style.opacity = 0;
            linesArr[i].style.transform = 'translateX(300%)';        
        })
        linksArr[i].addEventListener('mouseleave', function(event) {
            linesArr[i].style.transition ='.4s';
            linesArr[i].style.opacity = 1;
            linesArr[i].style.transform = 'translateX(-30%)';         
        })

});

wrap_1.addEventListener('mouseenter', function(event) {
  
    animateIn(letter4);
    animateLine(line4);
    animateIn(letter2);
    animateLine(line2);
    animateLine2(line1);
    animateLine2(line3);
    animateIn2(letter3);
    animateIn2(letter1);

    cursor2.style.borderColor = 'white';
    cursor3.style.borderColor = 'white';
    cursor4.style.backgroundColor = 'white';
    linesArr.forEach((e) => {
        linesArr[0].style.opacity = '1';
        linesArr[1].style.opacity = '1';
        linesArr[2].style.opacity = '1';
        linesArr[3].style.opacity = '1';
    });
}, false)
wrap_1.addEventListener('mouseleave',function(event) {
    animateOut(letter4);
    animateLineOut(line4);
    animateOut(letter2);
    animateLineOut(line2);
    animateOut2(letter3);
    animateLineOut2(line3);
    animateOut2(letter1);
    animateLineOut2(line1);
    cursor2.style.borderColor = 'black';
    cursor3.style.borderColor = 'black';
    cursor4.style.backgroundColor = 'black';
    linesArr.forEach((e) => {
        linesArr[0].style.opacity = '0';
        linesArr[0].style.transition = '1s';
        linesArr[1].style.opacity = '0';
        linesArr[1].style.transition = '.75s';
        linesArr[2].style.opacity = '0';
        linesArr[2].style.transition = '.5s';
        linesArr[3].style.opacity = '0';
        linesArr[3].style.transition = '.25s';
    });
},false )

// Letter Animation

// setInterval(() => {
//     letter1.style.right = '600%';
//     letter2.style.right = '600%';
//     setInterval(() => {
//         letter1.style.right = '.1rem';
//         letter2.style.right = '.1rem';
//     }, 500);
// }, 2000);

function animateIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'rotate(0deg)';
}

function animateOut(element) {
    element.style.opacity = '1';
    element.style.transform = 'rotate(-90deg)';
}

function animateIn2(element) {
    element.style.opacity = '0';
    element.style.transform = 'rotate(-180deg)';
}

function animateOut2(element) {
    element.style.opacity = '1';
    element.style.transform = 'rotate(-90deg)';
}


// Line Animation

function animateLine(element) {
    if(element.style.left == '48%') {
    }else {
        element.style.transition = '.5s';
        element.style.opacity = '0';
        element.style.left = '48%';
    }
}

function animateLine2(element) {
    if(element.style.left == '60%') {
    }else {
        element.style.left = '60%';
        element.style.transition = '.5s';
        element.style.opacity = '0';
    }
}

function animateLineOut(element) {
    element.style.opacity = '1';
    element.style.left = '60%';
}

function animateLineOut2(element) {
    element.style.opacity = '1';
    element.style.left = '48%';
}

