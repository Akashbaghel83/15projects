var users = [
    {
        name: 'Akash',
        age: 21,
        city: 'Bhopal'
    },
    {
        name: 'Ravi',
        age: 22,
        city: 'Bihar'
    },
    {
        name: 'Pardhi',
        age:19,
        city: 'Balaghat'
    }
]
var sum = '';
users.forEach(function(item){
    sum += `<div class="card">
        <h1>${item.name}</h1>
        <h4>${item.age},${item.city}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>`;
})

document.querySelector('body').innerHTML = sum;