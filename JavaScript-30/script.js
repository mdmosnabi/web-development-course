let element = document.createElement('div')

element.innerHTML = 'hello'

// document.getElementById('div').appendChild(element)
// document.getElementById('div').removeChild(element)

let para = document.getElementById('para')

document.getElementById('div').replaceChild(element,para)

// console.log(document.baseURI);
console.log(document.title);
