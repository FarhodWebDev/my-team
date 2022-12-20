const sitenavShowBtn = document.querySelector('.sitenav__show')

const sitenav = document.querySelector('.sitenav')

const sitenavCloseBtn = document.querySelector('.sitenav__closer')

sitenavShowBtn.addEventListener('click', () => {
 sitenav.classList.add('show')
})

sitenavCloseBtn.addEventListener('click', () => {
 sitenav.classList.remove('show')
})
