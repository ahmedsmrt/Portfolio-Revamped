


window.onmousemove = function(e) {
    var cursor = document.getElementById('cursor'),
    cursorH = cursor.clientHeight,
    x = e.clientX - (cursorH/2);
    y = e.clientY - (cursorH/2);
    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;
    };

var anchors = document.querySelectorAll('a');

anchors.forEach((e) => {
    var cursor = document.getElementById('cursor');

    e.addEventListener('mouseover', function(event) {
        cursor.classList.toggle('anchorCursor');

    }, false)
    e.addEventListener('mouseleave',function(event) {
        cursor.classList.toggle('anchorCursor');

    } )
})



