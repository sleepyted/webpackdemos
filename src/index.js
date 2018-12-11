import _ from "lodash"
import './style.css'
import icon from './icon.png'
import Data from './data.xml'

function component(){
    let element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    let img = new Image()
    img.src = icon
    element.appendChild(img)
    
    return element
}

console.log(Data)

document.body.appendChild(component())