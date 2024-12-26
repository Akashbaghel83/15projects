var a = document.querySelector('body')
var b = document.querySelector('#cursor')
var c = document.querySelector('h1')
a.addEventListener('mousemove', function(dets){
    b.style.top = dets.y + "px"
    b.style.left = dets.x + "px"

})
c.addEventListener('mouseenter', function(){
    b.style.scale = 3
    
})
c.addEventListener('mouseleave', function(){
    b.style.scale = 1


})