document.body.onclick = function(e) {
    if(document.querySelector('.overlay')) return
    if(e.target.dataset.action === 'order'){
        createForm()
    }
}

function createForm() {
    const overlay = document.createElement('div')
    overlay.className = 'overlay'
    overlay.onclick = closeForm

    const form = document.createElement('div')
    form.className = 'form'
    form.insertAdjacentHTML('afterbegin', `
        <div class="form__header"><span>Order form</span><div class="close"></div></div>
        <form action="">
            <div class="form__body">
                <div class="form__desc">
                    <span>Please fill this form for start your teaching and we will call you recently.</span>
                </div>
                <div class="form__row">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name">
                </div>
                <div class="form__row">
                    <label for="country">Country</label>
                    <input type="text" name="country" id="country">
                </div>
                <div class="form__row">
                    <label for="phone">Phone</label>
                    <input type="text" name="phone" id="phone">
                </div>
                <div class="form__row">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email">
                </div>
            </div>
            <div class="form__footer">
                <button class="button">Send Order</button>
            </div>
        </form>
    `)

    blockScroll()

    document.body.append(overlay)
    overlay.animate([
        {opacity: 0}, {opacity: 1}
    ], {
        duration: 300
    }).onfinish = function() {
        overlay.append(form)
        form.animate([
            {
                transform: 'scale(0)',
                opacity: 0
            }, 
            {
                transform: 'scale(1)',
                opacity: 1
            }
        ], {
            duration: 300
        })
    }

    form.onclick = function(e) {
        e.stopPropagation()
        if(e.target.className === 'close') closeForm()
        if(e.target.className === 'button') {
            e.preventDefault()
        }
    }

    form.oninput = saveFormData

    function closeForm(e) {
        form.animate([
            {
                transform: 'scale(1)',
                opacity: 1
            },
            {
                transform: 'scale(0)',
                opacity: 0
            }
        ], {
            duration: 300
        }).onfinish = function() {
            form.remove()
            overlay.animate([
                {opacity: 1}, {opacity: 0}
            ], {
                duration: 300
            }).onfinish = function() {
                overlay.remove()
                unblockScroll()
            }
        }
    }

    function blockScroll() {
        
        const scrollbarWidth = window.innerWidth - document.body.clientWidth
        
        const headerContainer = document.querySelector('.header .container')
        const marginRight = parseInt(window.getComputedStyle(headerContainer).marginRight)
        const marginRightValue = marginRight + scrollbarWidth + 'px'
        headerContainer.style.marginRight = marginRightValue
        
        document.querySelector('main').style.paddingRight = scrollbarWidth + 'px'

        document.querySelector('.footer__top').style.paddingRight = scrollbarWidth + 'px'

        const footerContainer = document.querySelector('.footer > .container')
        footerContainer.style.marginRight = marginRightValue

        document.body.style.overflowY = 'hidden'
    }
    function unblockScroll() {
        document.querySelector('.header .container').removeAttribute('style')
        document.querySelector('main').removeAttribute('style')
        document.querySelector('.footer__top').removeAttribute('style')
        document.querySelector('.footer > .container').removeAttribute('style')
        document.body.removeAttribute('style')
    }
}

const formData = {}

function saveFormData() {
    const form = document.querySelector('form')
    console.log(form.elements);
    for(let i = 0; i < form.elements.length; i++) {
        if(form.elements[i].type === 'text') {
            formData[form.elements[i].name] = form.elements[i].value
        }
    }
}

function createValidation(cllback) {

}
