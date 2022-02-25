function loadAlbum1(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(rep => rep.json())
    .then(data => despleiAlbum2(data))
}
loadAlbum1();
function despleiAlbum2(albums){
    const albumContainer = document.getElementById('imgs');
    for(const album of albums){
        const img = document.createElement('img');
        img.innerText = album.thumbnailUrl;
        albumContainer.appendChild(img);
    }
}
// function loadAlbum(){
//     fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(rep => rep.json())
//     .then(data => despleiAlbum(data))
// }
// loadAlbum();
// function despleiAlbum(albums){
//     const albumContainer = document.getElementById('albums');
//     for(const album of albums){
//         const p = document.createElement('p');
//         p.style.textAlign='center'
//         p.style.margin='10px'
//         p.style.padding='10px'
//         p.style.borderRadius='10px'
//         p.style.border='2px solid blue'
//         p.innerText = album.title;
//         albumContainer.appendChild(p);
//     }
// }
