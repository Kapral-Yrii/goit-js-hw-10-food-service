import data from './menu.json' 
import markup from './template.hbs' 

const refs = {
    menu: document.querySelector(".js-menu"),
    themeSwitch: document.querySelector("#theme-switch-toggle"),
    body: document.querySelector('body')
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const template = data.map(markup).join("")

refs.menu.insertAdjacentHTML('beforeend', template)

refs.themeSwitch.addEventListener('change', (e) => {
    e.target.checked ? refs.body.classList.add(Theme.DARK) : refs.body.classList.remove(Theme.DARK)
    localStorage.setItem('theme', e.target.checked)
    console.log(localStorage.getItem('theme'));
})
function themeCheck() {
    if (localStorage.getItem('theme') === 'true') {
        refs.body.classList.add(Theme.DARK)
        refs.themeSwitch.setAttribute("checked", "checked")
    }
}
themeCheck()