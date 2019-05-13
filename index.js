let element = document.getElementById('main')
element.remove()

let newHeader = document.createElement('h1')

document.body.appendChild(newHeader)
newHeader = document.querySelector("h1")
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"