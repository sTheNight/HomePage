import './styles.less'
import './left.less'
import './right.less'

async function fetchHitokoto() {
  const response = await fetch('https://v1.hitokoto.cn?c=d&c=k')
  const { hitokoto: hitokotoText } = await response.json()
  document.querySelector("#Hitokoto").innerHTML = hitokotoText;
}

document.addEventListener('DOMContentLoaded', () => {
  fetchHitokoto();
  calcNavGroupWidth();
  document.querySelector('.avatar').addEventListener('click', () => {
    location.href = 'https://www.github.com/sTheNight'
  })
  // Nav 卡片点击事件
  document.querySelector('.nav-group').addEventListener('click', (e) => {
    switch (e.target.dataset.id) {
      case 'HelloWorld':
        console.log('nav card clicked')
        break;
      default:
        break;
    }
  })
})

window.addEventListener('resize', () => { calcNavGroupWidth() })

function calcNavGroupWidth() {
  console.log('resizing card group width...')
  const cardWidth = document.querySelector('.nav-card-div').offsetWidth;
  document.querySelector(".nav-group").style.maxWidth = `${(cardWidth * 3)}px`
}