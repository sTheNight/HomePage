import './styles.less'
import './left.less'
import './right.less'

async function fetchHitokoto() {
  const response = await fetch('https://v1.hitokoto.cn?c=d&c=k')
  const { hitokoto: hitokotoText } = await response.json()
  document.querySelector("#Hitokoto").innerHTML = hitokotoText;
}

document.addEventListener('DOMContentLoaded',()=> {
    fetchHitokoto();
})