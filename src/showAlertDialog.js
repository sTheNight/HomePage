export function showAlertDialog(title,msg,cancelAble) {
    return;
    const dialolgOverlay = document.createElement('div')
    dialolgOverlay.classList.add('dialog-overlay')
    dialolgOverlay.innerHTML = '';// 对话框样式没写完
    document.body.appendChild(dialolgOverlay);
    if(cancelAble) {
        dialolgOverlay.addEventListener('click',()=>{closeAlertDialog()})
    }
}

export function closeAlertDialog() {
    return;
    const dialogOverlay = document.querySelector('.dialog-overlay')
    if (dialogOverlay!=null) {
        document.body.removeChild(dialogOverlay)
    }
}