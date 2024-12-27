var a = document.querySelector('#img1')
var b = document.querySelector('#img2')
var c = document.querySelector('button')
c.addEventListener('click', function(){
    var d = a.getAttribute('src')
    var e = b.getAttribute('src')
    a.setAttribute('src',e)
    b.setAttribute('src',d)    
})