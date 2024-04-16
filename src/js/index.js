function scrollToElement(elementSelector, instace = 0){
    const elements = document.querySelectorAll(elementSelector)
    if (elements.length > instace){
        elements[instace].scrollIntoView({
            behavior:'smooth'
        })
    }
}
const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")
const link4 = document.getElementById("link4")

link1.addEventListener('click', ()=> {
    scrollToElement('.header')
})

link2.addEventListener('click', ()=> {
    scrollToElement('.header',1)
})
link3.addEventListener('click', ()=> {
    scrollToElement('.projects')
})
link4.addEventListener('click', ()=> {
    scrollToElement('.column')
})