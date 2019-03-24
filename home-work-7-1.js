var parag = document.body.appendChild(document.createElement('p'))
parag.innerText = "Click Me!"
var image = document.createElement('img')
image.src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681"
image.style = `height: 100px;`
parag.onclick = function(event){
    event.target ? document.body.appendChild(image) : null
}
image.addEventListener('mouseover', function(event){
    event.target ? image.style = `height: 200px; transition: all 2s;` : null
})
image.addEventListener('mouseout', function(event){
    event.target ? image.style = `height: 100px; transition: all 2s;` : null
})
image.addEventListener('click', function(event){
    event.target ? image.remove() : null
})