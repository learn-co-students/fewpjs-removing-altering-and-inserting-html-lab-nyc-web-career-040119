// Write your code here!
var element = document.getElementById('main');
element.parentNode.removeChild(element);
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
