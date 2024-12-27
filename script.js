var arr = [
    {
        dp:'https://i.pinimg.com/474x/1e/e9/b2/1ee9b22d65e1db3d2ca92fdd62a07c94.jpg',
        story:'https://images.unsplash.com/photo-1732806685351-bafb9848cebf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D',
        username:'Akash',
        time: "5 mins ago"
    },
    {
        dp:'https://images.unsplash.com/photo-1733910087506-f634f8a806de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
        story:'https://images.unsplash.com/photo-1734188515104-5f036a02f551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D',
        username:'photocopy',
        time: "22 mins ago"
    },
    {
        dp:'https://i.pinimg.com/236x/98/5c/b6/985cb6072d4f4f9cbc779ccb8a1145bf.jpg',
        story:'https://i.pinimg.com/236x/98/5c/b6/985cb6072d4f4f9cbc779ccb8a1145bf.jpg',
        username:'chaidukaan',
        time: "6 hours ago"
    },
    {
        dp:'https://i.pinimg.com/474x/a0/0e/1c/a00e1c819a87fa56bb1e6058d9814bae.jpg',
        story:'https://i.pinimg.com/236x/a4/ea/3f/a4ea3f7bdb7c2448794596f3b87b73ad.jpg',
        username:'Dost',
        time: "34 secs ago"
    },
    
    {
        dp:'https://i.pinimg.com/236x/1f/b9/93/1fb9938300ddd3f0bb802032c23bcf04.jpg',
        story:'https://images.unsplash.com/photo-1734188515104-5f036a02f551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D',
        username:'chhapri',
        time: "22 hours ago"
    },
    {
        dp:'https://i.pinimg.com/236x/d3/71/f1/d371f128d4459446ccb61f337749a6bb.jpg',
        story:'https://images.unsplash.com/photo-1733126916745-ae6453f1fe4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D',
        username:'Ravi',
        time: "55 secs ago"
    },
]

var sum = ''

arr.forEach(function(elem,idx){
    
    sum = sum + `<div class="status" id=${idx}>
    <img src=${elem.dp} alt="">
    <div class="status-in">
        <h4>${elem.username}</h4>
        <h6>${elem.time}</h6>
    </div>
</div>`
})

var allStatus = document.querySelector('#allStatus')
var full = document.querySelector('#full')

allStatus.innerHTML = sum

allStatus.addEventListener('click',function(dets){
    var gold = arr[dets.target.id]

    full.style.display = 'block'
    full.style.backgroundImage = `url(${gold.story})`

    setTimeout(function(){
    full.style.display = 'none'

    },3000)
})