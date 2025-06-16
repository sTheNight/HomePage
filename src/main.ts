import '../less/styles.less'
import '../less/left.less'
import '../less/right.less'
import { debounce } from './utils.mts'
import { config } from './config.mts'

document.addEventListener('DOMContentLoaded', () => {
    fillBasicInfo();
    generateSocialButton()
    generateNavCard()
    calcNavGroupWidth()
})

window.addEventListener('resize', debounce(calcNavGroupWidth, 500))

function calcNavGroupWidth(): void {
    const cardWidth = document.querySelector<HTMLDivElement>('.nav-card-div')?.offsetWidth
    if (cardWidth) document.querySelector<HTMLDivElement>(".nav-group")!.style.maxWidth = `${(cardWidth * 3)}px`
}

async function fetchHitokoto(): Promise<string> {
    const response = await fetch('https://v1.hitokoto.cn?c=d&c=k')
    const { hitokoto: hitokotoText } = await response.json()
    return hitokotoText
}

function generateSocialButton(): void {
    const { socialLinks } = config
    const contactDiv = document.querySelector<HTMLDivElement>('.contact')
    socialLinks.forEach(item => {
        const btn: HTMLAnchorElement = document.createElement('a')
        btn.className = 'social-button'
        btn.href = item.link
        btn.innerHTML = item.customIcon ? item.icon : `<i class="${item.icon}"></i>`
        contactDiv?.appendChild<HTMLAnchorElement>(btn)
    })
}

function generateNavCard(): void {
    const { navItems } = config
    const navGroupEle = document.querySelector<HTMLDivElement>('.nav-group')
    navItems.forEach(item => {
        const newNavCard: HTMLDivElement = document.createElement('div')
        newNavCard.classList.add('nav-card-div')
        newNavCard.innerHTML = `<i class="fa-solid fa-link"></i>${item.name}`
        newNavCard.addEventListener('click', () => {
            location.assign(item.link)
        })
        navGroupEle?.appendChild<HTMLDivElement>(newNavCard)
    })
}

async function fillBasicInfo(): Promise<void> {
    const { author, hitokoto, avatar, favicon, title } = config

    const nameEl = document.querySelector<HTMLPreElement>('#name')
    if (nameEl) nameEl.innerText = author

    const hitokotoEl = document.querySelector<HTMLPreElement>('#Hitokoto')
    if (hitokotoEl)
        hitokotoEl.innerText = hitokoto === '#HitokotoEnable#'
            ? await fetchHitokoto()
            : hitokoto

    const avatarEl = document.querySelector<HTMLDivElement>('.avatar')
    if (avatarEl) {
        avatarEl.style.backgroundImage = `url("${avatar}")`
        avatarEl.addEventListener('click', () => {
            location.assign('https://www.github.com/sTheNight')
        })
    }

    const faviconEl = document.createElement('link')
    faviconEl.rel = 'icon'
    faviconEl.href = favicon
    document.head.appendChild(faviconEl)

    const titleEl = document.createElement('title')
    titleEl.innerText = title
    document.head.appendChild(titleEl)
}