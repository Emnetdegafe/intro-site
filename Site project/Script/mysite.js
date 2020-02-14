function submitform(){
    document.forms["myform"].submit();
}
var imgObj = null;
            var animate ;

function init() {
    imgObj = document.getElementById('adventurer');
    imgObj.style.position= 'relative';
    imgObj.style.left = '0px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 5 + 'px';
    animate = setTimeout(moveRight,2);
}
function stop() {
      clearTimeout(animate);
      imgObj.style.left = '0px';
}

    window.onload = init;
