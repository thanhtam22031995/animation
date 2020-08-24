const box = document.querySelector('#magicBox')
const menu = document.querySelector('#magicMenu')
if (box) {
    box.addEventListener('click', (e) => {
        // boxx.classList.add('active')
        box.classList.toggle('active')
        if (menu) {
            menu.classList.toggle('show')
        }

    })
}


