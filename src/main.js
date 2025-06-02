import './styles.less'
import './left.less'
import './right.less'


document.addEventListener('DOMContentLoaded', () => {
  fetchHitokoto()
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
  document.querySelector("#Hitokoto").innerHTML = hitokotoText
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
