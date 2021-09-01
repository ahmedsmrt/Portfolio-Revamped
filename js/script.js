


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
letter2 = document.getElementById('l2'),
line1 = document.getElementById('trl'),
line3 = document.getElementById('brl'),
letter1 = document.getElementById('l1'),
letter3 = document.getElementById('l3'),
lines = document.getElementsByClassName('line'),
welcome = document.getElementById('welcome_text'),
fbShort = document.getElementById('fb'),
igShort = document.getElementById('ig'),
ghShort = document.getElementById('gh'),
shortCuts = document.getElementById('shortcutsWrap');



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
        //  linesArr[i].style.transition ='.4s';
            linesArr[i].style.opacity = 0;
            linesArr[i].style.transform = 'translateX(300%)';        
        })
        linksArr[i].addEventListener('mouseleave', function(event) {
            // linesArr[i].style.transition ='.4s';
            linesArr[i].style.opacity = 1;
            linesArr[i].style.transform = 'translateX(-30%)';         
        })

});

// Nav Enter

wrap_1.addEventListener('mouseenter', function() {
    
        animateIn(letter4);
        animateLine(line4);
        animateIn(letter2);
        animateLine(line2);
        animateIn2(letter3);
        animateLine2(line3);
        animateIn2(letter1);
        animateLine2(line1);
    welcome.style.transform = 'translateX(15%)';
    cursor2.style.borderColor = 'white';
    cursor3.style.borderColor = 'white';
    cursor4.style.backgroundColor = 'white';
    linesArr.forEach((e) => {
        e.style.opacity = '1';      
    });
            shortCuts.style.opacity = "1";

     fbShort.style.transform = "translateY(0%)";
        fbShort.style.opacity = "1";
    igShort.style.transform = "translateY(0%)";
        igShort.style.opacity = "1";
    ghShort.style.transform = "translateY(0%)";
    ghShort.style.opacity = "1";



}, false)

// Nav Leave
wrap_1.addEventListener('mouseleave',function() {
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
    linesArr.forEach(() => {
        linesArr[0].style.opacity = '0';
        linesArr[0].style.transition = '1s';
        linesArr[1].style.opacity = '0';
        linesArr[1].style.transition = '.75s';
        linesArr[2].style.opacity = '0';
        linesArr[2].style.transition = '.5s';
        linesArr[3].style.opacity = '0';
        linesArr[3].style.transition = '.25s';
    });
        welcome.style.transform = "translateX(0%)";
        fbShort.style.transform = 'translateY(140%)';
        igShort.style.transform = "translateY(140%)";
        ghShort.style.transform = "translateY(140%)";


},false )



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


function initnav() {
          line1.style.left = "48%";
          line2.style.left = "60%";
          line3.style.left = "48%";
          line4.style.left = "60%";
         letter1.style.transform = "rotate(-90deg)";
         letter2.style.transform = "rotate(-90deg)";
         letter3.style.transform = "rotate(-90deg)";
         letter4.style.transform = "rotate(-90deg)";

}
initnav();


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



// Face Animation
let faceAnc = document.getElementById('face_anchor');
let svgWrap = document.getElementById('svg_wrap');
let svgCollection = svgWrap.querySelectorAll('svg');
let svgPath = svgCollection[0].querySelectorAll('path');
let animateClass = document.getElementsByClassName('.animateHair');
let x = 7;
let interval = 500;



// const hairdo = () => {
//     for (let i = 0; i < x; i++) {
//       setTimeout(function () {
//         svgPath[i].classList.toggle("animateHair");
//       }, i * interval);
//     }
// };


// let faceMeausre = document.getElementById('face_features');
// let facePath = faceMeausre.getElementsByTagName('path');
let newFace = document.getElementById('newFace');
let newFacePath = newFace.getElementsByTagName('path');

const newFaces = () => {
    newFacePath[0].classList.toggle('animateNew')
}

const newSegment = () => {
    segment.style.strokeDasharray = "599px";
    segment.style.strokeDashoffset = "599px";
  segmentPath[0].classList.toggle("animateFace");
};



let segment = document.getElementById('face_segment');
let segmentPath = segment.getElementsByTagName('path');

console.log(segmentPath[0].getTotalLength());

// newFaces();



// const faceFeat = () => {
//   for (let i = 0; i < facePath.length; i++) {
//     setTimeout(function () {
//       facePath[i].classList.toggle("animateFace");
//     }, i * interval);
//   }
// };



// for(let i = 0; i < facePath.length; i++) {
//     console.log(facePath[i])
// console.log(facePath[i].getTotalLength());

// }


// //  faceFeat();
// //  hairdo();
faceAnc.addEventListener('mouseover', () => {
    newSegment();
    newFaces();
})