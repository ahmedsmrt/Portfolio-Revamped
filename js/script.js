


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
linesArr = lineWrap.querySelectorAll('div');
link1 = document.getElementById('link1'),
line1 = document.getElementById('line1');
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





wrap_1.addEventListener('mouseover', function(event) {
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

console.log(document.timeline);


// ScrollMagic Section

// init controller
var controller = new ScrollMagic.Controller();

// build tween

// build scene and set duration to window height
new ScrollMagic.Scene({
    triggerElement: "#imgBox",
    triggerHook: 0.9,
    offset: 50, // move trigger to center of element
    reverse: false // only do once
})
.setClassToggle("#imgContain-1", "visible") // add class toggle
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


