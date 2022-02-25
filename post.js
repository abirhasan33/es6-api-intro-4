function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => dispylPost(data))
}

loadPost();
function dispylPost(posts){
    const postContainer = document.getElementById('posts');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div)
        console.log(post.title)
    }
};

function addAPost (){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
        title: 'My New post',
        body: 'This is my posts',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',

    }
  })
  .then(rep => rep.JSON())
  .then(data => console.log(data));
}