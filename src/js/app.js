import './burger'
import Slider from './slider'

const sliderElement = document.querySelector('.slider')
if(sliderElement) {
    const slider = new Slider(sliderElement)
    slider.init()
}

const room = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
// 49
console.table(room)

function countRoad(matrix) {
    function searchInput() {
        for(let i = 0; i < matrix[0].length; i++) {
            if(matrix[0][i] === 0) return [0, i]
        }
        for(let i = 0; i < matrix[matrix.length-1].length; i++) {
            if(matrix[matrix.length-1][i] === 0) return [matrix.length-1, i]
        }
        for(let i = 0; i < matrix.length-1; i++) {
            if(matrix[i][0] === 0) return [i, 0]
        }
        for(let i = 0; i < matrix.length-1; i++) {
            if(matrix[i][matrix[i].length-1] === 0) return [i, matrix[i].length-1]
        }
    }

    let counter = 0
    let [row, col] = searchInput()
    let direction = null

    if(row === 0) direction = "down"
    if(row === matrix.length-1) direction = "up"
    if(col == 0) direction = "right"
    if(col === matrix[0].length-1) direction = "left"
    
    function moveRight() {
    }
    function moveLeft() {
    }
    function moveUp() {
    }
    function moveDown() {
    }
}

countRoad(room)

let s = new String('123456789')
console.log(s);
