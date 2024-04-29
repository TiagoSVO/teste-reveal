addEventListener('DOMContentLoaded', () => {
       
    const init = () => {
        const firstRevealElement = document.querySelectorAll('.reveal-effect')[0]
        if(firstRevealElement) {
            revealElement(firstRevealElement)
        }

        addEventListener('scroll', revealElements)
        addEventListener('scroll', hideElements)
    }

    const revealElement = (element) => {
        element.classList.add('show')
    }

    const hideElement = (element) => {
        element.classList.remove('show')
    }

    const revealElements = () => {
        const windowsHeight = window.innerHeight
        const elementsToReveal = document.querySelectorAll('.reveal-effect')
        elementsToReveal.forEach(element => {
            const elementTop = element.getBoundingClientRect().top
            if((windowsHeight) >= elementTop) {
                revealElement(element)
            }
        });
    }

    const hideElements = () => {
        const windowsHeight = window.innerHeight
        const elementsToReveal = document.querySelectorAll('.reveal-effect')
        elementsToReveal.forEach(element => {
            const elementTop = element.getBoundingClientRect().top
            if((windowsHeight) < elementTop) {
                hideElement(element)
            }
        });
    }

    init()
})