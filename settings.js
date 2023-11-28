const settingsBox = () => {
    document.getElementsByClassName("settings-box")[0].classList.toggle('settings-box-active')
    document.getElementsByClassName("set-button")[0].classList.toggle('settings-button-inactive')
    document.getElementsByClassName("back-button")[0].classList.toggle('back-button-active')
}
const pauseGame = () => {
    document.getElementsByClassName("set-button")[1].classList.toggle('settings-button-inactive')
    document.getElementsByClassName("back-button")[1].classList.toggle('back-button-active')
}