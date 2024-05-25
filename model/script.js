const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.closeBtn')
const blur = document.querySelector('.blur')
const modalContainer = document.querySelector('.modal-container')

openBtn.addEventListener('click', () => {
    modalContainer.style.display = 'block'
    blur.style.display = 'block'
})
closeBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
    blur.style.display = 'none'
})