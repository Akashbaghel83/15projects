var b = ''
var c = document.querySelector('.storiyan')
var d = document.querySelector('.full')
var g = document.querySelector('.rprogress')
var z = document.querySelector('#user')
var arr = [
    {
        dp:'https://i.pinimg.com/236x/27/32/e8/2732e831249b074e8ad9855e99cfe139.jpg',
        story:'https://images.unsplash.com/photo-1732408078285-b01ebd3992f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
        username:'Its_Akash'
    },
    {
        dp:'https://i.pinimg.com/736x/f2/9b/d0/f29bd05c7d49c7a6f2ba44d8686552b0.jpg',
        story:'https://images.unsplash.com/photo-1733970730195-9ac7cb726eee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D',
        username:'joginder'
    },
    {
        dp:'https://i.pinimg.com/236x/6f/88/0c/6f880c5af6fdedf1365ac2dfd2e84a0f.jpg',
        story:'https://images.unsplash.com/photo-1732692583215-a946ff9d69b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D',
        username:'gajju'
    },
    {
        dp:'https://i.pinimg.com/474x/c7/37/57/c73757e043118b0630e681eecb51ab20.jpg',
        story:'https://i.pinimg.com/236x/01/37/a1/0137a1ea7eb9c28ca1e6790a0c611629.jpg',
        username:'garam_dimaag'
    },
    {
        dp:'https://plus.unsplash.com/premium_photo-1725400826922-39ffcf68f736?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDJ8fHxlbnwwfHx8fHw%3D',
        story:'https://images.unsplash.com/photo-1732480509151-cb3d991ff9a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D',
        username:'chappri'
    },
    {
        dp:'https://i.pinimg.com/236x/71/a5/94/71a594814888d9ab67023359cc84aeb6.jpg',
        story:'https://i.pinimg.com/236x/84/6c/a0/846ca0b0c373fd30d16b9b8bff533a4b.jpg',
        username:'mai_hoon_akash'
    },

]
arr.forEach(function(elem, idx){
    b = b + `            <div class="story">
                <img id=${idx} src="${elem.dp}" alt="">
            </div>
`

})
c.innerHTML = b
c.addEventListener('click', function(dets){
    var e = 0 
    var f = setInterval(function(){
        e++
        g.style.width = e + '%'
    },20)
    var imp = arr[dets.target.id]
    d.style.display = 'block'
    d.style.backgroundImage = `url(${imp.story})`
    z.innerHTML = imp.username
    setTimeout(function(){
        d.style.display = 'none'
        clearInterval(f)
    },2000)  
})