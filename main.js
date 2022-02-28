const login = document.querySelector('.js-log-in')
const modal = document.querySelector('.js-modal')
const comeback = document.querySelector('.js-come-back')
const registration = document.querySelector('.js-registration')
const overlay = document.querySelector('.js-overlay')
const bodymodal = document.querySelector('.js-body-modal')
const search_history = document.querySelector('.header__search-history')
const loGinNex = document.querySelector('.auth-form__switch-btn');
const login_remove = document.querySelector('.js-remove');
const NextLogin = document.querySelector('.js-remove-modal')
const back = document.querySelector('.js-come-back-login')
const li_login = document.querySelector('.js-li-login');
const login_next_page = document.querySelector('.js-next-login')


function focusMouse(e) {
    e.preventDefault();
}

search_history.addEventListener('mousedown', focusMouse)

function nextpage() {
    NextLogin.classList.add('remove');
    login_remove.classList.remove('remove');
}


function Showmodal() {
    modal.classList.add('open')
    NextLogin.classList.add('remove');

}

function Removemodal() {
    modal.classList.remove('open')
    login_remove.classList.remove('remove');
    NextLogin.classList.remove('remove');

}

function showModal_login() {
    modal.classList.add('open')
    login_remove.classList.add('remove');
}


login.addEventListener('click', Showmodal)
comeback.addEventListener('click', Removemodal)
overlay.addEventListener('click', Removemodal)
    /* bodymodal.addEventListener('click', function(envent) {
        envent.stopImmediatePropagation()
    }) */

function loginNexts() {
    login_remove.classList.add('remove');
    NextLogin.classList.remove('remove');


}

loGinNex.addEventListener('click', loginNexts)
back.addEventListener('click', Removemodal)
li_login.addEventListener('click', showModal_login)
login_next_page.addEventListener('click', nextpage)