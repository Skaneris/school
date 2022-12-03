const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
burger.addEventListener('click', toggleMenu)

function toggleMenu(ev) {
    [burger, menu].forEach(item => item.classList.toggle('active'))
    const menuOverlay = document.querySelector('.menu-overlay')
    if(menuOverlay) {
        removeOverlay(menuOverlay)
    } else {
        createOverlay()
    }
}

function createOverlay() {
    const overlay = document.createElement('div')
    overlay.classList.add('menu-overlay')
    document.body.append(overlay)
    overlay.animate([
        {opacity: 0}, 
        {opacity: 1}],
        {duration: 300}
    )
    overlay.onclick = toggleMenu
    document.body.classList.add('blocked')
}

function removeOverlay(overlay) {
    overlay.animate([
        {opacity: 1},
        {opacity: 0}],
        {duration: 300}
    ).onfinish = () => {
        overlay.remove()
        document.body.classList.remove('blocked')
    }
}

function setMobileListeners() {
    let start
    let def = 0
    menu.ontouchstart = ev => start = ev.touches[0].pageX
    menu.ontouchmove = ev => {
        def = start - ev.touches[0].pageX
        if(def < 0) menu.style.right = def + 'px'
    }
    menu.ontouchend = () => {
        menu.style.right = 0
        if(def < -70) {
            const menuOverlay = document.querySelector('.menu-overlay')
            removeOverlay(menuOverlay)
            toggleMenu()
        }
    }
    menu.style.transition = '0.3s'
    menu.querySelectorAll('.devider > ul').forEach(item => item.removeAttribute('style'))
}

function removeMobileListeners() {
    menu.ontouchstart = null
    menu.ontouchmove = null
    menu.ontouchend = null
    menu.removeAttribute('style');
    menu.querySelectorAll('.devider > ul').forEach(item => item.style.transition = '0.6s')
}

const mql = window.matchMedia('(min-width: 769px)')
mql.addEventListener('change', screenTest)

if(!mql.matches) {
    setMobileListeners()
}

function screenTest(ev) {
    if(ev.matches) {
        // Desctop
        removeMobileListeners()
    } else {
        // Mobile'
        setMobileListeners()
    }
}

menu.onclick = (e) => {
    const el = e.target
    if(el.tagName === 'A' && el.getAttribute('href') === '#') {
        e.preventDefault()
    }
}