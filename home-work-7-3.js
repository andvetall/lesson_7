var elemData = {
    name: "div",
    attrs: {
        className: "container",
        title: [1, 2, 3, 4, 5, 6, 7],
        style: `
           border: dotted 1px yellow;
           background-color: #ff00ff50;
       `
    }
}
function enter ( event ) {
    event.target.style.backgroundColor = "#ffff0050"
}
function leave ( event ) {
    event.target.style.backgroundColor = "#ff00ff50"
}
function clickHandler ( event ) {
    event.target.children.length ?
        event.target.parentNode.appendChild(event.target.children[0]) : null
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
    elem.addEventListener('mouseenter', enter)
    elem.addEventListener('mouseleave', leave)
    return elem
}
var collection = []
collection [0] = insert(0, document.body)
for(var x = 1; x < elemData.attrs.title.length; x++){
    collection[x] = insert(x, collection[x-1])
}