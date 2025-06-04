import './styles.less'
import './left.less'
import './right.less'
import config from './config.js'

document.addEventListener('DOMContentLoaded', () => {
  fillBasicInfo();
  generateSocialButton()
  calcNavGroupWidth()
  bindNavcardEvent()
  document.querySelector('.avatar').addEventListener('click', () => {
    location.href = 'https://www.github.com/sTheNight'
  })
})

window.addEventListener('resize', calcNavGroupWidth)

function calcNavGroupWidth() {
  const cardWidth = document.querySelector('.nav-card-div').offsetWidth
  document.querySelector(".nav-group").style.maxWidth = `${(cardWidth * 3)}px`
}

async function fetchHitokoto() {
  const response = await fetch('https://v1.hitokoto.cn?c=d&c=k')
  const { hitokoto: hitokotoText } = await response.json()
  return hitokotoText
}

function bindNavcardEvent() {
  const navCards = document.querySelectorAll('.nav-card-div');
  navCards.forEach((item) => {
    item.addEventListener('click', () => {
      switch (item.dataset.id) {
        case 'sfscn-translation':
          location.href = 'https://github.com/sTheNight/Spaceflight-Simulator-CNlang'
          break
        case 'home-page-proj':
          location.href = 'https://github.com/sTheNight/HomePage'
          break;
        default:
          console.log('https://github.com/sTheNight/HomePage')
          break;
      }
    })
  })
}
//<a class="social-button" href="https://t.me/SodiumDichromate" target="_blank"><i
//  class="fa-brands fa-telegram"></i></a>
function generateSocialButton() {
  const { socialLinks } = config
  const contactDiv = document.querySelector('.contact')
  socialLinks.forEach(item => {
    const btn = document.createElement('a')
    btn.className = 'social-button'
    btn.href = item.link
    btn.innerHTML = item.customIcon ? item.icon : `<i class="${item.icon}"></i>`
    contactDiv.appendChild(btn)
  })
}

async function fillBasicInfo() {
  const { author, hitokoto,avatar } = config
  const authorNameEle = document.querySelector('#name')
  const hitokotoEle = document.querySelector('#Hitokoto')
  const avatarEle = document.querySelector('.avatar')

  authorNameEle.innerText = author
  hitokotoEle.innerText = hitokoto == '#HitokotoEnable#' ? await fetchHitokoto() : hitokoto
  avatarEle.style.backgroundImage = `url("${avatar}")`;
}