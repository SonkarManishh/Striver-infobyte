"https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

"https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"

"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"

const menuBtn= document.getElementById('menu-btn')
    const fullScreen = document.getElementById('full-nav')
    menuBtn.addEventListener('click', ()=>{
        fullScreen.style.visibility = "visible"
    })
    fullScreen.addEventListener('click', ()=>{
        fullScreen.style.visibility = "hidden"
    })