
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(ress => ress.json())
    .then(data => console.log(data))
};

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
}

function displayUsers(data){
    const ul = document.getElementById('user');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = `name: ${user.name},     emali: ${user.email}`
        ul.appendChild(li);
    }
};

function loadTotal(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => addTotal(data))
}

function addTotal(data){
    console.log(data)
    const ul = document.getElementById('total');
    for(const user of data){
        const li = document.createElement('il');
        li.innerText = `name: ${user.id},---- email: ${user.email}`
        ul.appendChild(li);
    }
}