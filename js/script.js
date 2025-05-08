document.oncontextmenu = () => { return false; }
document.onselectstart = () => { return false; }
document.oncopy = () => { return false; }
document.oncut = () => { return false; }

const avatarDom = document.querySelector('.avatar')
avatarDom.addEventListener('click',()=>{
    window.location.href = "https://github.com/sTheNight"
})