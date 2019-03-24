var elemData = {
    name: "div",
    attrs: {
        className: "container",
        title: ["first", "second", "third", "fourth"],
        style: `
           border: dotted 1px yellow;
           background-color: #ff00ff50;
       `
    }
}
function over ( event ) {
    event.target.style.backgroundColor = "#ffff0050"
}
function out ( event ) {
    event.target.style.backgroundColor = "#ff00ff50"
}
function clickHandler ( event ) {
    event.target.remove()
}
function insert (elemNum, parentElem){
    var elem = parentElem.appendChild(document.createElement(elemData.name))
    for(var attr in elemData.attrs)
        elem[attr] = elemData.attrs[attr]
    elem.title = elemData.attrs.title[elemNum]
    elem.style.width = `${400 - elemNum * 50}px`
    elem.style.height = `${400 - elemNum * 50}px`

    elem.addEventListener('click', clickHandler)
    elem.addEventListener('mouseover', over)
    elem.addEventListener('mouseout', out)
    return elem
}
var collection = []
collection [0] = insert(0, document.body)
for(var x = 1; x < 4; x++){
    collection[x] = insert(x, collection[x-1])
}