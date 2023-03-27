const menu = document.querySelector('.menu-mobile');
const close_menu = document.querySelector('.close-menu-mobile')
const navigation = document.querySelector('.navigation')
const link_home = document.querySelector('.link_home')
const link_about = document.querySelector('.link-about')
const link_products = document.querySelector('.link-products')
const link_contact = document.querySelector('.link-contact')


menu.addEventListener('click', () => {
    navigation.classList.toggle('navigation-show')
})

close_menu.addEventListener('click', () => {
    navigation.classList.toggle('navigation-show')
} )


link_home.addEventListener('click', () => {
    navigation.classList.toggle('navigation-show')
})

link_about.addEventListener('click', () => {
    console.log('click en about')
    navigation.classList.toggle('navigation-show')
})

link_products.addEventListener('click', () => {
    navigation.classList.toggle('navigation-show')
})

link_contact.addEventListener('click', () => {
    console.log('click en about')
    navigation.classList.toggle('navigation-show')
})

