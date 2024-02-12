$(function () {
    const openBtn = document.querySelector('j-modal-open')
    const modalWindow = document.querySelector('j-modal-window')
    if (openBtn === null || openBtn === undefined) {
        console.log('ererer')
    }
    else {
        openBtn?.addEventListener('click', () => {
            console.log('HHHH')
            modalWindow?.classList.toggle('active')
        })
    }
})
