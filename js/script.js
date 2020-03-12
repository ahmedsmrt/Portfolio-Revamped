


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
cursor4 = document.getElementById('cursor4'),
navWrap = document.getElementById('navWrap'),
lineWrap = document.getElementById('lineWrap'),
linksArr = navWrap.querySelectorAll('a'),
linesArr = lineWrap.querySelectorAll('div'),
link1 = document.getElementById('link1'),
line1 = document.getElementById('line1');
anchors.forEach((e) => {
    e.addEventListener('mouseover', function(event) {
        cursor2.classList.toggle('ancLeft');
        cursor3.classList.toggle('ancRight');
        cursor4.classList.toggle('ancCenter');

    }, false)
    e.addEventListener('mouseleave',function(event) {
        cursor2.style.transition = '.3s';
        cursor3.style.transition = '.3s';
        cursor4.style.transition = '.3s';
        cursor2.classList.toggle('ancLeft');
        cursor3.classList.toggle('ancRight');
        cursor4.classList.toggle('ancCenter');
    },false )
})


function arrLooper(e) {
    for (var i = 0; i< e.length; i++) {
        e[i].addEventListener('mouseover', function(event) {
            event = linesArr;
            linesArr[i].style.transition ='.4s';
            linesArr[i].style.transform = 'translateX(100%)';
        })
        console.log(e[i]);
    }
}

arrLooper(linksArr);

// Nav

link1.addEventListener('mouseover', function(event) {
    line1.style.transition ='.4s';
    line1.style.transform = 'translateX(100%)'; 
});
link1.addEventListener('mouseleave', function(event) {
    line1.style.transform = 'translateX(-30%)'; 
});





wrap_1.addEventListener('mouseover', function(event) {
    cursor2.style.borderColor = 'white';
    cursor3.style.borderColor = 'white';
    cursor4.style.backgroundColor = 'white';

}, false)
wrap_1.addEventListener('mouseleave',function(event) {
    cursor2.style.borderColor = 'black';
    cursor3.style.borderColor = 'black';
    cursor4.style.backgroundColor = 'black';
},false )

console.log(document.timeline);


