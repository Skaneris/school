export default class Slider {
    constructor(element) {
        this.slider = element
        this.wrapper = element.children[0]
        this.slides = Array.from(this.wrapper.children)
        this.currentIndex = 0
        this.maxIndex = this.slides.length - 1
        this.currentSlide = this.slides[this.currentIndex]
        this.timeout = null
        this.duration = 5000

        const nav = document.createElement('ul')
        nav.classList.add('nav')
        for(let i = 0; i <= this.maxIndex; i++) {
            let li = document.createElement('li')
            li.dataset.index = i
            if(this.currentIndex === i) li.classList.add('active')
            nav.append(li)
        }
        this.slider.append(nav)
        nav.onclick = e => {
            if(e.target.tagName === 'LI') {
                if(e.target.classList.contains('active')) return
                nav.querySelector('.active').classList.remove('active')
                e.target.classList.add('active')
                this.setSlide(e.target.dataset.index)
            }
        }

        this.wrapper.onmouseover = () => clearTimeout(this.timeout)
        this.wrapper.onmouseleave = () => this.autoplay()

        this.setHeight = this.setHeight.bind(this)
        this.setSlide = this.setSlide.bind(this)
        this.prev = this.prev.bind(this)
        this.next = this.next.bind(this)
        this.setActiveLink = this.setActiveLink.bind(this)
    }
    setHeight() {
        let image = this.currentSlide.children[0]
        let height = window.getComputedStyle(image).height
        this.wrapper.style.height = height
    }
    setSlide(idx) {
        clearTimeout(this.timeout)
        this.setActiveLink(idx)
        let nextSlide = this.slides[idx]
        nextSlide.style.zIndex = 1
        this.wrapper.append(nextSlide)
        this.currentSlide.animate([
            {opacity: 1}, {opacity: 0}
        ],
        {duration: 300})
        .onfinish = () => {
            this.currentSlide.remove()
            this.currentIndex = idx
            this.currentSlide = this.slides[this.currentIndex]
            this.currentSlide.style.zIndex = 2
            this.autoplay()
        }
    }
    next() {
        if(this.currentIndex < this.maxIndex) {
            this.setSlide(+this.currentIndex + 1)
        } else {
            this.setSlide(0)
        }
    }
    prev() {
        if(this.currentIndex > 0) {
            this.setSlide(this.currentIndex - 1)
        } else {
            this.setSlide(this.maxIndex)
        }
    }
    setActiveLink(idx) {
        this.slider.querySelector('.active').classList.remove('active')
        this.slider.querySelector('.nav').children[idx].classList.add('active')
    }
    autoplay() {
        this.timeout = setTimeout(this.next, this.duration)
    }
    init() {
        setTimeout(this.setHeight, 0)
        this.wrapper.innerHTML = ''
        this.wrapper.append(this.currentSlide)
        this.currentSlide.style.zIndex = 2
        window.addEventListener('resize', this.setHeight)

        const prev = document.createElement('div')
        prev.classList.add('prev')
        prev.onclick = this.prev
        this.slider.append(prev)

        const next = document.createElement('div')
        next.classList.add('next')
        next.onclick = this.next
        this.slider.append(next)
        this.autoplay()
        // setInterval(() => this.next(), 4000)
    }
}

