import './styles.less'
import './left.less'
import './right.less'
import config from './config.mts'

document.addEventListener('DOMContentLoaded', () => {
  const { title } = config
  fillBasicInfo();
  generateSocialButton()
  generateNavCard()
  calcNavGroupWidth()

  const titleEle: HTMLTitleElement = document.createElement('title')
  titleEle.innerText = title
  document.head.appendChild(titleEle)
  document.querySelector('.avatar')?.addEventListener('click', () => {
    location.href = 'https://www.github.com/sTheNight'
  })
})

window.addEventListener('resize', calcNavGroupWidth)

function calcNavGroupWidth() {
  const cardWidth = document.querySelector<HTMLDivElement>('.nav-card-div')!.offsetWidth
  document.querySelector<HTMLDivElement>(".nav-group")!.style.maxWidth = `${(cardWidth * 3)}px`
}

async function fetchHitokoto() {
  const response = await fetch('https://v1.hitokoto.cn?c=d&c=k')
  const { hitokoto: hitokotoText } = await response.json()
  return hitokotoText
}

function generateSocialButton() {
  const { socialLinks } = config
  const contactDiv = document.querySelector<HTMLDivElement>('.contact')
  socialLinks.forEach(item => {
    const btn: HTMLAnchorElement = document.createElement('a')
    btn.className = 'social-button'
    btn.href = item.link
    btn.innerHTML = item.customIcon ? item.icon : `<i class="${item.icon}"></i>`
    contactDiv!.appendChild(btn)
  })
}

function generateNavCard() {
  const { navItems } = config
  const navGroupEle = document.querySelector<HTMLDivElement>('.nav-group')
  navItems.forEach(item => {
    const newNavCard: HTMLDivElement = document.createElement('div')
    newNavCard.classList.add('nav-card-div')
    newNavCard.innerHTML = `<i class="fa-solid fa-link"></i>${item.name}`
    newNavCard.addEventListener('click', () => {
      location.href = item.link
    })
    navGroupEle!.appendChild(newNavCard)
  })
}

async function fillBasicInfo() {
  const { author, hitokoto, avatar } = config
  const authorNameEle = document.querySelector<HTMLPreElement>('#name')
  const hitokotoEle = document.querySelector<HTMLPreElement>('#Hitokoto')
  const avatarEle = document.querySelector<HTMLDivElement>('.avatar')

  authorNameEle!.innerText = author
  hitokotoEle!.innerText = hitokoto == '#HitokotoEnable#' ? await fetchHitokoto() : hitokoto
  avatarEle!.style.backgroundImage = `url("${avatar}")`;
}