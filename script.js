var a = document.querySelectorAll('button')
var b = document.querySelector('body')
a.forEach(function(elem){
    elem.addEventListener('click', function(){
        b.style.backgroundColor = elem.innerHTML

        

    })
    
})