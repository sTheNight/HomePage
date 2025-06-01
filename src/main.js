import './styles.less'
import './left.less'
import './right.less'
import  './alertDialog.less'
import { showAlertDialog,closeAlertDialog } from './showAlertDialog'

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
      case 'home-page-proj':
        location.href = 'https://github.com/sTheNight/HomePage'
        break;
      case 'sfscn-translation':
        location.href = 'https://github.com/sTheNight/Spaceflight-Simulator-CNlang'
      default:
        showAlertDialog(1,1,1);
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