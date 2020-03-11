


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
cursor4 = document.getElementById('cursor4');
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


