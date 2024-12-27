var a = document.querySelector('button')
var b = document.querySelector('body')
images = ['https://cdn-icons-png.flaticon.com/512/785/785104.png',
    'https://static.vecteezy.com/system/resources/thumbnails/028/283/955/small/cartoon-insect-aigenerative-png.png',
    'https://i.pinimg.com/originals/a2/2c/7b/a22c7bdbdf4df2de65f20272b91568fe.png']
a.addEventListener('click', function(){
    var r = Math.trunc(Math.random()*3)
    console.log(r);
    vx = Math.random()*100
    vy = Math.random()*100
    vz = Math.random()*360
    var c = document.createElement('img')
    c.setAttribute('src', images[r])
    c.style.height = '50px'
    c.style.position = 'absolute'
    c.style.top = vx + '%'
    c.style.left = vy + '%'
    c.style.rotate = vz + 'deg'
    b.appendChild(c)
})