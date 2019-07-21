// Write your code here!
var selector = document.querySelector('#main')
function grabThis (name) {
    return document.querySelector(name)
}
selector.remove()

var newHeader = grabThis('#victory')