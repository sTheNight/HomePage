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
      case 'thispage':
        location.href = 'https://github.com/sTheNight/HomePage'
        break;
      default:
        break;
    }
  })
})

window.addEventListener('resize', () => { calcNavGroupWidth() })
// 宽度计算器逻辑待修改
// 预计将改为索引出宽度最大的卡片用于计算整个group的宽度
// 亦或是将 navGroup 改为瀑布流布局
function calcNavGroupWidth() {
  console.log('resizing card group width...')
  const cardWidth = document.querySelector('.nav-card-div').offsetWidth;
  document.querySelector(".nav-group").style.maxWidth = `${(cardWidth * 3)}px`
}