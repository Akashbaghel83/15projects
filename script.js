var a = document.querySelector('button')
var b = document.querySelector('h1')
var c = document.querySelector('.real')
var d = 0

a.addEventListener('click', function(){
    var e = setInterval(function(){
        d++
        b.innerHTML = d + '%'
        c.style.width = d + '%'
                
    },30)
    setTimeout(function(){
        clearInterval(e)
        a.style.pointerEvents = 'none'
        a.innerHTML = "DOWNLOADED"
        a.style.opacity = 0.4


    },3000)
})