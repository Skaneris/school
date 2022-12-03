import './burger'
import './form'
import Slider from './slider'

const sliderElement = document.querySelector('.slider')
if(sliderElement) {
    const slider = new Slider(sliderElement)
    slider.init()
}
