// Write your code here!
let main = document.querySelector(`#main`)
main.remove()

const newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'Victory'
newHeader.innerHTML = "Your-Name is the Champion"
